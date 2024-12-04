import { getDocs } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { toysCollectionRef } from "../firebase";
import { useToyStore } from "../store/useToyStore";
import ballImage from '../images/christmas_ball.png';
import hookImage from '../images/christmas_hook.png';

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

const Toy = ({ data }) => {
    const { name } = data;
    const { selectToy, selectedToyName } = useToyStore();

    const handleSelect = () => {
        selectToy(componentToRender.alt)
    }


    const componentToRender = useMemo(() => {
        if (name === 'ball.glb') {
            return {
                src: ballImage,
                alt: "ChristmasBall",
                name: "Christmas Ball"
            };
        } else {
            return {
                src: hookImage,
                alt: "ChristmasHook",
                name: "Christmas Hook"
            };
        }
    }, [name])

    const buttonStyle = {
        border: selectedToyName === componentToRender.alt ? '2px solid green' : '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'pointer',
        backgroundColor: 'transparent'
    };

    if (!data) return null;

    return (
        <div style={{ marginRight: 10 }}>
            <button onClick={handleSelect} style={buttonStyle}>
                <img src={componentToRender.src} alt={componentToRender.alt} width={100} height={120} />
                <p>{componentToRender.name}</p>
            </button>

        </div>
    );
};
