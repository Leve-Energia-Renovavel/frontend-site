/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import ContractAuthFormProgress from "./ContractAuthFormProgress";
import ContractAuthFormTitle from "./ContractAuthFormTitle";
import { FormContainer, FormContent, FormHeader } from "./styles"
import { TextField, Typography, Alert, Snackbar, Box } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useRef, useState, useEffect } from "react";
import DefaultButton from "@/app/pages/components/utils/buttons/DefaultButton";
import LockIcon from '@mui/icons-material/Lock';
import { background } from "@/app/pages/styles";
import { useRouter } from "next/navigation";
import Link from "next/link";

const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
}

export default function ContractAuthForm(props) {

    const router = useRouter()
    const confirmationByEmail = props.confirmationByEmail
    const userData = props.userData

    const codeLength = 6
    const initialCodes = Array(codeLength).fill('')

    const [codes, setCodes] = useState(initialCodes);
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const inputRefs = Array(codeLength).fill(0).map((_, index) => useRef(null));

    const handleInputChange = (value, index) => {
        const validCharactersRegex = /^[0-9a-zA-Z]*$/;

        if (validCharactersRegex.test(value)) {
            const uppercaseValue = value.toUpperCase();

            setCodes((prevCodes) => {
                const newCodes = [...prevCodes];
                newCodes[index] = uppercaseValue;

                if (index < codeLength - 1 && uppercaseValue !== '') {
                    inputRefs[index + 1].current.focus();
                }

                return newCodes;
            });
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && codes[index] === '') {
            inputRefs[index - 1].current.focus();
        }
    };

    const resendToken = () => {
        //TODO: implement resend Token function
        console.log("requesting new token...")
    }

    useEffect(() => {
        const handleValidateToken = () => {
            if (codes[5] !== '') {
                //TODO:  here I need to validade in a request for ClickSign...
                // if its OK: 
                setCodes(initialCodes)
                handleOpenSnackBar()
                setTimeout(() => {
                    router.push(`/register/success`);
                }, 2000);
                // else ...


                // finally...
                inputRefs[0].current.focus();
            }
        }

        handleValidateToken();
    }, [codes]);


    const handleOpenSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleClose = () => {
        setOpenSnackBar(false);
    };

    return (
        <>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ fontSize: 25, backgroundColor: 'lightgreen', borderRadius: 5, padding: '1rem', alignItems: 'center' }}
                >
                    Token validado com sucesso!
                </Alert>
            </Snackbar>

            <form acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                <FormContainer>
                    <FormHeader>

                        <ContractAuthFormTitle />
                        <ContractAuthFormProgress />
                    </FormHeader>
                    <FormContent>
                        <VerifiedUserIcon sx={{ display: 'block', margin: '0 auto', color: background.primary }} />
                        <Typography variant="h1" sx={{ display: 'block', margin: '0 auto' }} > Token de autenticação</Typography>
                        <Typography variant="subtitle1" sx={{ display: 'block', margin: '0 auto' }}>Enviado para: {confirmationByEmail ? userData.user.email : userData.company.companyPhone}</Typography>
                        <Typography variant="subtitle1" sx={{ display: 'block', margin: '0 auto' }}>Insira o token para finalizar</Typography>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {codes.map((code, index) => (
                                <TextField
                                    key={index}
                                    type="text"
                                    value={code}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    sx={{
                                        width: '5rem',
                                        height: '5rem',
                                        marginRight: '0.5rem',
                                        fontSize: '2rem',
                                        textAlign: 'center',
                                    }}
                                    inputProps={{ maxLength: 1 }}
                                    inputRef={inputRefs[index]}
                                />
                            ))}
                        </div>
                        <div style={{ margin: '0 auto' }}>
                            <DefaultButton variant="contained" text={"Finalizar"} isSubmit={true} sx={{ maxWidth: '10vw' }} />
                        </div>
                        <Typography variant="subtitle1" sx={{ display: 'block', margin: '3rem auto 0 auto', color: background.primary, textDecoration: 'underline', cursor: 'pointer' }}
                            onClick={resendToken}
                        >Reenviar token via {confirmationByEmail ? 'E-mail' : 'SMS'}</Typography>
                        <div style={{ margin: '0 auto', maxWidth: '40%', textAlign: 'center', color: background.grey, margin: '2rem auto' }} >
                            <Typography variant="subtitle1" sx={{ display: 'block', margin: '0 auto' }}>
                                Ao clicar em finalizar, voce concorda com os <Link className="highlighted" href={"https://www.clicksign.com/termos/"}>Termos de Uso</Link> e <Link className="highlighted" href={"https://www.clicksign.com/politica-de-privacidade/"}>Politica de Privacidade - LGPD</Link> da Clicksign
                            </Typography>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: background.grey, }}>
                            <LockIcon />
                            <Typography variant="subtitle1">Ambiente Seguro ClickSign</Typography>
                        </div>

                    </FormContent>
                </FormContainer>
            </form >
        </>

    );
}

ContractAuthForm;
