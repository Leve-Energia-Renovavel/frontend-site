"use client"

import { clearBrowserData } from "@/app/utils/browser/BrowserUtils";
import { menuOptions } from "@/app/utils/helper/dashboardHelper";
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, IconButton, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import soleProfile from "../../../../resources/icons/large/sole-icon-profile-large.png";
import DashboardMenu from "../new-dashboard/side-bar/DashboardMenu";
import { LoggoutButton, LoginBox, MenuContent, MenuHeaderContent } from "./styles";

export default function NewLoggedModal({ isOpen, openModal, closeModal }) {

    const router = useRouter()
    const path = usePathname()

    const user = JSON.parse(localStorage.getItem('user'))
    var username = null

    if (user) {
        username = user?.user?.name
    }

    const filteredOption = menuOptions?.find(option => option?.link === path?.toString());
    const [menuSelected, setMenuSelection] = useState(filteredOption)

    const handleLoggout = () => {
        clearBrowserData()
        closeModal()
        router.push("/")
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
                <LoginBox>
                    <IconButton onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>
                    <MenuContent>
                        <MenuHeaderContent>
                            <Image src={soleProfile} className="sole" alt="Imagem do Solem, mascote da Leve" />
                            <Typography variant="subtitle1" className="helloUser">Olá, {username ? username : "Visitante"}</Typography>
                        </MenuHeaderContent>

                        <DashboardMenu menuSelected={menuSelected} setMenuSelection={setMenuSelection} closeModal={closeModal} />

                        <LoggoutButton variant="text" onClick={() => handleLoggout()}>
                            Sair
                        </LoggoutButton>
                    </MenuContent>
                </LoginBox>
            </Modal >
        </>
    );
}