/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair({
  colors,
  setColors,
  hoveredPart,
  setHoveredPart,
  current,
  setCurrent,
  ...rest
}) {
  const { nodes, materials } = useGLTF('chair.glb')
  return (
    <group {...rest} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.ChairCloth2}
        material-color={colors.seat}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHoveredPart('seat')
        }}
        onPointerOut={(e) => e.intersections.length === 0 && setHoveredPart(null)}
        onPointerMissed={() => setCurrent(null)}
        onClick={(e) => {
          e.stopPropagation()
          setCurrent('seat')
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.KedeMat}
        material-color={colors.legs}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHoveredPart('legs')
        }}
        onPointerOut={(e) => e.intersections.length === 0 && setHoveredPart(null)}
        onPointerMissed={() => setCurrent(null)}
        onClick={(e) => {
          e.stopPropagation()
          setCurrent('legs')
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.ChairClothMatPipes}
        material-color={colors.backAndSides}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHoveredPart('backAndSides')
        }}
        onPointerOut={(e) => e.intersections.length === 0 && setHoveredPart(null)}
        onPointerMissed={() => setCurrent(null)}
        onClick={(e) => {
          e.stopPropagation()
          setCurrent('backAndSides')
        }}
      />
    </group>
  )
}

useGLTF.preload('chair.glb')