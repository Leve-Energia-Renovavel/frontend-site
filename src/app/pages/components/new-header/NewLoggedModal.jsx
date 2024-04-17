"use client"

import { Backdrop, Modal } from "@mui/material";
import { LoginBox } from "./styles";

export default function NewLoggedModal({ isOpen, openModal, closeModal }) {

    return (
        <>
            <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="new-logged-modal-title"
                aria-describedby="modal-modal-new-logged-description"
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        sx: {
                            backgroundColor: 'rgba(57, 67, 212, 0.4)',
                        },
                    },
                }}>
                <LoginBox>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                    <div>NewLoggedModal</div>
                </LoginBox>
            </Modal >
        </>
    );
}