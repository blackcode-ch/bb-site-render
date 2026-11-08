import * as THREE from './three.module.js';
import { RoundedBoxGeometry } from './RoundedBoxGeometry.js';

/** Procedural visual geometry; all internal positions are illustrative. */
export function buildAppliance(tier = 'office') {
  const root = new THREE.Group(); root.name = `brigitte-${tier}`;
  const enterprise = tier === 'enterprise';
  const width = enterprise ? 5.1 : 3;
  const depth = enterprise ? 3.65 : 3;
  const height = enterprise ? 0.85 : 1.01;
  const bronze = new THREE.MeshStandardMaterial({ color: enterprise ? 0x5a6266 : 0xc3a375, metalness: .92, roughness: .34 });
  const edge = new THREE.MeshStandardMaterial({ color: enterprise ? 0x383f43 : 0x96794f, metalness: .9, roughness: .4 });
  const black = new THREE.MeshStandardMaterial({ color: 0x10191a, metalness: .4, roughness: .65 });
  const boardMat = new THREE.MeshStandardMaterial({ color: 0x193f35, metalness: .3, roughness: .68 });
  const silver = new THREE.MeshStandardMaterial({ color: 0x809197, metalness: .86, roughness: .3 });
  const chipMat = new THREE.MeshStandardMaterial({ color: 0x1e292c, metalness: .65, roughness: .35 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xba8557, metalness: .87, roughness: .35 });
  const teal = new THREE.MeshStandardMaterial({ color: 0x8ba86f, emissive: 0x14291b, metalness: .25, roughness: .5 });
  function box(parent, size, position, material, radius = .02) {
    const geometry = radius > 0 ? new RoundedBoxGeometry(...size, 3, Math.min(radius, ...size.map(n => n / 3))) : new THREE.BoxGeometry(...size);
    const mesh = new THREE.Mesh(geometry, material); mesh.position.set(...position); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  const base = new THREE.Group(); root.add(base);
  box(base, [width, .14, depth], [0, .12, 0], bronze, .13);
  for (const x of [-1, 1]) for (const z of [-1, 1]) box(base, [.4, .09, .38], [x * (width / 2 - .4), .035, z * (depth / 2 - .4)], black, .055);
  // Perforated side-band appearance, represented by crossed metallic slats.
  const sides = new THREE.Group(); root.add(sides);
  for (const side of [-1, 1]) {
    box(sides, [.07, height - .26, depth - .22], [side * (width / 2 - .035), height / 2, 0], black);
    box(sides, [width - .2, height - .26, .055], [0, height / 2, side * (depth / 2 - .035)], black);
    for (let index = 0; index < 41; index++) {
      const z = -depth / 2 + .16 + index * (depth - .32) / 40;
      const slat = box(sides, [.025, height - .28, .026], [side * width / 2, height / 2, z], edge, 0);
      slat.rotation.x = .35 * side;
    }
    if (side === 1) for (let index = 0; index < 43; index++) {
      const x = -width / 2 + .17 + index * (width - .34) / 42;
      const slat = box(sides, [.032, height - .27, .035], [x, height / 2, depth / 2], bronze, 0);
      slat.rotation.z = .24;
    }
  }
  const lid = new THREE.Group(); root.add(lid);
  box(lid, [width, .12, depth], [0, height, 0], bronze, .14);
  box(lid, [width - .23, .015, depth - .23], [0, height + .063, 0], edge, .08);
  box(lid, [width - .28, .013, depth - .28], [0, height + .075, 0], bronze, .07);
  const labelCanvas = document.createElement('canvas'); labelCanvas.width = 1024; labelCanvas.height = 256;
  const ctx = labelCanvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 256); ctx.fillStyle = enterprise ? '#d8dfd7' : '#413626';
  ctx.font = 'bold 130px Arial'; ctx.fillText('brigitte.', 20, 142);
  ctx.font = '25px Arial'; ctx.fillText(enterprise ? 'ENTERPRISE / CONFIGURATION STUDY' : 'LOCAL COMPUTE / OFFICE', 28, 206);
  const texture = new THREE.CanvasTexture(labelCanvas); texture.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Mesh(new THREE.PlaneGeometry(enterprise ? 2.7 : 1.9, enterprise ? .675 : .475), new THREE.MeshStandardMaterial({ map: texture, transparent: true, roughness: .65, metalness: .4, depthWrite: false }));
  label.rotation.x = -Math.PI / 2; label.position.set(0, height + .087, .12); lid.add(label);
  // Rear ports: office uses the published connector counts, not a CAD reconstruction.
  const rear = new THREE.Group(); root.add(rear);
  const rz = -depth / 2 - .009;
  box(rear, [width - .13, .62, .07], [0, .48, rz], black, .05);
  function connector(x, y, w, h, kind) {
    const frame = box(rear, [w, h, .1], [x, y, rz - .048], silver, .025);
    box(rear, [w - .032, h - .027, .018], [x, y, rz - .107], black, .009);
    if (kind === 'usb') box(rear, [w - .075, .011, .012], [x, y, rz - .12], copper, 0);
    else box(rear, [w - .055, .018, .009], [x, y - h / 2 + .035, rz - .119], copper, 0);
    frame.userData.kind = kind;
  }
  if (!enterprise) {
    for (let index = 0; index < 4; index++) connector(-1.14 + index * .27, .47, .185, .105, 'usb');
    connector(-.02, .47, .245, .125, 'hdmi');
    connector(.33, .48, .245, .22, 'rj45');
    connector(.74, .48, .3, .22, 'qsfp'); connector(1.13, .48, .3, .22, 'qsfp');
    const power = new THREE.Mesh(new THREE.CylinderGeometry(.047, .047, .03, 18), bronze);
    power.rotation.x = Math.PI / 2; power.position.set(-1.27, .7, rz - .085); rear.add(power);
  } else {
    for (let index = 0; index < 6; index++) connector(-1.5 + index * .58, .43, .35, .19, 'placeholder');
    for (const sign of [-1, 1]) {
      box(base, [.27, height + .04, .15], [sign * (width / 2 + .09), height / 2, depth / 2 - .025], silver, .03);
      box(base, [.09, .45, .3], [sign * (width / 2 + .13), height / 2, depth / 2 + .12], black, .03);
    }
  }
  const board = new THREE.Group(); root.add(board);
  box(board, [width - .35, .07, depth - .45], [0, .28, 0], boardMat, .055);
  for (let i = 0; i < 16; i++) box(board, [.018, .004, depth - .7], [-width / 2 + .36 + i * (width - .72) / 15, .318, 0], copper, 0);
  const compute = new THREE.Group(); root.add(compute);
  box(compute, [1.07, .07, .88], [-.3, .38, -.14], silver, .04);
  box(compute, [.72, .055, .57], [-.3, .442, -.14], chipMat, .025);
  box(compute, [.3, .005, .43], [-.5, .473, -.14], teal, .01);
  box(compute, [.3, .005, .43], [-.12, .473, -.14], copper, .01);
  // Four schematic memory blocks indicate one shared pool, not actual package count.
  for (const [x, z] of [[-.93, -.13], [.34, -.13], [-.3, -.79], [-.3, .54]]) box(compute, [.34, .065, .28], [x, .365, z], chipMat, .015);
  const memoryLoop = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1.1, .405, -.94), new THREE.Vector3(.53, .405, -.94), new THREE.Vector3(.53, .405, .72), new THREE.Vector3(-1.1, .405, .72)]), new THREE.LineBasicMaterial({ color: 0xbcc786 })); compute.add(memoryLoop);
  const storage = new THREE.Group(); root.add(storage);
  box(storage, [.33, .055, 1.04], [width / 2 - .49, .36, .23], boardMat, .02);
  for (const z of [-.1, .23, .56]) box(storage, [.26, .04, .24], [width / 2 - .49, .405, z], chipMat, .012);
  box(storage, [.28, .03, .09], [width / 2 - .49, .398, -.3], copper, .006);
  const thermal = new THREE.Group(); root.add(thermal);
  for (let index = 0; index < 21; index++) box(thermal, [.033, .2, 1.4], [-.73 + index * .057, .67, -.14], silver, 0);
  const fan = new THREE.Group(); fan.position.set(-.15, .85, -.14); thermal.add(fan);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(.46, .055, 10, 44), black); rim.rotation.x = Math.PI / 2; fan.add(rim);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(.14, .14, .07, 24), chipMat); fan.add(hub);
  for (let index = 0; index < 9; index++) {
    const blade = box(fan, [.19, .025, .36], [Math.sin(index * Math.PI * 2 / 9) * .25, 0, Math.cos(index * Math.PI * 2 / 9) * .25], black, .055);
    blade.rotation.y = index * Math.PI * 2 / 9 + .65;
  }
  const anchors = {
    ports: { position: new THREE.Vector3(.7, .58, rz - .17), group: rear, internal: false },
    backup: { position: new THREE.Vector3(-.95, .58, rz - .17), group: rear, internal: false },
    memory: { position: new THREE.Vector3(-.3, .52, -.12), group: compute, internal: true },
    storage: { position: new THREE.Vector3(width / 2 - .49, .46, .23), group: storage, internal: true },
    cooling: { position: new THREE.Vector3(-.15, 1, -.14), group: thermal, internal: true },
  };
  function explode(value) {
    lid.position.y = value * 2.45; lid.position.x = value * -.22;
    thermal.position.y = value * 1.5; thermal.position.z = value * -.6;
    compute.position.y = value * .78; storage.position.y = value * .45;
    storage.position.x = value * .3; board.position.y = value * .18;
  }
  return { root, anchors, parts: { lid, thermal, compute, board }, width, depth, height, explode, dispose() {
    const geometries = new Set(); const materials = new Set(); const textures = new Set();
    root.traverse(object => { if (object.geometry) geometries.add(object.geometry); if (object.material) { for (const material of Array.isArray(object.material) ? object.material : [object.material]) { materials.add(material); if (material.map) textures.add(material.map); } } });
    geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); textures.forEach(t => t.dispose());
  } };
}
