import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Santa = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/santa_claus.glb')
    return (
        <group {...props} dispose={null} ref={ref}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.848}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0.761, 1.571, 0.101]} rotation={[0, -Math.PI / 2, 0]} scale={0.227}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_68.geometry}
                            material={materials['Material.006']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_69.geometry}
                            material={materials['Material.002']}
                        />
                    </group>
                    <group position={[0.761, 1.993, -0.267]} rotation={[0, -Math.PI / 2, 0]} scale={0.232}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_71.geometry}
                            material={materials['Material.007']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_72.geometry}
                            material={materials['Material.002']}
                        />
                    </group>
                    <group position={[0.8, 1.57, -0.416]} rotation={[0, -Math.PI / 2, 0]} scale={0.232}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_74.geometry}
                            material={materials['Material.008']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_75.geometry}
                            material={materials['Material.002']}
                        />
                    </group>
                    <group position={[-0.646, 0.725, -0.349]} rotation={[0, -Math.PI / 2, 0]} scale={0.232}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_77.geometry}
                            material={materials['Material.007']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_78.geometry}
                            material={materials['Material.002']}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials['Material.002']}
                        position={[0.005, 0.522, 0.001]}
                        scale={[1, 1, 0.718]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_6.geometry}
                        material={materials['Material.004']}
                        position={[-0.853, 0.225, 0.001]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_8.geometry}
                        material={materials['Material.004']}
                        position={[-0.068, 0.842, 0.007]}
                        scale={[1, 1, 0.718]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_10.geometry}
                        material={materials['Material.002']}
                        position={[0.008, 0.97, 0.355]}
                        scale={0.513}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials['Material.001']}
                        position={[-0.01, 1.437, 0.354]}
                        scale={0.384}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_14.geometry}
                        material={materials['Material.003']}
                        position={[-0.001, 1.469, 0.712]}
                        scale={0.11}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_16.geometry}
                        material={materials.Blanco}
                        position={[-0.073, 1.076, 0.722]}
                        scale={0.236}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_18.geometry}
                        material={materials.Blanco}
                        position={[-0.212, 1.273, 0.642]}
                        scale={0.222}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_20.geometry}
                        material={materials.Blanco}
                        position={[0.12, 1.175, 0.625]}
                        scale={0.255}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_22.geometry}
                        material={materials.Blanco}
                        position={[-0.319, 1.489, 0.426]}
                        scale={0.222}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_24.geometry}
                        material={materials.Blanco}
                        position={[0.302, 1.398, 0.445]}
                        scale={0.222}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_26.geometry}
                        material={materials.material_0}
                        position={[-0.293, 1.415, 0.165]}
                        scale={0.206}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_28.geometry}
                        material={materials.material_0}
                        position={[0.281, 1.353, 0.165]}
                        scale={0.206}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_30.geometry}
                        material={materials.material_0}
                        position={[-0.144, 1.369, 0.038]}
                        scale={0.206}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_32.geometry}
                        material={materials.material_0}
                        position={[0.092, 1.303, 0.024]}
                        scale={0.206}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_34.geometry}
                        material={materials.Blanco}
                        position={[0.202, 1.164, 0.614]}
                        scale={0.269}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_36.geometry}
                        material={materials.Blanco}
                        position={[-0.309, 1.218, 0.511]}
                        scale={0.283}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_38.geometry}
                        material={materials.Blanco}
                        position={[0.019, 1.661, 0.297]}
                        rotation={[-0.179, 0, -0.088]}
                        scale={0.291}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_40.geometry}
                        material={materials['Material.002']}
                        position={[0.19, 1.863, 0.185]}
                        rotation={[-0.378, 0, 0]}
                        scale={0.345}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_42.geometry}
                        material={materials.Blanco}
                        position={[0.51, 1.823, 0.092]}
                        scale={0.151}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_44.geometry}
                        material={materials.Blanco}
                        position={[-0.122, 1.669, 0.618]}
                        scale={0.149}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_46.geometry}
                        material={materials.Blanco}
                        position={[0.184, 1.605, 0.617]}
                        rotation={[0, 0, -0.578]}
                        scale={0.149}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_48.geometry}
                        material={materials['Material.004']}
                        position={[-0.136, 1.609, 0.643]}
                        rotation={[0, 0, -0.227]}
                        scale={0.053}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_50.geometry}
                        material={materials['Material.004']}
                        position={[0.168, 1.546, 0.65]}
                        rotation={[0, 0, -0.277]}
                        scale={0.149}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_52.geometry}
                        material={materials['Material.004']}
                        position={[-0.061, 0.703, 0.316]}
                        rotation={[0, 0, -0.24]}
                        scale={0.39}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_54.geometry}
                        material={materials['Material.005']}
                        position={[-0.287, 0.682, 0.715]}
                        rotation={[0.393, -0.563, -0.091]}
                        scale={[0.017, 0.017, 0.008]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_56.geometry}
                        material={materials['Material.002']}
                        position={[-0.578, 1.198, 0.261]}
                        rotation={[0, 0, 1.051]}
                        scale={0.087}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_58.geometry}
                        material={materials.Blanco}
                        position={[-0.765, 1.305, 0.261]}
                        rotation={[0, 0, 1.04]}
                        scale={[0.092, 0.186, 0.092]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_60.geometry}
                        material={materials['Material.002']}
                        position={[0.526, 1.184, 0.46]}
                        rotation={[0, 0, -1.146]}
                        scale={0.087}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_62.geometry}
                        material={materials.Blanco}
                        position={[0.722, 1.273, 0.459]}
                        rotation={[0, 0, -1.156]}
                        scale={[0.092, 0.186, 0.092]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_64.geometry}
                        material={materials['Material.004']}
                        position={[-0.828, 1.361, 0.263]}
                        rotation={[0, 0, -0.52]}
                        scale={[0.078, 0.078, 0.033]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_66.geometry}
                        material={materials['Material.004']}
                        position={[0.794, 1.321, 0.462]}
                        rotation={[-Math.PI, 0, 2.779]}
                        scale={[0.078, 0.078, 0.033]}
                    />
                </group>
            </group>
        </group>
    )
})

useGLTF.preload('/santa_claus.glb')