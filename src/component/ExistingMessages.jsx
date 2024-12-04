import { getDocs } from "firebase/firestore"
import { useEffect, useMemo, useState } from "react"
import { messageCollectionRef } from "../firebase"
import { ChristmasBall } from "./ChirstmasBall"
import { ChristmasHook } from "./ChristmasHook"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Html } from "@react-three/drei"
import { Transition } from "./NewMessageDialog"

export const ExistingMessages = ({ disableButtons, showButtons }) => {
    const [existingMessages, setExistingMessages] = useState([])

    useEffect(() => {
        getDocs(messageCollectionRef).then((snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return doc.data();
            })
            setExistingMessages(data)
        })
    }, [])

    return (
        <>
            {
                existingMessages.map((messageObject) => {
                    return <ExistingMessage key={`${messageObject.tittle} ${messageObject.name}`} {...messageObject} disableButtons={disableButtons} showButtons={showButtons} />
                })
            }
        </>
    )
}

const ExistingMessage = ({ tittle, position, name, toy, disableButtons, showButtons }) => {
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

    const handlePointerDown = (event) => {
        event.stopPropagation();
        setIsOpened(true);
        disableButtons()
    };

    return (
        <>
            <renderInformation.componentToRender
                onPointerDown={handlePointerDown}
                position={[renderInformation.position.x, renderInformation.position.y, renderInformation.position.z]}
                scale={toy === 'ChristmasBall' ? 0.2 : 3}
            />
            <Html>
                <Dialog sx={{
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black overlay
                    },
                    '& .MuiPaper-root': {
                        backgroundColor: 'white', // Transparent background for the dialog
                        color: 'black', // White text color for content
                        boxShadow: 'none', // Remove default shadows
                        width: 300
                    },
                }} open={isOpened} TransitionComponent={Transition} keepMounted onClose={() => setIsOpened(false)}>
                    <DialogTitle id="alert-dialog-title">
                        {renderInformation.modalTitle}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {renderInformation.modalContent}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setIsOpened(false)
                            showButtons()
                        }} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Html >
        </>
    )

}