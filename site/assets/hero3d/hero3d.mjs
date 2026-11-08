import * as THREE from './three.module.js';
import {RoomEnvironment} from './RoomEnvironment.js';
import {buildAppliance} from './hardware-model.mjs';
import {batchRigidParts} from './batch.mjs';
import {poseAt, IDLE_RESUME} from './motion.mjs';

export function mountHero(canvas, {still=false, explosion=null, zoom=1, onStateChange=()=>{}, onLabel=()=>{}}={}) {
  let renderer;
  try { renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,preserveDrawingBuffer:still,powerPreference:'low-power'}); }
  catch { return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,matchMedia('(max-width:600px)').matches?1.25:1.5));
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.03;renderer.setClearColor(0,0);
  const scene=new THREE.Scene(),pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);
  scene.environment=environment.texture;scene.environmentIntensity=.8;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xf3eee2,0x3a3a34,1.6));
  const key=new THREE.DirectionalLight(0xffe9c6,3.2);key.position.set(2,7,5);scene.add(key);
  const fill=new THREE.DirectionalLight(0xd6dccf,1.45);fill.position.set(-5,4,-4);scene.add(fill);
  const model=buildAppliance('office');batchRigidParts(model.root);
  const pivot=new THREE.Group();pivot.add(model.root);model.root.position.y=-.9;scene.add(pivot);
  const camera=new THREE.PerspectiveCamera(30,1,.1,80),point=new THREE.Vector3(),corner=new THREE.Vector3();
  const targets=[['lid',[0,1.1,0]],['thermal',[-.15,.9,-.14]],['compute',[-.3,.47,-.14]],['board',[.8,.32,.6]]];
  let elapsed=17000,previous=null,raf=0,resumeTimer=0,visible=still,paused=false,drag=null,holdUntil=0,offsetYaw=0,offsetPitch=0,disposed=false,dirty=true,lastLabel=-Infinity,width=1,height=1,frames=0;
  const active=()=>!disposed&&visible&&!document.hidden;
  const automatic=()=>!still&&!paused&&!drag&&performance.now()>=holdUntil;
  const state=()=>paused?'paused':drag||performance.now()<holdUntil?'interacting':'playing';
  function notify(){onStateChange(state());}
  function cancel(){cancelAnimationFrame(raf);raf=0;previous=null;clearTimeout(resumeTimer);resumeTimer=0;}
  function armResume(){clearTimeout(resumeTimer);resumeTimer=0;if(active()&&!paused&&!drag&&holdUntil>performance.now())resumeTimer=setTimeout(()=>{notify();schedule();},holdUntil-performance.now()+1);}
  function schedule(){if(active()&&!raf&&(dirty||automatic()))raf=requestAnimationFrame(tick);else armResume();}
  function render(){
    const pose=poseAt(elapsed),opening=explosion??pose.open;model.explode(opening);
    model.parts.lid.position.y+=opening*.35;
    pivot.rotation.set(offsetPitch,pose.yaw+offsetYaw,0);
    renderer.render(scene,camera);frames++;
    if(performance.now()-lastLabel>90||dirty){
      lastLabel=performance.now();
      if(pose.label>=0){
        const [name,coordinates]=targets[pose.label],part=model.parts[name];
        point.fromArray(coordinates);part.localToWorld(point);point.project(camera);
        let right=0,edgeY=0;
        const projectEdge=(x,y,z,matrix)=>{
          corner.set(x,y,z).applyMatrix4(matrix).project(camera);
          const px=(corner.x*.5+.5)*width;
          if(px>right){right=px;edgeY=(-.5*corner.y+.5)*height;}
        };
        part.traverse(mesh=>{
          if(!mesh.isMesh||name==='compute')return;
          const vertices=mesh.geometry.getAttribute('position');
          for(let index=0;index<vertices.count;index++)projectEdge(vertices.getX(index),vertices.getY(index),vertices.getZ(index),mesh.matrixWorld);
        });
        if(name==='compute'){
          for(const x of [-.66,.06])for(const y of [.4145,.473])for(const z of [-.425,.145])projectEdge(x,y,z,part.matrixWorld);
        }
        onLabel({index:pose.label,opacity:pose.opacity,x:right+2,y:edgeY,width,height});
      }else onLabel({index:-1,opacity:0,width,height});
    }
    dirty=false;
  }
  function tick(now){raf=0;if(!active())return;if(automatic()){const dt=previous===null?0:now-previous;elapsed+=dt;previous=now;const decay=Math.exp(-dt/1600);offsetYaw*=decay;offsetPitch*=decay;}else previous=null;render();if(automatic())schedule();else armResume();}
  function size(){if(disposed)return;width=canvas.clientWidth||600;height=canvas.clientHeight||430;renderer.setSize(width,height,false);camera.aspect=width/height;const distance=(Math.max(1,.9/camera.aspect)*(width<380?1.45:1.3))/zoom;camera.position.set(5.6*distance,5.4*distance,7.2*distance);camera.lookAt(0,.45,0);camera.setViewOffset(width,height,width*.16/(zoom*zoom),0,width,height);camera.updateProjectionMatrix();dirty=true;schedule();}
  function pause(){paused=true;cancel();notify();}
  function play(){paused=false;drag=null;holdUntil=0;previous=null;notify();schedule();}
  function interact(){cancel();holdUntil=Infinity;notify();}
  function finish(){if(!drag)return;const id=drag.id;drag=null;if(canvas.hasPointerCapture(id))canvas.releasePointerCapture(id);holdUntil=performance.now()+IDLE_RESUME;previous=null;notify();armResume();}
  function down(event){if(still||event.button!==0||!event.isPrimary||drag)return;drag={id:event.pointerId,x:event.clientX,y:event.clientY,type:event.pointerType};canvas.setPointerCapture(event.pointerId);interact();canvas.dataset.dragging='true';}
  function move(event){if(!drag||event.pointerId!==drag.id)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;offsetYaw+=dx*.008;if(drag.type!=='touch')offsetPitch=THREE.MathUtils.clamp(offsetPitch+dy*.004,-.38,.38);drag.x=event.clientX;drag.y=event.clientY;dirty=true;schedule();}
  function up(){finish();delete canvas.dataset.dragging;}
  const container=canvas.parentElement;
  function keyboard(event){if(still||event.target!==container||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();cancel();if(event.key==='ArrowLeft')offsetYaw-=.15;if(event.key==='ArrowRight')offsetYaw+=.15;if(event.key==='ArrowUp')offsetPitch=Math.max(-.38,offsetPitch-.08);if(event.key==='ArrowDown')offsetPitch=Math.min(.38,offsetPitch+.08);holdUntil=performance.now()+IDLE_RESUME;dirty=true;notify();schedule();}
  function visibility(){cancel();if(!document.hidden){dirty=true;schedule();}}
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;cancel();if(visible){dirty=true;schedule();}},{threshold:.01});
  const resizer=new ResizeObserver(size);resizer.observe(canvas);observer.observe(canvas);
  if(!still){canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);canvas.addEventListener('lostpointercapture',up);container.addEventListener('keydown',keyboard);document.addEventListener('visibilitychange',visibility);}
  size();if(still)render();else notify();
  return {renderer,pause,play,stop:pause,get state(){return state();},
    inspect(){return{elapsed,state:state(),visible,frames,scheduled:!!raf,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,open:poseAt(elapsed).open,label:poseAt(elapsed).label,offsetYaw,offsetPitch};},
    seek(milliseconds){elapsed=Number(milliseconds)||0;previous=null;dirty=true;schedule();},
    dispose(){if(disposed)return;disposed=true;cancel();observer.disconnect();resizer.disconnect();for(const [name,fn] of [['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',up],['lostpointercapture',up]])canvas.removeEventListener(name,fn);container.removeEventListener('keydown',keyboard);document.removeEventListener('visibilitychange',visibility);model.dispose();environment.dispose();renderer.dispose();}
  };
}
