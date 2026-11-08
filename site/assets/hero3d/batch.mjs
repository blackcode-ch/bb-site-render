import * as THREE from './three.module.js';

// Merge only meshes sharing a material within each rigid component. The lid,
// cooling, compute and board groups remain independent for the exploded view.
export function batchRigidParts(root) {
  root.updateMatrixWorld(true);
  for (const group of root.children.filter(child => child.isGroup)) {
    const inverse = group.matrixWorld.clone().invert(), batches = new Map();
    group.traverse(mesh => {
      if (!mesh.isMesh || Array.isArray(mesh.material) || mesh.material.transparent) return;
      if (!batches.has(mesh.material)) batches.set(mesh.material, []);
      batches.get(mesh.material).push(mesh);
    });
    for (const [material, meshes] of batches) {
      if (meshes.length < 2) continue;
      const geometries = meshes.map(mesh => {
        const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
        geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld));
        return geometry;
      });
      const combined = new THREE.BufferGeometry();
      for (const name of ['position', 'normal', 'uv']) {
        const attributes = geometries.map(g => g.getAttribute(name));
        if (attributes.some(a => !a)) continue;
        const values = new Float32Array(attributes.reduce((total,a) => total + a.array.length, 0));
        let offset = 0;
        for (const attribute of attributes) { values.set(attribute.array, offset); offset += attribute.array.length; }
        combined.setAttribute(name, new THREE.BufferAttribute(values, attributes[0].itemSize));
      }
      combined.computeBoundingSphere();group.add(new THREE.Mesh(combined, material));
      const retired = new Set();
      for (const mesh of meshes) { retired.add(mesh.geometry); mesh.removeFromParent(); }
      retired.forEach(g => g.dispose());geometries.forEach(g => g.dispose());
    }
  }
}
