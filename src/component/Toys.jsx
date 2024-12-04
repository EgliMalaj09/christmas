import { getDocs } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { toysCollectionRef } from "../firebase";
import { useToyStore } from "../store/useToyStore";
import ballImage from '../images/christmas_ball.png';
import hookImage from '../images/christmas_hook.png';
import { useMobile } from "../hooks/useMobile";

export const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        getDocs(toysCollectionRef).then((snapshot) => {
            const toysArray = snapshot.docs.map((doc) => doc.data());
            setToys(toysArray);
        });
    }, []);

    return (
        <div>
            {toys.map((toy, index) => (
                <div key={index} style={{ display: "flex" }}>
                    <Toy type="hook" data={toy.hook} />
                    <Toy type="ball" data={toy.ball} />
                </div>
            ))}
        </div>
    );
};

const Toy = React.memo(({ data }) => {
    const isMobile = useMobile()
    const { name } = data;
    const { selectToy, selectedToyName } = useToyStore();

    const handleSelect = () => {
        selectToy(componentToRender.alt);
    }

    const componentToRender = useMemo(() => {
        if (name === 'ball.glb') {
            return {
                src: ballImage,
                alt: "ChristmasBall",
                name: "Christmas Ball"
            }
        } else {
            return {
                src: hookImage,
                alt: "ChristmasHook",
                name: "Christmas Hook"
            }
        }
    }, [name]);

    const buttonStyle = {
        border: selectedToyName === componentToRender.alt ? '2px solid green' : '1px solid #ccc',
        borderRadius: '5px',
        padding: isMobile ? '4px' : '10px',
        cursor: 'pointer',
        backgroundColor: "transparent",
    };

    if (!data) return null;

    return (
        <div style={{ marginRight: 10 }}>
            <button onClick={handleSelect} style={buttonStyle}>
                <img src={componentToRender.src} alt={componentToRender.alt} width={isMobile ? '60' : '100'} height={isMobile ? '70' : '120'} />
                <p style={{ fontSize: isMobile ? '12px' : '14px' }}>{componentToRender.name}</p>
            </button>
        </div>
    );
});

export default Toy;
