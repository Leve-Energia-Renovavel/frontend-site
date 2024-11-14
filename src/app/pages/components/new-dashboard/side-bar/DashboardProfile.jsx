"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { formatCpfRestricted } from "@/app/utils/formatters/documentFormatter";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import { NewDashboardProfile, ProfileHeader } from "./styles";

export default function DashboardProfile({ isMobileContent }) {

    const router = useRouter()
    const store = useStoreUser()

    const { name, cpf } = store?.user || {}

    const username = name.split(" ")[0] !== "" ? name.split(" ")[0] : null

    return (
        <NewDashboardProfile isMobileContent={isMobileContent} className="dashboardProfile">
            <ProfileHeader>
                <PersonOutlineIcon className="profileIcon" />
                <h6 className="username">Olá, {username ? username : <Skeleton variant="text" className="loadingUsername" />}</h6>
                <p className="goToProfile" onClick={() => router.push("/dashboard/profile")}>Ver perfil</p>
            </ProfileHeader>
            <p className="cpf">CPF: {cpf ? formatCpfRestricted(cpf) : <Skeleton variant="text" className="loadingCpf" />}</p>
        </NewDashboardProfile>
    )
}