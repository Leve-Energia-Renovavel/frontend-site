"use client"

import RegisterBanner from "../banner/RegisterBanner";
import ResultEconomy from "../result-economy/ResultEconomy";
import RegisterForm from "../forms/RegisterForm";
import FormBanner from "../form-banner/FormBanner";

export default function Register() {

    const userData = history.state;

    const isCompany = userData.type == 'cnpj'

    return (
        <div>
            <RegisterBanner userData={userData} />
            <ResultEconomy userData={userData} />
            <FormBanner />
            <RegisterForm isCompany={isCompany} />

        </div>
    )
}