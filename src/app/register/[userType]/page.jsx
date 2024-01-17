"use client"

import RegisterBanner from "../banner/RegisterBanner";
import ResultEconomy from "../result-economy/ResultEconomy";
import RegisterForm from "../forms/RegisterForm";
import FormBanner from "../form-banner/FormBanner";

const loadUserData = () => {
    if (history.state.name) {
        return history.state
    } else {
        const storedObject = localStorage.getItem('leveData');
        if (storedObject) {
            return JSON.parse(storedObject);
        }
    }
}

export default function Register() {

    const userData = loadUserData()

    const isCompany = userData.type == 'cnpj'

    return (
        <div>
            <RegisterBanner userData={userData} />
            <ResultEconomy userData={userData} />
            <FormBanner />
            <RegisterForm userData={userData} isCompany={isCompany} />

        </div>
    )
}