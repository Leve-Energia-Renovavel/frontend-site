"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { NewDashboardProfile, ProfileHeader } from "../styles";
import { formatCpf } from "@/app/utils/formatters/documentFormatter";


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
                        name: consumidor?.nome,
                        phone: consumidor?.telefone,
                        email: consumidor?.email,
                        cost: instalacao?.valor_base_consumo,
                        cep: consumidor?.cep,
                        discount: instalacao?.desconto,
                        coupon: consumidor?.ref_origin,
                        couponValue: response?.data?.desconto_bruto,

                        cpf: consumidor?.cpf,
                        cost: consumidor?.valor,
                        rg: consumidor?.rg,

                        nationality: consumidor?.nacionalidade,
                        maritalStatus: consumidor?.estado_civil,
                        memberGetMemberCode: consumidor?.ref_code,

                        hasFetchedData: true,
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
                <h6 className="username">Olá, {username}</h6>
                <p className="goToProfile" onClick={() => router.push("/dashboard/profile")}>Ver perfil</p>
            </ProfileHeader>
            <p className="cpf">CPF: {formatCpf(cpf)}</p>

        </NewDashboardProfile>
    )
}