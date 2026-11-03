<template>
  <canvas ref="canvas" class="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden="true"></canvas>
</template>

<script>
import * as THREE from 'three'

export default {
  mounted() {
    const canvas = this.$refs.canvas
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 22

    const count = 150
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 34
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    const pointsGeo = new THREE.BufferGeometry()
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const points = new THREE.Points(
      pointsGeo,
      new THREE.PointsMaterial({
        color: 0xdbe6ff,
        size: 0.11,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    )
    scene.add(points)

    const maxLinks = 260
    const linePos = new Float32Array(maxLinks * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3))
    lineGeo.setDrawRange(0, 0)
    const lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({
        color: 0x8eb6ff,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    )
    scene.add(lines)

    const shape = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.2, 1),
      new THREE.MeshBasicMaterial({ color: 0xb9d0ff, wireframe: true, transparent: true, opacity: 0.28 })
    )
    shape.position.set(7.2, 1.6, -2)
    scene.add(shape)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: 0, y: 0 }
    const onMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    const link = () => {
      let n = 0
      const maxDist = 4.6
      for (let i = 0; i < count && n < maxLinks; i++) {
        for (let j = i + 1; j < count && n < maxLinks; j++) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          if (dx * dx + dy * dy + dz * dz > maxDist * maxDist) continue
          const o = n * 6
          linePos[o] = pos[i * 3]
          linePos[o + 1] = pos[i * 3 + 1]
          linePos[o + 2] = pos[i * 3 + 2]
          linePos[o + 3] = pos[j * 3]
          linePos[o + 4] = pos[j * 3 + 1]
          linePos[o + 5] = pos[j * 3 + 2]
          n++
        }
      }
      lineGeo.setDrawRange(0, n * 2)
      lineGeo.attributes.position.needsUpdate = true
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let frame = 0
    const tick = () => {
      const t = clock.getElapsedTime()
      if (!reduced) {
        for (let i = 0; i < count; i++) {
          pos[i * 3 + 1] += Math.sin(t * 0.6 + i) * 0.0035
        }
        pointsGeo.attributes.position.needsUpdate = true
        shape.rotation.y = t * 0.14
        shape.rotation.x = Math.sin(t * 0.2) * 0.35
        link()
      }
      camera.position.x += (mouse.x * 2.2 - camera.position.x) * 0.045
      camera.position.y += (-mouse.y * 1.1 - camera.position.y) * 0.045
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
      if (!reduced) frame = requestAnimationFrame(tick)
    }
    link()
    tick()

    this.dispose = () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', onResize)
      pointsGeo.dispose()
      points.material.dispose()
      lineGeo.dispose()
      lines.material.dispose()
      shape.geometry.dispose()
      shape.material.dispose()
      renderer.dispose()
    }
  },
  beforeUnmount() {
    this.dispose?.()
  }
}
</script>
