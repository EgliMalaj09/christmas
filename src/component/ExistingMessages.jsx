import { getDocs } from "firebase/firestore"
import { useEffect, useMemo, useState } from "react"
import { ChristmasBall } from "./ChirstmasBall"
import { ChristmasHook } from "./ChristmasHook"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Html } from "@react-three/drei"

export const ExistingMessages = () => {
    const [existingMessages, setExistingMessages] = useState([])

    // useEffect(() => {

    //     getDocs(messageCollectionRef).then((snapshot) => {
    //         const data = snapshot.docs.map((doc) => {
    //             return doc.data();
    //         })
    //         setExistingMessages(data)
    //     })
    // }, [])

    // const existingMessagesObject = useMemo(() => {

    // },[existingMessages])
    return (
        <>
            {
                existingMessages.map((messageObject) => {
                    return <ExistingMessage {...messageObject} />
                })
            }
        </>
    )
}

const ExistingMessage = ({ tittle, position, name, toy }) => {
    const [isOpened, setIsOpened] = useState(false)
    const renderInformation = useMemo(() => {
        if (toy === "ChristmasBall") {
            return {
                modalTitle: `Wish from ${name}`,
                modalContent: tittle,
                position: position,
                componentToRender: ChristmasBall,
            }
        } else {
            return {
                modalTitle: `Wish from ${name}`,
                modalContent: tittle,
                position: position,
                componentToRender: ChristmasHook
            }
        }
    }, [tittle, position, name, toy])

    console.log("renderInformation: ", renderInformation);
    const handlePointerDown = (event) => {
        event.stopPropagation();
        setIsOpened(true);
    };

    return (
        <>
            <renderInformation.componentToRender
                onPointerDown={handlePointerDown}
                position={[renderInformation.position.x, renderInformation.position.y, renderInformation.position.z]}
                scale={toy === 'ChristmasBall' ? 0.2 : 3}
            />
            <Html>
                <Dialog
                    open={isOpened}
                    onClose={() => setIsOpened(false)}
                >
                    <DialogTitle id="alert-dialog-title">
                        {renderInformation.modalTitle}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {renderInformation.modalContent}
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsOpened(false)} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Html>
        </>
    )

}