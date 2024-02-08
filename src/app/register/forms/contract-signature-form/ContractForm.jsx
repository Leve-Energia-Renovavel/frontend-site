"use client"

import DefaultButton from '@/app/pages/components/utils/buttons/DefaultButton';
import { getCurrentDate } from '@/app/utils/date/DateUtils';

import { Divider, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContractFormProgress from './ContractFormProgress';
import ContractFormTitle from './ContractFormTitle';
import { Contract, ContractLeftContent, ContractRightContent, Download, FormButtonContainer, FormContainer, FormContent, FormHeader, People, Search } from './styles';

export default function ContractForm(props) {

    const router = useRouter()
    const isCompany = props.isCompany
    const userData = props.userData

    const [contracts, setContracts] = useState([
        {
            id: 1,
            name: "LeveEnergia-ContratoSubLocacao-247.pdf",
            link: "link to the contract 1",
            signed: false,
            signDate: null
        },
        {
            id: 2,
            name: "LeveEnergia-FichaMatricula-248",
            link: "link to the contract 2",
            signed: false,
            signDate: null

        },
        {
            id: 3,
            name: "LeveEnergia-Procuracao-249",
            link: "link to the contract 3",
            signed: false,
            signDate: null

        },
    ])

    useEffect(() => {
        userData["contracts"] = contracts;
        localStorage.setItem('leveLeadData', JSON.stringify(userData));
    }, [contracts]);

    const handleSignContract = (contractId) => {
        setContracts((prevContracts) =>
            prevContracts.map((contract) =>
                contract.id === contractId
                    ? {
                        ...contract,
                        signed: !contract.signed,
                        signDate: !contract.signed ? getCurrentDate() : null
                    }
                    : contract
            )
        );
    };

    const handleSignAllContracts = async () => {
        setContracts((prevContracts) =>
            prevContracts.map((contract) => ({
                ...contract,
                signed: true,
                signDate: getCurrentDate()

            }))
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSignAllContracts()
        router.push(`/register/contract-auth`)
    }

    return (
        <FormContainer acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
            <FormHeader>
                <ContractFormTitle />
                <ContractFormProgress />
            </FormHeader>
            <FormContent>
                {contracts.map((contract) => {
                    return (
                        <div key={contract.id}>
                            <Contract>
                                <ContractLeftContent>
                                    <Typography variant='subtitle1' className='contractName'>{contract.name}</Typography>
                                    <Typography variant='subtitle1' className='signButton' onClick={() => handleSignContract(contract.id)}>{`${contract.signed ? "Assinado" : "Assinar"}`} </Typography>
                                </ContractLeftContent>
                                <ContractRightContent>
                                    <People />
                                    <Typography variant='subtitle1'>{`Assinaturas ${contract.signed ? "1/1" : "0/1"}`}</Typography>
                                    <Search />
                                    <Download onClick={() => handleSignContract(contract.id)} />
                                </ContractRightContent>
                            </Contract>
                            <Divider orientation="horizontal" variant="middle" flexItem />
                        </div>
                    )
                })}
                <FormButtonContainer>
                    <DefaultButton text={"Alterar dados cadastrais"} variant="outlined-inverse" onClick={() => router.push(`/register/${isCompany ? 'cnpj' : 'cpf'}`)} />
                    <DefaultButton text={"Assinar Todos"} variant="contained" isSubmit={true} />
                </FormButtonContainer>
            </FormContent>
        </FormContainer>
    );
}