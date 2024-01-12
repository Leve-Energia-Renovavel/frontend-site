"use client"

import { useRouter } from "next/navigation"
import RegisterBanner from "../banner/RegisterBanner";
import ResultEconomy from "../result-economy/ResultEconomy";

export default function Register() {

    const router = useRouter()
    const userData = history.state;

    const isCompany = userData.type == 'cnpj'

    return (
        <div>
            <h1>Register</h1>
            <RegisterBanner userData={userData} />
            <ResultEconomy userData={userData} />

        </div>
    )
}