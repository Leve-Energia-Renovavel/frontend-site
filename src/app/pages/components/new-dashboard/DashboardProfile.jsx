"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useRouter } from "next/navigation";
import { NewDashboardProfile, ProfileHeader } from "./styles";


export default function DashboardProfile() {

    const router = useRouter()
    const store = useStoreUser()
    const user = JSON.parse(localStorage.getItem('user'))

    const { name, cpf } = user?.user ?? (store?.user || {})

    const username = name.split(" ")[0] !== "" ? name.split(" ")[0] : name.split(" ")[1]

    return (
        <NewDashboardProfile>
            <ProfileHeader>
                <PersonOutlineIcon className="profileIcon" />
                <h6 className="username">Olá, {username}</h6>
                <p className="goToProfile" onClick={() => router.push("/dashboard/profile")}>Ver perfil</p>
            </ProfileHeader>
            <p className="cpf">CPF: {cpf}</p>

        </NewDashboardProfile>
    )
}