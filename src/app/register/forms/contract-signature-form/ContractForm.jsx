"use client"

import { Contract, FormButtonContainer, FormContainer, FormContent, FormHeader } from './styles';
import ContractFormTitle from './ContractFormTitle';
import ContractFormProgress from './ContractFormProgress';
import { useState } from 'react';
import { Typography, Divider } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import { background } from '@/app/pages/styles';
import DefaultButton from '@/app/pages/components/utils/buttons/DefaultButton';
import { useRouter } from 'next/navigation';

export default function ContractForm(props) {

    const router = useRouter()
    const isCompany = props.isCompany
    const userData = props.userData

    const [contracts, setContracts] = useState([
        {
            id: 1,
            name: "LeveEnergia-ContratoSubLocacao-247.pdf",
            link: "link to the contract 1",
            signed: false
        },
        {
            id: 2,
            name: "LeveEnergia-FichaMatricula-248",
            link: "link to the contract 2",
            signed: false
        },
        {
            id: 3,
            name: "LeveEnergia-Procuracao-249",
            link: "link to the contract 3",
            signed: false
        },
    ])

    const handleSignContract = (contractId) => {
        setContracts((prevContracts) =>
            prevContracts.map((contract) =>
                contract.id === contractId
                    ? { ...contract, signed: !contract.signed }
                    : contract
            )
        );
    };

    const handleSignAllContracts = () => {
        setContracts((prevContracts) =>
            prevContracts.map((contract) => ({
                ...contract,
                signed: true,
            }))
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSignAllContracts()

        userData["contracts"] = contracts
        history.pushState(userData, "");
        localStorage.setItem('leveLeadData', JSON.stringify(userData));
        router.push(`/register/contract-auth`)
    }

    return (
        <form acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
            <FormContainer>
                <FormHeader>
                    <ContractFormTitle />
                    <ContractFormProgress />
                </FormHeader>
                <FormContent>
                    {contracts.map((contract) => {
                        return (
                            <div key={contract.id}>
                                <Contract>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant='subtitle1' sx={{ fontSize: 20, fontWeight: 'bold' }}>{contract.name}</Typography>
                                        <Typography variant='subtitle1' sx={{ cursor: 'pointer' }} onClick={() => handleSignContract(contract.id)}>{`${contract.signed ? "Assinado" : "Assinar"}`} </Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: background.primary }}>
                                        <PeopleIcon sx={{ fontSize: 30, margin: '0 .5rem' }} />
                                        <Typography sx={{ fontSize: 20, margin: '0 .5rem' }} variant='subtitle1'>{`Assinaturas ${contract.signed ? "1/1" : "0/1"}`}</Typography>
                                        <SearchIcon sx={{ cursor: 'pointer', fontSize: 30, margin: '0 .5rem' }} />
                                        <DownloadIcon sx={{ cursor: 'pointer', fontSize: 30 }} onClick={() => handleSignContract(contract.id)} />
                                    </div>
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
        </form >
    );
}