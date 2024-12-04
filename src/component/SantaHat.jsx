import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const SantaHat = (props) => {
    const { nodes, materials } = useGLTF('/santa_hat.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.material}
                position={[-1.048, 0, -0.026]}
                rotation={[-Math.PI, 0.049, -Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.Fell}
                position={[-1.048, 0, -0.026]}
                rotation={[-Math.PI, 0.049, -Math.PI]}
                scale={1.011}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.Bobbel}
                position={[0.441, -0.365, 0]}
                scale={0.386}
            />
        </group>
    )
}

useGLTF.preload('/santa_hat.glb')