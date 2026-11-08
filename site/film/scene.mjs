import * as THREE from './vendor/three.module.js';
import {RoundedBoxGeometry} from './vendor/RoundedBoxGeometry.js';
import {OrbitControls} from './vendor/OrbitControls.js';
import {RoomEnvironment} from './vendor/RoomEnvironment.js';
import {buildAppliance} from './hardware-model.mjs';

const smooth=(a,b,t)=>{const n=THREE.MathUtils.clamp((t-a)/(b-a),0,1);return n*n*(3-2*n);};
const blend=(a,b,p)=>a+(b-a)*p;
const v=(x,y,z)=>new THREE.Vector3(x,y,z);

export function createFilm(canvas,{pause,dark=false}){
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.92;
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-8,8,5.5,-5.5,.1,100);
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.04);
  scene.environment=env.texture;scene.environmentIntensity=.4;room.dispose();pmrem.dispose();
  const controls=new OrbitControls(camera,canvas);controls.enableDamping=false;controls.enableZoom=false;controls.enablePan=false;controls.minPolarAngle=.35;controls.maxPolarAngle=1.2;controls.target.set(0,.3,0);
  let manual=false,time=0,disposed=false,rendering=false;
  controls.addEventListener('start',()=>{manual=true;pause();});controls.addEventListener('change',()=>{if(manual&&!rendering&&!disposed)renderer.render(scene,camera);});
  const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.8,...extra});
  const m={paper:mat('#e9e5db'),floor:mat('#ded8cb'),wall:mat('#eeeae1'),edge:mat('#c5beaf'),white:mat('#fffefa'),ink:mat('#20211f'),muted:mat('#8b8b7e'),bronze:mat('#c6a16c',{metalness:.5,roughness:.4}),red:mat('#bb2c2c'),screen:mat('#b7c8be',{emissive:'#6b8c7c',emissiveIntensity:.04}),skin:mat('#d7c7ae'),plant:mat('#5f7158'),glass:mat('#c1d1ce',{transparent:true,opacity:.22,depthWrite:false})};
  const rounded=new Map();
  function box(parent,size,position,material,r=.03){const key=[...size,r].join(',');if(!rounded.has(key))rounded.set(key,r?new RoundedBoxGeometry(...size,2,Math.min(r,...size.map(x=>x/3))):new THREE.BoxGeometry(...size));const mesh=new THREE.Mesh(rounded.get(key),material);mesh.position.set(...position);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function sphere(parent,r,position,material){const mesh=new THREE.Mesh(new THREE.SphereGeometry(r,12,8),material);mesh.position.set(...position);mesh.castShadow=true;parent.add(mesh);return mesh;}
  const ambient=new THREE.HemisphereLight(0xffffff,0xc2b9a7,2.2);scene.add(ambient);
  const light=new THREE.DirectionalLight(0xfff4dd,4.2);light.position.set(-5,12,6);light.castShadow=true;light.shadow.mapSize.set(1024,1024);Object.assign(light.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:35});light.shadow.bias=-.0006;light.shadow.normalBias=.025;scene.add(light);
  const fill=new THREE.DirectionalLight(0xd9e6ed,1.5);fill.position.set(7,5,-4);scene.add(fill);
  const ground=box(scene,[200,.08,200],[0,-.45,0],m.paper,0);
  const office=new THREE.Group();scene.add(office);
  box(office,[10.4,.3,7.4],[0,-.18,0],m.edge,.09);box(office,[10,.07,7],[0,0,0],m.floor,.035);
  for(let x=-4.5;x<5;x+=.5)box(office,[.009,.005,6.92],[x,.041,0],m.edge,0);
  // Dollhouse cutaway. The front opening is the entry; the back and side remain legible.
  box(office,[10,.45,.16],[0,.25,-3.45],m.wall);box(office,[10,.14,.16],[0,2.35,-3.45],m.white);
  for(const x of [-4.91,-1.65,1.65,4.91])box(office,[.12,2.25,.16],[x,1.2,-3.45],m.white);
  box(office,[9.65,1.85,.018],[0,1.25,-3.45],m.glass,0);
  box(office,[.16,1.5,7],[-4.95,.8,0],m.wall);box(office,[.16,.8,3.5],[4.95,.45,-1.72],m.wall);
  box(office,[6.25,.12,.15],[-1.8,.07,3.45],m.white);box(office,[1.3,.12,.15],[4.3,.07,3.45],m.white);
  // Thin doorway uprights, deliberately open and unlabeled.
  for(const x of [1.4,3.6])box(office,[.055,1.75,.06],[x,.87,3.46],m.edge,0);
  box(office,[2.25,.055,.06],[2.5,1.76,3.46],m.edge,0);
  function plant(x,z){box(office,[.4,.45,.4],[x,.25,z],m.white,.08);for(let i=0;i<5;i++){const leaf=sphere(office,.22,[x+Math.sin(i*2.4)*.17,.65+i*.1,z+Math.cos(i*2.4)*.17],m.plant);leaf.scale.set(.6,1.7,.8);leaf.rotation.z=i*.3;}}
  plant(-4.15,-2.75);plant(4.35,-2.75);
  // Quiet file shelves indicate a law firm without using real documents or personal data.
  const shelf=new THREE.Group();office.add(shelf);shelf.position.set(-4.45,0,.25);
  box(shelf,[.5,1.8,1.95],[0,.91,0],m.white);for(let level=0;level<3;level++)for(let n=0;n<7;n++)box(shelf,[.48,.38,.13],[.03,.33+level*.5,-.8+n*.24],n%4===0?m.red:m.edge,.009);
  const desks=[],screenMats=[];
  function person(x,z,coat=m.ink,scale=1){const p=new THREE.Group();p.position.set(x,0,z);p.scale.setScalar(scale);office.add(p);box(p,[.32,.53,.24],[0,.67,0],coat,.1);sphere(p,.155,[0,1.08,0],m.skin);const legs=[];for(const sign of [-1,1]){legs.push(box(p,[.105,.42,.12],[sign*.095,.24,0],m.ink,.025));box(p,[.09,.43,.1],[sign*.23,.69,0],coat,.03);}p.userData.legs=legs;return p;}
  function desk(x,z){const p=new THREE.Group();p.position.set(x,0,z);office.add(p);box(p,[1.9,.09,1.03],[0,.81,0],m.white,.045);for(const a of [-.78,.78])for(const b of [-.35,.35])box(p,[.055,.78,.055],[a,.4,b],m.muted,.009);box(p,[.6,.025,.29],[0,.872,.18],m.edge,.014);box(p,[.4,.025,.2],[.61,.872,.2],m.paper,.006);box(p,[.12,.21,.09],[0,.98,-.26],m.ink);box(p,[.87,.55,.065],[0,1.24,-.29],m.ink,.028);const screen=m.screen.clone();screenMats.push(screen);box(p,[.76,.43,.012],[0,1.25,-.25],screen,.012);for(let i=0;i<3;i++)box(p,[.36-i*.065,.018,.006],[-.08,1.35-i*.06,-.24],m.white,0);box(p,[.55,.07,.46],[0,.48,.95],m.ink,.06);box(p,[.55,.55,.08],[0,.74,1.16],m.ink,.06);box(p,[.075,.4,.075],[0,.24,.95],m.muted);const worker=person(x,z+.88,m.muted,.77);worker.position.y=.2;worker.rotation.y=Math.PI;desks.push(p);}
  desk(-2.85,-1.9);desk(.1,-1.9);desk(-2.85,.65);desk(.1,.65);
  const cabinet=new THREE.Group();cabinet.position.set(3.35,0,-1.65);office.add(cabinet);
  box(cabinet,[1.55,.1,1.15],[0,.1,0],m.ink);box(cabinet,[1.55,.09,1.15],[0,1.08,0],m.ink);for(const x of [-.73,.73])box(cabinet,[.055,.9,1.05],[x,.6,0],m.edge);box(cabinet,[1.4,.05,.98],[0,.48,0],m.edge);box(cabinet,[.65,.13,.37],[0,.58,-.07],m.ink);for(let i=0;i<5;i++)box(cabinet,[.023,.024,.018],[-.2+i*.09,.59,.12],m.screen,0);
  const appliance=buildAppliance('office');appliance.root.scale.setScalar(.19);office.add(appliance.root);
  const crew=[person(0,0,m.red),person(0,0,m.ink)];
  const route=[v(2.5,0,4.2),v(2.5,0,2.6),v(2.2,0,.9),v(2.7,0,-.75)];
  const arrival=new THREE.CatmullRomCurve3(route);
  const paths=[],cables=[],pulses=[];
  const lineMat=new THREE.MeshStandardMaterial({color:0x8c8679,roughness:.9});
  const signalMat=new THREE.MeshBasicMaterial({color:dark?0xef7468:0xbb2c2c});
  for(const desk of desks){const x=desk.position.x,z=desk.position.z;const points=[v(3.35,1.23,-1.95),v(3.35,.12,-2.25),v(2.35,.085,-2.4),v(x,.085,-2.4),v(x,.085,z-.32),v(x,1.15,z-.32)];const curve=new THREE.CatmullRomCurve3(points,false,'catmullrom',.08);paths.push(curve);const cable=new THREE.Mesh(new THREE.TubeGeometry(curve,72,.014,5,false),lineMat);office.add(cable);cables.push(cable);const glow=new THREE.Mesh(new THREE.SphereGeometry(.06,8,6),signalMat);office.add(glow);pulses.push(glow);}
  // Small indication, not a performance or security certification symbol.
  const status=sphere(office,.045,[3.35,1.35,-1.12],signalMat);
  function setDark(value){dark=value;scene.background=new THREE.Color(dark?'#141513':'#f5f3ed');m.paper.color.set(dark?'#1c1d1a':'#e9e5db');ground.material=m.paper;signalMat.color.set(dark?'#ef7468':'#bb2c2c');light.intensity=dark?2.3:2.6;ambient.intensity=dark?1.2:1.35;}
  function resize(){if(disposed)return;const w=canvas.parentElement.clientWidth,h=canvas.parentElement.clientHeight;renderer.setSize(w,h,false);const half=Math.max(5.3,7.15/(w/h));camera.left=-half*w/h;camera.right=half*w/h;camera.top=half;camera.bottom=-half;camera.setViewOffset(w,h,0,-h*.12,w,h);camera.updateProjectionMatrix();render(time);}
  function render(t){if(disposed)return;rendering=true;time=t;
    const arrive=smooth(8,16,t),install=smooth(17,24,t),connected=smooth(25,32,t);
    const position=arrival.getPointAt(arrive);
    crew.forEach((p,i)=>{p.visible=t>=8;p.position.set(position.x+(i? .4:-.4),0,position.z);p.position.x=blend(p.position.x,i?2.1:3.95,install);p.position.z=blend(p.position.z,-.25,install);p.rotation.y=blend(Math.PI, i?-.5:.5,install);const walking=t>8&&t<16;const wave=walking?Math.sin(t*9)*.18:0;p.userData.legs.forEach((leg,j)=>leg.rotation.x=j?wave:-wave);});
    appliance.root.visible=t>=8;appliance.root.position.set(blend(position.x,3.35,install),blend(.78,1.13,install)+Math.sin(install*Math.PI)*.45,blend(position.z-.12,-1.65,install));appliance.root.rotation.y=blend(Math.PI,.18,install);
    lineMat.color.set(0x8c8679).lerp(new THREE.Color(dark?0xef7468:0xbb2c2c),connected);lineMat.emissive.set(dark?0xef7468:0xbb2c2c);lineMat.emissiveIntensity=connected*.3;
    cables.forEach((c,i)=>{const growth=smooth(24+i*.45,28+i*.45,t);c.visible=growth>0;c.geometry.setDrawRange(0,Math.floor(c.geometry.index.count*growth/3)*3);});
    pulses.forEach((p,i)=>{p.visible=t>27+i*.6&&t<34.8;const u=((Math.max(0,t-27-i*.6)*.34)%1);p.position.copy(paths[i].getPointAt(u));});
    screenMats.forEach((m,i)=>{m.emissiveIntensity=.04+smooth(28+i*.35,32+i*.35,t)*.26;});status.visible=t>=27;status.scale.setScalar(.6+.4*connected);
    if(!manual){const closer=smooth(15,20,t)*(1-smooth(24,30,t));const opening=1-smooth(0,7,t);camera.position.set(12-closer*2.5-opening*3,12+opening*5-closer*2,14-closer*2);controls.target.set(closer*1.3,.25+closer*.4,-closer*.65);camera.zoom=1+closer*.22;camera.updateProjectionMatrix();camera.lookAt(controls.target);controls.update();}
    renderer.render(scene,camera);rendering=false;
  }
  setDark(dark);const observer=new ResizeObserver(resize);observer.observe(canvas.parentElement);
  return{render,resize,setDark,resetView(){manual=false;},networkBounds(){return paths.map(curve=>{const points=curve.getPoints(150);return {minX:Math.min(...points.map(p=>p.x)),maxX:Math.max(...points.map(p=>p.x)),minZ:Math.min(...points.map(p=>p.z)),maxZ:Math.max(...points.map(p=>p.z))};});},dispose(){if(disposed)return;disposed=true;observer.disconnect();controls.dispose();const gs=new Set(),ms=new Set(),ts=new Set();scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const material of Array.isArray(o.material)?o.material:o.material?[o.material]:[]){ms.add(material);if(material.map)ts.add(material.map);}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>t.dispose());env.dispose();renderer.dispose();}};
}
