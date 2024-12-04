import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera, Html } from '@react-three/drei'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { Card } from '@mui/material'
import { Toys } from './Toys'
import { useToyStore } from '../store/useToyStore'
import { ChristmasBall } from './ChirstmasBall'
import { NewMessageDialog } from './NewMessageDialog'
import { getDocs } from 'firebase/firestore'
import { messageCollectionRef } from '../firebase'
import { ExistingMessages } from './ExistingMessages'
import { ChristmasHook } from './ChristmasHook'
export const Showcase = (props) => {
    const { nodes, materials } = useGLTF('/showcase.glb')
    const tree = useRef()
    const { camera, set, raycaster, mouse } = useThree()
    const targetPosition = { x: -0.024, y: 0.04, z: 2.1 }
    const [showButtons, setShowButtons] = useState(false)
    const [clickPosition, setClickPosition] = useState(null)
    const { selectedToyName } = useToyStore();
    const modalRef = useRef(null)
    const existingMessagesGroup = useRef(new THREE.Group());
    const [isInitialClicked, setIsInitialClicked] = useState(false)
    const handleTreeClick = () => {
        if (tree.current && !isInitialClicked) {
            animateCamera()
        }
    }

    const handleClick = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const existingIntersects = raycaster.intersectObjects(existingMessagesGroup.current.children, true);
        if (existingIntersects.length > 0) {
            return;
        }

        const treeIntersects = raycaster.intersectObject(tree.current);
        if (treeIntersects.length > 0) {
            const intersection = treeIntersects[0].point;
            tree.current.worldToLocal(intersection);

            if (
                selectedToyName === "ChristmasBall"
            ) {
                setClickPosition({ x: intersection.x - 1, y: 2, z: intersection.z });
            } else {
                setClickPosition({ x: intersection.x, y: 2, z: intersection.z });

            }

            setTimeout(() => {
                setShowButtons(false);
                modalRef.current.handleOpen();
            }, 1000);
        }
    };

    const animateCamera = () => {
        gsap.to(camera.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => {
                setShowButtons(true)
                setIsInitialClicked(true)
                window.addEventListener('click', handleClick);
            }
        })
    }

    useEffect(() => {
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const handleDialogSubmit = () => {
        modalRef.current.handleClose()
        setShowButtons(true)
        window.location.reload()

    }

    const onDialogClose = () => {
        modalRef.current.handleClose()
        setShowButtons(true)
    }

    return (
        <group {...props} dispose={null}>
            {
                selectedToyName && clickPosition && (
                    <Html style={{ pointerEvents: 'auto', zIndex: 100 }}>
                        <NewMessageDialog position={clickPosition} toy={selectedToyName} onSubmit={handleDialogSubmit} onClose={onDialogClose} ref={modalRef} />
                    </Html>
                )
            }


            {
                showButtons &&
                <Html position={[0.2, 0, 0]}>
                    <Card
                        size="lg"
                        style={{
                            width: '300px',
                            padding: '10px',
                            background: 'rgba(192, 192, 192, 0.8)',
                            border: '1px solid #b0b0b0',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            borderRadius: '8px',
                            color: '#000',
                        }}
                    >
                        <h4>Try to modify your tree!</h4>
                        <p>Select one of the decoration below then select click somewhere in the tree to add that decoration. After that you will be asked for a message for your lovely teammember.</p>
                        <Toys />
                    </Card>
                </Html>
            }

            <group
                position={[-0.025, 0.017, 1.971]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.002, 0.003, 0.002]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10001.geometry}
                    material={materials['Coushin.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11001.geometry}
                    material={materials['Decoratioj.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17001.geometry}
                    material={materials['Stars.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18001.geometry}
                    material={materials['Wallfloor.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19001.geometry}
                    material={materials['Window_framw.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2001.geometry}
                    material={materials['Carpet.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3001.geometry}
                    material={materials['Christmas_wishing_deco.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4001.geometry}
                    material={materials['Cloth.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6001.geometry}
                    material={materials['Sofa.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7001.geometry}
                    material={materials['Sofa_bed.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8001.geometry}
                    material={materials['Window_glass.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9001.geometry}
                    material={materials['Xmas_tree.001']}
                    ref={tree}
                    onClick={handleTreeClick}
                />

                <group ref={existingMessagesGroup}>
                    <ExistingMessages />
                </group>


                {selectedToyName === 'ChristmasBall' && clickPosition && (
                    <ChristmasBall
                        position={[clickPosition.x, clickPosition.y, clickPosition.z]}
                        scale={0.2}
                    />
                )}
                {selectedToyName === 'ChristmasHook' && clickPosition && (
                    <ChristmasHook
                        position={[clickPosition.x, clickPosition.y, clickPosition.z]}
                        scale={3}
                    />
                )}


            </group>

            <group position={[-0.023, 0.017, 1.944]} scale={[0.019, 0.019, 0.028]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bow001.geometry}
                    material={materials['Christmas RED.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.box_lid001.geometry}
                    material={materials['Christmas Wrapping Paper Trees Yellow.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.box001.geometry}
                    material={materials['Christmas Wrapping Paper Trees Yellow.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.gift_tape001.geometry}
                    material={materials['Christmas RED.001']}
                />
            </group>
            <group position={[-0.048, -0.015, 1.975]} scale={1.117}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Global001.geometry}
                    material={materials['Global_dragon.001']}
                    position={[0.019, 0, 0]}
                    scale={1.494}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wax001.geometry}
                    material={materials['Global_dragon.001']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.Marble}
                position={[-0.107, 0.057, 1.79]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={materials['Material.006']}
                position={[0.15, 0.057, 1.725]}
                scale={[0.104, 0.065, 0.104]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials['Material.008']}
                position={[-0.022, -0.094, 1.977]}
                rotation={[0, -0.096, 0]}
                scale={0.065}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003.geometry}
                material={materials['Material.007']}
                position={[0.103, -0.025, 1.876]}
                scale={0.065}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials['Material.018']}
                position={[-0.023, -0.023, 1.974]}
                rotation={[0, -0.138, 0]}
                scale={0.065}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials['Material.016']}
                position={[2.853, 0.029, 2.686]}
                rotation={[0, 1.045, 0]}
                scale={[1.681, 1, 1.681]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['Material.009']}
                position={[0.016, 0.062, 1.255]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={3.514}
            />
            <PerspectiveCamera
                makeDefault={true}
                far={1000}
                near={0.1}
                fov={20.016}
                position={[0.01, 0.079, 2.783]}
                rotation={[-0.042, -0.014, -0.001]}
                scale={0.065}
            />
            <directionalLight
                intensity={2.17}
                decay={2}
                position={[-1.46, 0.697, 2.124]}
                rotation={[-1.081, -0.858, 0.614]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={nodes.Plane002.material}
                position={[-0.639, 0.227, 1.961]}
                rotation={[0, 0, 0.447]}
                scale={[0.154, 0.903, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={nodes.Plane003.material}
                position={[-0.542, 0.514, 0.75]}
                rotation={[0, 0, 0.447]}
                scale={[0.064, 0.903, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane004.geometry}
                material={materials['Material.017']}
                position={[0.028, -0.248, 1.828]}
                rotation={[0, 0, -Math.PI]}
                scale={0.295}
            />
            <spotLight
                intensity={16.305}
                angle={0.582}
                penumbra={0.15}
                decay={2}
                position={[-0.682, 0.166, 1.892]}
                rotation={[-0.555, -0.989, 0.402]}
                scale={0.058}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005.geometry}
                material={materials['Material.001']}
                position={[0.647, 0.062, 3.636]}
                rotation={[Math.PI / 2, 0, 0.337]}
                scale={3.514}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve001.geometry}
                material={nodes.Curve001.material}
                position={[0.07, 0.069, 1.877]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={3.357}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve003.geometry}
                material={nodes.Curve003.material}
                position={[0.07, 0.069, 1.877]}
                rotation={[0.792, 0, 0]}
                scale={3.357}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve010.geometry}
                material={nodes.Curve010.material}
                position={[0.07, 0.069, 1.877]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={3.357}
            />

            <pointLight intensity={10} color={"gold"} position={[0.07, 0.1, 1.9]}
            />
        </group >
    )
}

useGLTF.preload('/showcase.glb')