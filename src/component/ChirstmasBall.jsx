import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const ChristmasBall = (props) => {
    const { nodes, materials } = useGLTF('/christmas_ball.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials['Material.001']}
                />
                <lineSegments geometry={nodes.Object_3.geometry} material={materials.snow} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.snow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials['Material.002']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/christmas_ball.glb')