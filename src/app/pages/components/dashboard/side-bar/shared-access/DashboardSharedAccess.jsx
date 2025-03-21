"use client"

import { useStoreMainInstallation, useStoreUser } from '@/app/hooks/stores/useStore';
import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import { DISTRIBUTOR } from '@/app/pages/enums/globalEnums';
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { InputAdornment, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { CheckIcon, CloseButton, DashboardAccordionContainer, DashboardAccordionDetails, DashboardAccordionSummary, EditFormButton, ExpandIcon, FormButton, LoadingIcon, SharedAccessForm, SimpleArrowForward } from './styles';
import { emptyFields, schemaValidation } from './validation';

export default function DashboardSharedAccess({ expanded, closeModal, isMobileContent }) {

    const router = useRouter()
    const storeUser = useStoreUser()
    const storeMainInstallation = useStoreMainInstallation()
    const storeMessages = useStoreMessages()

    const setNotifications = storeMessages.setNotifications
    const setErrors = storeMessages.setErrors

    const user = JSON.parse(localStorage.getItem('user')) || storeUser.user
    const installation = JSON.parse(localStorage.getItem('installation')) || storeMainInstallation.mainInstallation

    const { distributor, hasSyncDistributorData, distributorLogin, distributorPassword } = user?.user ?? (storeUser?.user || {})
    const { uuid } = installation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

    const [passwordVisibible, setPasswordVisibible] = useState("password")
    const [isLoading, setIsLoading] = useState(false)
    const [isEdition, setIsEdition] = useState(false)

    const isCPFL = distributor === DISTRIBUTOR.CPFL_PAULISTA
    const isCEMIG = distributor === DISTRIBUTOR.CEMIG
    const isCOPEL = distributor === DISTRIBUTOR.COPEL

    const showExpandIcon = isMobileContent
    const hideCloseIcon = !isMobileContent && expanded && !closeModal
    const userWantsToUpdateData = hasSyncDistributorData && !isEdition

    const distributorLoginRef = {
        login: useRef(null),
        password: useRef(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (emptyFields(distributorLoginRef.login.current.value, distributorLoginRef.password.current.value)) {
            setErrors(["Preencha todos os campos para sincronizar os dados com a sua distribuidora"])
            return
        } else {
            setIsLoading(true)

            const data = {
                login: distributorLoginRef.login.current.value,
                pass: distributorLoginRef.password.current.value,
            }
            await schemaValidation(data, uuid, storeUser, isCPFL, router, setIsLoading, setErrors, setNotifications, closeModal)
        }
        setIsEdition(false)

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
            {!hideCloseIcon &&
                <CloseButton onClick={closeModal} isMobileContent={isMobileContent}>
                    <CloseIcon className='closeIcon' />
                </CloseButton>}
            <DashboardAccordionSummary
                hasSyncDistributorData={hasSyncDistributorData}
                aria-controls="dashboard-shared-access-content"
                id="dashboard-shared-access"
                expandIcon={showExpandIcon && <ExpandIcon className='expandIcon' />}>
                <p className='sharedAccessTitle'>Acesso ao portal da {distributor ? distributor?.split(" ")[0] : "distribuidora"}</p>
                {hasSyncDistributorData && <CheckIcon className='checkIcon' />}
            </DashboardAccordionSummary>
            <DashboardAccordionDetails>
                <p className='sharedAccessSubtitle'>Para garantir o máximo de economia mensal, registre seus dados de acesso ao portal ou aplicativo da sua distribuidora. Assim, poderemos acessar as informações da sua fatura mensalmente e assegurar que os créditos de energia sejam aplicados corretamente para o seu consumo. </p>
                <SharedAccessForm isEdition={isEdition} autocomplete='off'>
                    <TextField
                        className="formInputField"
                        inputRef={distributorLoginRef.login}
                        label={isCPFL ? "E-mail" : "CPF"}
                        variant="outlined"
                        aria-autocomplete='none'
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        defaultValue={distributorLogin ? distributorLogin : ""}
                        placeholder={isCPFL ? "E-mail" : "CPF"}
                        type="text"
                        inputProps={isCPFL ? {} : { inputMode: 'numeric' }}
                        disabled={userWantsToUpdateData}
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
                        aria-autocomplete='none'
                        autoComplete="new-password"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        defaultValue={distributorPassword ? distributorPassword : ""}
                        type={passwordVisibible}
                        disabled={userWantsToUpdateData}
                        required
                        onKeyDown={(event) => handleKeyPress(event)}
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <LockOutlinedIcon className='passwordIcon' />
                                </InputAdornment>,
                            // endAdornment:
                            //     <InputAdornment position="end">
                            //         {!isEdition && <IconButton
                            //             onClick={() => setPasswordVisibible(passwordVisibible === "password" ? "text" : "password")}>
                            //             {passwordVisibible === "password" ? <VisibilityIcon className='visibilityIcon' /> : <VisibilityOffIcon className='visibilityIcon' />}
                            //         </IconButton>}
                            //     </InputAdornment>
                        }} />

                    {userWantsToUpdateData ?
                        <EditFormButton
                            onClick={() => setIsEdition(true)}
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