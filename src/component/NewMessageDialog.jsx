import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from "@mui/material"
import { addDoc, doc, getDocs, setDoc } from "firebase/firestore"
import React, { useState, useImperativeHandle } from "react"
import { db, messageCollectionRef } from "../firebase"

export const NewMessageDialog = React.forwardRef((props, ref) => {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [message, setMessage] = useState("")
    const [userName, setUserName] = useState("")
    const { position = {}, toy } = props

    const handleClose = () => {
        setIsModalOpened(false)
    }

    const handleOpen = () => {
        setIsModalOpened(true)
    }

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const handleSubmit = () => {
        // addDoc(messageCollectionRef, {
        //     name: userName,
        //     tittle: message,
        //     position: { x: position.x, y: position.y, z: position.z },
        //     toy: toy

        // }).then(() => {
        props?.onClose()
        // })
    }


    useImperativeHandle(ref, () => ({
        handleOpen,
        handleClose,
    }))

    return (
        <Dialog
            open={isModalOpened}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Please leave a message!
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    We value your feedback. Please share your thoughts below:
                </DialogContentText>
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={handleChange}
                    margin="normal"
                />

                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={1}
                    value={userName}
                    onChange={handleUserNameChange}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    color="primary"
                    autoFocus
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
})
