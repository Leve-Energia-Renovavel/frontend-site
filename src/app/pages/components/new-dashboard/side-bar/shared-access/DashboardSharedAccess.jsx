"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { CheckIcon, DashboardAccordionContainer, DashboardAccordionDetails, DashboardAccordionSummary, EditFormButton, ExpandIcon, FormButton, SharedAccessForm, SimpleArrowForward } from './styles';

export default function DashboardSharedAccess({ expanded, isMobileContent, setErrorMessage, setNotifications }) {

    const store = useStoreUser()

    const user = JSON.parse(localStorage.getItem('user')) || store.user

    var { distributor, hasSyncDistributorData } = user?.user ?? (store?.user || {})

    const [passwordVisibible, setPasswordVisibible] = useState("password")

    // hasSyncDistributorData = !hasSyncDistributorData

    if (!distributor) {
        distributor = "distribuidora"
    }

    const distributorLoginRef = {
        email: useRef(null),
        password: useRef(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!distributorLoginRef.email.current.value || !distributorLoginRef.password.current.value) {
            setErrorMessage(["Preencha todos os campos para sincronizar os dados com a sua distribuidora"])
            return
        }

        const data = {
            username: distributorLoginRef.email.current.value,
            password: distributorLoginRef.password.current.value,
        }

        const response = await syncDistributorData(data, store, setErrorMessage, setNotifications)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    return (
        <DashboardAccordionContainer
            defaultExpanded={expanded}
            isMobileContent={isMobileContent}
            hasSyncDistributorData={hasSyncDistributorData}
            disableGutters
            elevation={0}
            sx={{
                '&:before': {
                    display: 'none',
                }
            }}>
            <DashboardAccordionSummary
                hasSyncDistributorData={hasSyncDistributorData}
                aria-controls="dashboard-shared-access-content"
                id="dashboard-shared-access"
                expandIcon={<ExpandIcon className='expandIcon' />}>
                <p className='sharedAccessTitle'>Acesso compartilhado</p>{hasSyncDistributorData && <CheckIcon className='checkIcon' />}
            </DashboardAccordionSummary>
            <DashboardAccordionDetails>
                {hasSyncDistributorData &&
                    <p className='sharedAccessSubtitle'>Seus dados de acesso estão compartilhados com a Leve para a emissão de uma só fatura, com valores finais somados de consumo e distribuição</p>}
                {!hasSyncDistributorData &&
                    <p className='sharedAccessSubtitle'>Compartilhe seu acesso a plataforma da {distributor} para pagar uma só fatura de luz: </p>}

                <SharedAccessForm>
                    <TextField
                        className="formInputField"
                        inputRef={distributorLoginRef.email}
                        label="E-mail"
                        variant="outlined"
                        placeholder="E-mail"
                        type="text"
                        disabled={hasSyncDistributorData}
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <PersonOutlinedIcon className='emailIcon' />
                                </InputAdornment>
                        }}
                        required />
                    <TextField
                        className="formInputField"
                        inputRef={distributorLoginRef.password}
                        label="Senha"
                        variant="outlined"
                        placeholder="Senha"
                        type={passwordVisibible}
                        disabled={hasSyncDistributorData}
                        required
                        onKeyDown={(event) => handleKeyPress(event)}
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <LockOutlinedIcon className='passwordIcon' />
                                </InputAdornment>,
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setPasswordVisibible(passwordVisibible === "password" ? "text" : "password")}>
                                        {passwordVisibible === "password" ? <VisibilityIcon className='visibilityIcon' /> : <VisibilityOffIcon className='visibilityIcon' />}
                                    </IconButton>
                                </InputAdornment>
                        }} />

                    {hasSyncDistributorData ?
                        <EditFormButton
                            onClick={() => store.updateUser({ hasSyncDistributorData: false })}
                            endIcon={<EditOutlinedIcon className="icon" />}>
                            <span>{"Editar dados"} </span>
                        </EditFormButton>
                        :
                        <FormButton
                            onClick={handleSubmit}
                            endIcon={<SimpleArrowForward className="icon" />}>
                            <span>{"Enviar"} </span>
                        </FormButton>}


                </SharedAccessForm>


            </DashboardAccordionDetails>
        </DashboardAccordionContainer>
    )
}