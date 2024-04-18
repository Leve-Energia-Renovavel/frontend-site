"use client"

import { clearBrowserData } from "@/app/utils/browser/BrowserUtils";
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import soleProfile from "../../../../resources/icons/large/sole-icon-profile-large.png";
import { LoggoutButton, LoginBox, MenuContent, MenuHeaderContent, MenuOption, MenuOptionsContent } from "./styles";

export default function NewLoggedModal({ isOpen, openModal, closeModal }) {

    const router = useRouter()
    const user = JSON.parse(localStorage.getItem('user'))
    var username = null

    if (user) {
        username = user?.user?.name
    }

    const buttonsOptions = [
        {
            title: "Endereços",
            route: "/installations",
        },
        {
            title: "Minhas Faturas",
            route: "/invoices",
        },
        {
            title: "Minha Conta",
            route: "/profile",
        },
        {
            title: "Ajuda",
            route: "/installations",
        },
        {
            title: "Contratos",
            route: "/installations",
        },
    ]

    const handleLoggout = () => {
        clearBrowserData()
        closeModal()
        router.push("/home")

    }

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
                            backgroundColor: 'transparent',
                        },
                    },
                }}>
                <LoginBox className="animation">
                    <div>
                        <IconButton onClick={closeModal}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <MenuContent>
                        <MenuHeaderContent>
                            <Image src={soleProfile} className="sole" alt="Imagem do Solem, mascote da Leve" />
                            <Typography variant="subtitle1" className="helloUser">Olá, {username ? username : "Visitante"}</Typography>
                        </MenuHeaderContent>
                        <MenuOptionsContent>
                            {buttonsOptions.map((option) => {
                                return (
                                    <MenuOption key={option.title}>
                                        <Typography className="menuTitle">{option.title}</Typography>
                                    </MenuOption>
                                )
                            })}
                        </MenuOptionsContent>
                        <LoggoutButton variant="text" onClick={() => handleLoggout()}>
                            Sair
                        </LoggoutButton>
                    </MenuContent>
                </LoginBox>
            </Modal >
        </>
    );
}