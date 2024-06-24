/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { formatBasicBirthDate } from "@/app/utils/date/DateUtils";
import { formatCpf } from "@/app/utils/formatters/documentFormatter";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { NewDashboardProfile, ProfileHeader } from "./styles";


export default function DashboardProfile() {

    const router = useRouter()
    const store = useStoreUser()
    const user = JSON.parse(localStorage.getItem('user'))

    const { name, cpf } = user?.user ?? (store?.user || {})

    const username = name.split(" ")[0] !== "" ? name.split(" ")[0] : name.split(" ")[1]

    useEffect(() => {
        const fetchUserData = async () => {

            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
                if (requestSuccessful(response?.status)) {
                    const consumidor = response?.data?.consumidor
                    const instalacao = response?.data?.instalacao

                    store.updateUser({
                        name: consumidor?.nome + " " + consumidor?.sobrenome,
                        phone: consumidor?.telefone,
                        email: consumidor?.email,
                        secondaryEmail: consumidor?.email_secondary,
                        cost: instalacao?.valor_base_consumo,
                        cep: consumidor?.cep,
                        discount: instalacao?.desconto,
                        birthDate: consumidor?.data_nascimento ? formatBasicBirthDate(consumidor?.data_nascimento) : "",

                        cpf: consumidor?.cpf,
                        cost: consumidor?.valor,
                        rg: consumidor?.rg,

                        nationality: consumidor?.nacionalidade,
                        maritalStatus: consumidor?.estado_civil,
                        memberGetMemberCode: consumidor?.ref_code,

                        hasFetchedData: true,

                        invoiceDate: consumidor?.dia_fatura
                    });

                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <NewDashboardProfile>
            <ProfileHeader>
                <PersonOutlineIcon className="profileIcon" />
                <h6 className="username">Olá, {username ? username : "usuário"}</h6>
                <p className="goToProfile" onClick={() => router.push("/dashboard/profile")}>Ver perfil</p>
            </ProfileHeader>
            <p className="cpf">CPF: {formatCpf(cpf)}</p>

        </NewDashboardProfile>
    )
}