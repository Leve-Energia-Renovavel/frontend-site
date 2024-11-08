"use client"

import { useStoreMainInstallation, useStoreUser } from '@/app/hooks/useStore';
import { DISTRIBUTOR } from '@/app/pages/enums/globalEnums';
import { syncDistributorData } from '@/app/service/shared-access-service/SharedAccessService';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { CheckIcon, DashboardAccordionContainer, DashboardAccordionDetails, DashboardAccordionSummary, EditFormButton, ExpandIcon, FormButton, LoadingIcon, SharedAccessForm, SimpleArrowForward } from './styles';
import { cpfLoginSchema, emailLoginSchema, emptyFields } from './validation';

export default function DashboardSharedAccess({ expanded, isMobileContent, setErrorMessage, setNotifications }) {

    const storeUser = useStoreUser()
    const storeMainInstallation = useStoreMainInstallation()

    const user = JSON.parse(localStorage.getItem('user')) || storeUser.user
    const installation = JSON.parse(localStorage.getItem('installation')) || storeMainInstallation.mainInstallation

    const { distributor, hasSyncDistributorData } = user?.user ?? (storeUser?.user || {})
    const { uuid } = installation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

    const [passwordVisibible, setPasswordVisibible] = useState("password")
    const [isLoading, setIsLoading] = useState(false)

    // hasSyncDistributorData = !hasSyncDistributorData

    const isCPFL = distributor === DISTRIBUTOR.CPFL_PAULISTA
    const isCEMIG = distributor === DISTRIBUTOR.CEMIG
    const isCOPEL = distributor === DISTRIBUTOR.COPEL

    const showExpandIcon = isMobileContent

    const schemaValidation = async (data) => {
        try {
            const validatedData = isCPFL
                ? await emailLoginSchema.validate(data, { abortEarly: false })
                : await cpfLoginSchema.validate(data, { abortEarly: false });

            await syncDistributorData(uuid, validatedData, storeUser, setErrorMessage, setNotifications, setIsLoading)

        } catch (error) {
            console.error(error)
            setErrorMessage(error.errors)
            setIsLoading(false)
            return;
        }
    };

    const distributorLoginRef = {
        login: useRef(null),
        password: useRef(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (emptyFields(distributorLoginRef.login.current.value, distributorLoginRef.password.current.value)) {
            setErrorMessage(["Preencha todos os campos para sincronizar os dados com a sua distribuidora"])
            return
        } else {
            setIsLoading(true)

            const data = {
                login: distributorLoginRef.login.current.value,
                pass: distributorLoginRef.password.current.value,
            }
            await schemaValidation(data)
        }

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
                expandIcon={showExpandIcon && <ExpandIcon className='expandIcon' />}>
                <p className='sharedAccessTitle'>Acesso ao portal da {distributor ? distributor?.split(" ")[0] : "distribuidora"}</p>{hasSyncDistributorData && <CheckIcon className='checkIcon' />}
            </DashboardAccordionSummary>
            <DashboardAccordionDetails>
                {hasSyncDistributorData &&
                    <p className='sharedAccessSubtitle'>Seus dados de acesso estão compartilhados com a Leve para a emissão de uma só fatura, com valores finais somados de consumo e distribuição</p>}
                {!hasSyncDistributorData &&
                    <p className='sharedAccessSubtitle'>Para garantir o máximo de economia mensal, registre seus dados de acesso ao portal ou aplicativo da sua distribuidora. Assim, poderemos acessar as informações da sua fatura mensalmente e assegurar que os créditos de energia sejam aplicados corretamente para o seu consumo. </p>}

                <SharedAccessForm>
                    <TextField
                        className="formInputField"
                        inputRef={distributorLoginRef.login}
                        label={isCPFL ? "E-mail" : "CPF"}
                        variant="outlined"
                        placeholder={isCPFL ? "E-mail" : "CPF"}
                        type="text"
                        inputProps={isCPFL ? {} : { inputMode: 'numeric' }}
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
                            onClick={() => storeUser.updateUser({ hasSyncDistributorData: false })}
                            endIcon={<EditOutlinedIcon className="icon" />}>
                            <span>{"Editar dados"} </span>
                        </EditFormButton>
                        :
                        <FormButton
                            onClick={handleSubmit}
                            endIcon={isLoading ? "" : <SimpleArrowForward className="icon" />}>
                            <span>{isLoading ? <LoadingIcon className='loading' size={"21px"} /> : "Enviar"} </span>
                        </FormButton>}


                </SharedAccessForm>


            </DashboardAccordionDetails>
        </DashboardAccordionContainer>
    )
}