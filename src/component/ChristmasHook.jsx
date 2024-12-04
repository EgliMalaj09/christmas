import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const ChristmasHook = (props) => {
    const { nodes, materials } = useGLTF('/christmas_hook.glb')
    return (
        <group {...props} rotation={[0, -Math.PI / 2, -Math.PI / 2]} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere12_lambert1_0.geometry}
                    material={materials.lambert1}
                    scale={11.651}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus19_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 11.75, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus20_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, 11.277, 0]}
                    scale={1.464}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus21_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 11.277, 0]}
                    scale={1.464}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus22_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 10.803, 0]}
                    scale={1.881}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus23_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, 10.069, 0]}
                    scale={2.843}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus24_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 9.614, 0]}
                    scale={2.857}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus25_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 9.502, 0]}
                    scale={3.44}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus26_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, 8.815, 0]}
                    scale={4.163}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus27_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 7.984, 0]}
                    scale={5.038}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus28_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, 6.712, 0]}
                    scale={6.097}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus29_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 5.443, 0]}
                    scale={6.823}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus30_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 5.464, 0]}
                    scale={6.913}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus32_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, 4.304, 0]}
                    scale={7.431}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus33_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, 1.585, 0]}
                    scale={8.011}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus34_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, -0.846, 0]}
                    scale={8.111}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus35_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, -3.339, 0]}
                    scale={7.431}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus36_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, -4.745, 0]}
                    scale={6.913}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus37_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, -6.464, 0]}
                    scale={6.097}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus38_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, -8.106, 0]}
                    scale={5.038}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus39_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, -8.904, 0]}
                    scale={4.163}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus40_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, -10.173, 0]}
                    scale={3.44}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus41_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, -9.282, 0]}
                    scale={4.163}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus42_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, -10.916, 0]}
                    scale={2.843}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus43_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, -11.908, 0]}
                    scale={1.881}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus44_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, -12.495, 0]}
                    scale={1.464}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pTorus45_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[0, -13.219, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere13_lambert1_0.geometry}
                    material={materials.lambert1}
                    position={[0, -13.433, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere14_lambert2_0.geometry}
                    material={materials.lambert2}
                    position={[-35.14, 7.919, 0]}
                    scale={0.276}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/christmas_hook.glb')