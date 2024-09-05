/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { getProfileData } from "@/app/service/profile-service/ProfileService";
import { formatCpfRestricted } from "@/app/utils/formatters/documentFormatter";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NewDashboardProfile, ProfileHeader } from "./styles";

export default function DashboardProfile({ isMobileContent }) {

    const router = useRouter()
    const store = useStoreUser()
    const user = JSON.parse(localStorage.getItem('user'))

    const { name, cpf } = user?.user ?? (store?.user || {})

    const username = name.split(" ")[0] !== "" ? name.split(" ")[0] : name.split(" ")[1]

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async () => {
            await getProfileData(store, setIsLoading)
        };
        fetchUserData();
    }, []);

    return (
        <NewDashboardProfile isMobileContent={isMobileContent} className="dashboardProfile">
            <ProfileHeader>
                <PersonOutlineIcon className="profileIcon" />
                <h6 className="username">Olá, {username ? username : "Usuário"}</h6>
                <p className="goToProfile" onClick={() => router.push("/dashboard/profile")}>Ver perfil</p>
            </ProfileHeader>
            {isLoading ?
                <Skeleton className="cpf" variant="text" width={140} /> :
                <p className="cpf">CPF: {formatCpfRestricted(cpf)}</p>
            }
        </NewDashboardProfile>
    )
}