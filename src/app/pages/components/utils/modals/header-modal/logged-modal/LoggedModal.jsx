"use client"

import { useStoreUser } from "@/app/hooks/stores/useStore";
import { useStoreMessages } from "@/app/hooks/stores/useStoreMessages";
import DashboardMenu from "@/app/pages/components/dashboard/side-bar/DashboardMenu";
import DashboardMemberGetMember from "@/app/pages/components/dashboard/side-bar/member-get-member/DashboardMemberGetMember";
import { menuOptions } from "@/app/utils/helper/dashboard/dashboardHelper";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DrawerMenu, DrawerMenuContent, MenuContent, MenuHeaderContent } from "./styles";

export default function LoggedModal({ isOpen, closeModal }) {

    const path = usePathname()
    const storeUser = useStoreUser()
    const storeMessages = useStoreMessages()

    const setNotifications = storeMessages.setNotifications
    const setErrors = storeMessages.setErrors

    const { name } = storeUser?.user || {}

    const filteredOption = menuOptions?.find(option => option?.link === path?.toString());
    const [menuSelected, setMenuSelection] = useState(filteredOption)

    return (
        <>
            <DrawerMenu
                anchor="right"
                open={isOpen}
                onClose={closeModal}
                className="loggedDrawerMenu"
                aria-labelledby="new-logged-modal-title"
                aria-describedby="modal-modal-new-logged-description">

                <DrawerMenuContent className="loggedDrawerMenuContent">
                    <IconButton onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>
                    <MenuContent className="loggedMenuContent">
                        <MenuHeaderContent className="loggedMenuHeaderContent">
                            <p className="helloUser">Olá, {name ? name?.split(" ")[0] : "Visitante"}</p>
                        </MenuHeaderContent>

                        <DashboardMemberGetMember isSideBar={false} setErrors={setErrors} setNotifications={setNotifications} />

                        <DashboardMenu
                            isSideBar={false}
                            menuSelected={menuSelected}
                            setMenuSelection={setMenuSelection}
                            closeModal={closeModal} />
                    </MenuContent>
                </DrawerMenuContent>
            </DrawerMenu>
        </>
    );
}