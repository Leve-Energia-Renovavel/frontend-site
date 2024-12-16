"use client"

import { useStoreCompany, useStoreInstallations, useStoreMainInstallation, useStoreUser, useStoreUserEconomy } from '@/app/hooks/stores/useStore';
import { updateUserProfile } from '@/app/service/user-service/UserService';
import { getCityNameByStateIdAndCityId } from '@/app/service/utils/addressUtilsService';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { stateOptions } from '@/app/utils/form-options/addressFormOptions';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import { formatBrazillianDate } from '@/app/utils/formatters/dateFormatter';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import { MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import MultipleInstallationsModal from '../../utils/modals/multiple-installations-modal/MultipleInstallationsModal';
import OwnershipModal from '../../utils/modals/ownership-modal/OwnershipModal';
import SingleInstallationModal from '../../utils/modals/single-installation-modal/SingleInstallationModal';
import NewSuccessModal from '../../utils/modals/success-modal/NewSuccessModal';
import { CancelEditionButton, EditionContainer, FormContent, FormInput, FormLastRow, FormRow, InstallationInput, SaveEditionButton } from './styles';


export default function NewProfileMainForm({ isEdition, handleEdition, setNotifications, setErrorMessage }) {

    const store = useStoreUser()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const userEconomy = useStoreUserEconomy().userEconomy

    const user = JSON.parse(localStorage.getItem('user'))
    const mainInstallation = JSON.parse(localStorage.getItem('mainInstallation'))
    const installations = JSON.parse(localStorage.getItem('installations'))

    const company = useStoreCompany().company

    const { name, email, phone, cost, distributor, companyName, rg, cpf, cnpj, birthDate, secondaryEmail, maritalStatus, profession, nationality, isCompany } = user?.user ?? (store?.user || {})
    const { street, neighborhood, number, city, state, complement, stateId, cityId, zipCode, installationNumber } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})
    const { economySince } = userEconomy
    const allInstallations = installations?.installations ?? (storeInstallations?.installations || {})

    const [isForeigner, setIsForeigner] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const [multipleInstallationsModal, setOpenMultipleModal] = useState(false);
    const [singleInstallationModal, setOpenSingleModal] = useState(false);
    const [installationToBeCancelled, setInstallationToBeCancelled] = useState(null);

    const hasOnlyOneInstallation = allInstallations?.length < 2

    const [openSuccessModal, setOpenSuccessModal] = useState(false)

    const userRefs = {
        name: useRef(null),
        rg: useRef(null),
        cpf: useRef(null),
        birthDate: useRef(null),
        nationality: useRef(null),
        maritalStatus: useRef(null),
        profession: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        cost: useRef(null),
    };

    const companyRefs = {
        razao_social: useRef(null),
        cnpj: useRef(null),
        socialContract: useRef(null),
        energyExtract: useRef(null),
    }

    const addressRefs = {
        address: useRef(null),
        addressNumber: useRef(null),
        addressCep: useRef(null),
        complement: useRef(null),
        neighborhood: useRef(null),
        state: useRef(null),
        city: useRef(null),
        installationNumber: useRef(null)
    }

    const leveGreen = "#005940"

    const handleOwnershipModal = () => {
        setOpenModal(true)
    }

    const closeModal = () => {
        setOpenModal(false)
    };
    const closeMultipleModal = () => {
        setOpenMultipleModal(false)
    };
    const closeSingleModal = () => {
        setOpenSingleModal(false)
    };

    const handleChangeOwnership = () => {
        setOpenModal(false)
        if (hasOnlyOneInstallation) {
            setOpenSingleModal(true)
            setInstallationToBeCancelled(allInstallations[0])
        } else {
            setOpenMultipleModal(true)
        }
    };

    const handleSelectInstallationToBeCancelled = (installation) => {
        setOpenMultipleModal(false)
        setInstallationToBeCancelled(installation)
        setOpenSingleModal(true)
    }

    const closeSuccessModal = () => {
        setOpenSuccessModal(false)
    }

    const handleUpdateUserProfile = async () => {
        var submitData = {
            telefone: userRefs.phone.current.value,
            profissao: userRefs.profession.current.value,
            estado_civil: userRefs.maritalStatus.current.value,
        }

        const response = await updateUserProfile(submitData)
        if (requestSuccessful(response?.status)) {
            setNotifications(["Dados atualizados com sucesso!"])
            handleEdition()
        } else {
            setErrorMessage(["Erro ao atualizar os dados. Por favor, tente novamente."])
            handleEdition()
        }

    }

    return (
        <>
            <div className='profileMainForm'>
                {isCompany && (
                    <FormRow>
                        <FormInput className="inputForm"
                            defaultValue={company.razao_social || companyName || ''}
                            inputRef={companyRefs.razao_social}
                            label="Razão Social" variant="outlined"
                            placeholder="Razão Social"
                            type="text"
                            InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                            disabled />
                        <InputMask mask="99.999.999/9999-99"
                            disabled
                            defaultValue={company.cnpj || cnpj || ''}>
                            {() => <FormInput className="inputForm"
                                defaultValue={company.cnpj || cnpj || ''}
                                inputRef={companyRefs.cnpj}
                                label="CNPJ"
                                variant="outlined"
                                placeholder="CNPJ"
                                type="text"
                                disabled
                                InputLabelProps={{ style: { color: leveGreen } }}
                            />}
                        </InputMask>
                    </FormRow>)}
                <FormRow>
                    <FormInput
                        className='inputForm'
                        inputRef={userRefs.name}
                        label={`Nome Completo ${isCompany ? 'do Responsável' : ''}`}
                        placeholder={`Nome Completo ${isCompany ? 'do Responsável' : ''}`}
                        defaultValue={name || ''}
                        variant="outlined"
                        type="text"
                        InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                        disabled
                    />
                    <FormInput
                        className='inputForm'
                        inputRef={userRefs.email}
                        label={`Email ${isCompany ? 'do Responsável' : ''}`}
                        placeholder={`Email ${isCompany ? 'do Responsável' : ''}`}
                        defaultValue={email || ''}
                        variant="outlined"
                        InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                        type="text"
                        disabled
                    />
                </FormRow>
                <FormContent>
                    <InputMask mask="(99) 99999-9999" disabled={!isEdition} defaultValue={formatPhoneNumber(phone) || ""}>
                        {() => (
                            <FormInput
                                inputRef={userRefs.phone}
                                className="inputForm"
                                disabled={!isEdition}
                                inputProps={{ inputMode: 'numeric' }}
                                label={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                                variant="outlined"
                                placeholder={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                                type="text"
                                InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                                required
                            />
                        )}
                    </InputMask>
                    {isForeigner ?
                        (<InputMask mask="*******-*" required defaultValue={""}>
                            {() => <FormInput inputRef={userRefs.rg} className="inputForm" label="RNE" variant="outlined" placeholder="RNE" type="text" InputLabelProps={{ shrink: false }} required />}
                        </InputMask>)
                        :
                        (<InputMask mask="********-*" disabled value={rg || ""}>
                            {() => <FormInput
                                inputRef={userRefs.rg}
                                className="inputForm"
                                label="RG"
                                variant="outlined"
                                placeholder="RG"
                                type="text"
                                disabled
                                inputProps={{ inputMode: 'numeric' }}
                                InputLabelProps={{ shrink: false },
                                    { style: { color: leveGreen } }}
                            />}
                        </InputMask>)}
                    <InputMask mask="999.999.999-99" disabled value={cpf || ""}>
                        {() => <FormInput inputRef={userRefs.cpf}
                            className="inputForm"
                            label="CPF"
                            variant="outlined"
                            placeholder="CPF"
                            inputProps={{ inputMode: 'numeric' }}
                            type="text"
                            disabled
                            InputLabelProps={{ shrink: false },
                                { style: { color: leveGreen } }} />}
                    </InputMask>

                    <InputMask mask="99/99/9999" disabled value={birthDate || ""} >
                        {() => <FormInput
                            inputRef={userRefs.birthDate}
                            className="inputForm"
                            label="Data de Nascimento"
                            variant="outlined"
                            placeholder="Data de Nascimento"
                            type="text"
                            disabled
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ style: { color: leveGreen } }}
                        />}
                    </InputMask>

                    <FormInput
                        id="maritalStatus"
                        select
                        defaultValue={maritalStatus || ""}
                        label="Estado Civil"
                        className="inputForm"
                        disabled={!isEdition}
                        inputProps={{ inputMode: 'numeric' }}
                        InputLabelProps={{ style: { color: leveGreen } }}
                        inputRef={userRefs.maritalStatus}>
                        {maritalStatusOptions?.map((maritalStatus) => {
                            return (
                                <MenuItem key={maritalStatus.label} value={maritalStatus.value}>{maritalStatus.label}</MenuItem>
                            )
                        })}
                    </FormInput>

                    <FormInput
                        id="nationality"
                        select
                        defaultValue={nationality || ""}
                        inputRef={userRefs.nationality}
                        className="inputForm"
                        label="Nacionalidade"
                        variant="outlined"
                        placeholder="Nacionalidade"
                        type="text"
                        disabled
                        InputLabelProps={{
                            component: 'span',
                            style: { color: leveGreen }
                        }}
                        required>
                        {nationalityOptions?.map((nationality) => {
                            return (
                                <MenuItem key={nationality.label} value={nationality.value}>{nationality.label}</MenuItem>
                            )
                        })}
                    </FormInput>

                    {secondaryEmail ?
                        <FormInput
                            className='inputForm'
                            inputRef={userRefs.email}
                            label={`Email secundário`}
                            placeholder={`Email secundário`}
                            defaultValue={secondaryEmail || ''}
                            variant="outlined"
                            InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                            type="text"
                            disabled
                        />
                        :
                        <FormInput
                            className="inputForm"
                            inputRef={userRefs.cost}
                            value={cost || ""}
                            label="Custo Mensal em R$"
                            variant="outlined"
                            placeholder="Custo Mensal em R$"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                            disabled />}

                    <FormInput
                        id="profession"
                        select
                        defaultValue={profession || ""}
                        inputRef={userRefs.profession}
                        className="inputForm"
                        label="Profissão"
                        variant="outlined"
                        disabled={!isEdition}
                        placeholder="Profissão"
                        InputLabelProps={{
                            component: 'span',
                            style: { color: leveGreen }
                        }}
                        type="text"
                        required>
                        {professionOptions?.map((profession) => {
                            return (
                                <MenuItem key={profession.label} value={profession.value}>{profession.label}</MenuItem>
                            )
                        })}
                    </FormInput>

                    <InputMask disabled mask="99999-999" value={zipCode || ""}
                        onChange={(e) => storeAddress.updateAddress({ cep: e.target.value })}>
                        {() => <FormInput
                            disabled
                            className="inputForm"
                            inputRef={addressRefs.addressCep}
                            label="CEP"
                            variant="outlined"
                            placeholder="CEP"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                            required />}
                    </InputMask>

                    <FormInput className="inputForm"
                        disabled
                        defaultValue={street || ''}
                        inputRef={addressRefs.address}
                        label="Endereço" variant="outlined"
                        placeholder="Endereço"
                        type="text"
                        InputLabelProps={{ shrink: true, style: { color: leveGreen } }} required />

                    <InputMask mask="99999" defaultValue={number} disabled>
                        {() => <FormInput
                            disabled
                            className="inputForm"
                            inputRef={addressRefs.addressNumber}
                            label="Nº"
                            variant="outlined"
                            placeholder="Nº"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ style: { color: leveGreen } }}
                        />}
                    </InputMask>

                    {complement ?
                        <FormInput className="inputForm"
                            disabled={!isEdition}
                            inputRef={addressRefs.complement}
                            defaultValue={complement || ''}
                            label="Complemento" variant="outlined" placeholder="Complemento"
                            type="text"
                            InputLabelProps={{ shrink: true, style: { color: leveGreen } }} required /> : <></>}

                    <FormInput className="inputForm"
                        disabled
                        defaultValue={neighborhood || ''}
                        inputRef={addressRefs.neighborhood}
                        label="Bairro" variant="outlined" placeholder="Bairro"
                        type="text"
                        InputLabelProps={{ shrink: true, style: { color: leveGreen } }} required />

                    <FormInput
                        className="inputForm"
                        defaultValue={getCityNameByStateIdAndCityId(stateId, cityId) || ""}
                        inputRef={addressRefs.city}
                        label="Cidade"
                        variant="outlined"
                        placeholder="Cidade"
                        type="text"
                        disabled
                        InputLabelProps={{ shrink: true, style: { color: leveGreen } }} required />

                    <FormInput
                        id="state"
                        select
                        disabled
                        value={stateId}
                        label="Estado"
                        placeholder="Estado"
                        variant="outlined"
                        className="inputForm"
                        InputLabelProps={{
                            component: 'span',
                            style: { color: leveGreen },
                        }}
                        inputRef={addressRefs.state}>
                        {Object.values(stateOptions).map((state) => {
                            return (
                                <MenuItem key={state.cod_estados} value={state.cod_estados}>{state.sigla}</MenuItem>
                            )
                        })}
                    </FormInput>

                    <InputMask mask="99/99/9999" disabled value={formatBrazillianDate(economySince) || ""} >
                        {() => <FormInput
                            className="inputForm"
                            label="Cadastro Desde"
                            variant="outlined"
                            placeholder="Cadastro Desde"
                            type="text"
                            disabled
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ style: { color: leveGreen } }}
                        />}
                    </InputMask>

                </FormContent>

                <FormLastRow className='profileFormInstallation' >
                    <InstallationInput
                        disabled
                        value={installationNumber || ""}
                        inputRef={addressRefs.installationNumber}
                        className="inputForm"
                        label={`Número de Instalação`}
                        variant="outlined"
                        placeholder={`Número de Instalação`}
                        type="text"
                        InputLabelProps={{ shrink: true, style: { color: leveGreen } }} />

                    {/* {isEdition ?
                    <EditionContainer>
                        <SaveEditionButton onClick={() => handleUpdateUserProfile()}>
                            <span>Salvar alterações</span>
                        </SaveEditionButton>
                        <CancelEditionButton onClick={() => handleEdition()}>
                            <span>Cancelar </span>
                        </CancelEditionButton>
                    </EditionContainer>
                    :
                    <ChangeOwnershipButton className='changeOwnershipButton' onClick={() => handleOwnershipModal()}>
                        <span>Solicitar troca de titularidade</span>
                        <ChangeOwnershipIcon className='changeOwnershipIcon' />
                    </ChangeOwnershipButton>} */}

                    {isEdition && (
                        <EditionContainer className='profileFormEdition'>
                            <SaveEditionButton onClick={() => handleUpdateUserProfile()}>
                                <span>Salvar alterações</span>
                            </SaveEditionButton>
                            <CancelEditionButton onClick={() => handleEdition()}>
                                <span>Cancelar </span>
                            </CancelEditionButton>
                        </EditionContainer>
                    )}

                    <OwnershipModal
                        isOpen={openModal}
                        closeModal={closeModal}
                        handleChangeOwnership={handleChangeOwnership}
                    />

                    <MultipleInstallationsModal
                        isOpen={multipleInstallationsModal}
                        closeModal={closeMultipleModal}
                        handleSelectInstallationToBeCancelled={handleSelectInstallationToBeCancelled}
                    />

                    <SingleInstallationModal
                        isOpen={singleInstallationModal}
                        closeModal={closeSingleModal}
                        installationToBeCancelled={installationToBeCancelled}
                    />

                    <NewSuccessModal
                        isOpen={openSuccessModal}
                        closeModal={closeSuccessModal}
                        title={`Troca de titularidade solicitada`}
                        description={<span className='description'>Em breve, entraremos em contato através do email <span className="highlighted">comercial@leveenergia.com.br</span> ou no WhatsApp pelo número <span className="highlighted">(11) 9 9988-8899</span></span>}
                        buttonTitle={`Concluir`}
                    />

                </FormLastRow>
            </div>

        </>
    )
}