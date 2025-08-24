// src/components/VantaNet.jsx
import React, { useRef, useEffect, useState } from 'react'
import NET from 'vanta/dist/vanta.net.min.js' // or "./vanta.net.js" if using a patched local copy
import * as THREE from 'three'

export default function VantaNet({
  color = 0x66ccff,
  backgroundColor = 0x1e1e31,
  lineColor = null, // optional: hex number (0x66ccff) or string "#66ccff"
  points = 10,
  maxDistance = 20,
  spacing = 15,
  showDots = true,
  scale = 1,
  scaleMobile = 1,
}) {
  const ref = useRef(null)
  const [vanta, setVanta] = useState(null)

  // Helper: normalize color input (number or string) -> THREE.Color
  const colorToThreeColor = (c) => {
    try {
      if (typeof c === 'number') return new THREE.Color(c)
      if (typeof c === 'string') return new THREE.Color(c)
      return null
    } catch {
      return null
    }
  }

  useEffect(() => {
    if (vanta || typeof window === 'undefined') return

    const opts = {
      el: ref.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      color,
      backgroundColor,
      points,
      maxDistance,
      spacing,
      showDots,
      scale,
      scaleMobile,
    }

    // init Vanta effect
    const effect = NET(opts)
    setVanta(effect)

    // 1) Try setOptions with lineColor (works if you patched Vanta to read lineColor)
    if (lineColor != null && typeof effect.setOptions === 'function') {
      try {
        effect.setOptions({ lineColor })
      } catch (e) {
        // ignore
      }
    }

    // 2) Runtime fallback: monkey-patch onUpdate to overwrite the lines' vertex colors
    //    This forces the lines mesh to use the single color requested.
    //    It runs AFTER the original onUpdate to keep all geometry logic but override colors.
    const origOnUpdate = effect.onUpdate ? effect.onUpdate.bind(effect) : null
    effect.onUpdate = function (t) {
      // call original update first (geometry, positions, drawRange computed here)
      const ret = origOnUpdate ? origOnUpdate(t) : null

      // If a lineColor was provided, override the vertex color buffer produced by Vanta
      try {
        const lc = lineColor != null ? colorToThreeColor(lineColor) : null
        if (
          lc &&
          this.linesMesh &&
          this.linesMesh.geometry &&
          this.linesMesh.geometry.attributes &&
          this.linesMesh.geometry.attributes.color
        ) {
          const colorAttr = this.linesMesh.geometry.attributes.color
          const arr = colorAttr.array // Float32Array
          // number of vertices currently drawn:
          const count =
            (this.linesMesh.geometry.drawRange &&
              this.linesMesh.geometry.drawRange.count) ||
            arr.length / 3
          const vertexCount = Math.min(count, arr.length / 3) // safety
          const r = lc.r
          const g = lc.g
          const b = lc.b

          // fill only the used vertex slots (3 floats per vertex)
          for (let vi = 0; vi < vertexCount; vi++) {
            const idx = vi * 3
            arr[idx] = r
            arr[idx + 1] = g
            arr[idx + 2] = b
          }
          colorAttr.needsUpdate = true
        }
      } catch (err) {
        // don't break animation if something goes wrong
        // console.warn("VantaNet lineColor override failed", err);
      }

      return ret
    }

    // cleanup
    return () => {
      try {
        if (effect && typeof effect.destroy === 'function') effect.destroy()
      } catch (e) {}
      setVanta(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // run once

  // update options when props change (try setOptions + update fallback props)
  useEffect(() => {
    if (!vanta) return
    const opts = {
      color,
      backgroundColor,
      points,
      maxDistance,
      spacing,
      showDots,
      scale,
      scaleMobile,
    }
    try {
      vanta.setOptions(opts)
      if (lineColor != null) {
        // try to set option for patched vanta
        vanta.setOptions({ lineColor })
      }
    } catch (e) {
      // ignore setOptions errors
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    vanta,
    color,
    backgroundColor,
    points,
    maxDistance,
    spacing,
    showDots,
    scale,
    scaleMobile,
    lineColor,
  ])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        pointerEvents: 'none',
      }}
    />
  )
}
