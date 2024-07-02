"use client"

import { useStoreCompany, useStoreMainInstallation, useStoreUser } from '@/app/hooks/useStore';
import { stateOptions } from '@/app/utils/form-options/addressFormOptions';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import { MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import { EditIcon, FormContent, FormInput, FormLastRow, FormRow, InstallationInput } from './styles';
import { getCityNameByStateIdAndCityId } from '@/app/service/utils/addressUtilsService';

export default function NewProfileMainForm() {

    const store = useStoreUser()
    const storeMainInstallation = useStoreMainInstallation()

    const user = JSON.parse(localStorage.getItem('user'))
    const mainInstallation = JSON.parse(localStorage.getItem('mainInstallation'))

    const company = useStoreCompany().company
    const isCompany = user?.user.isCompany

    const { name, email, phone, cost, distributor, companyName, rg, cpf, cnpj, birthDate } = user?.user ?? (store?.user || {})
    const { street, neighborhood, number, city, state, stateId, cityId, zipCode, installationNumber } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

    const [isForeigner, setIsForeigner] = useState(false);

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

    return (
        <>
            {isCompany && (
                <FormRow>
                    <FormInput className="inputForm" defaultValue={company.razao_social || companyName || ''} inputRef={companyRefs.razao_social} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" InputLabelProps={{ shrink: true, style: { color: leveGreen } }} required />
                    <InputMask mask="99.999.999/9999-99" defaultValue={company.cnpj || cnpj || ''}>
                        {() => <FormInput className="inputForm" defaultValue={company.cnpj || cnpj || ''} inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" required
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
                    InputProps={{
                        endAdornment: <EditIcon />,
                    }}
                    required
                />
                <FormInput
                    className='inputForm'
                    inputRef={userRefs.email}
                    label={`Email ${isCompany ? 'do Responsável' : ''}`}
                    placeholder={`Email ${isCompany ? 'do Responsável' : ''}`}
                    defaultValue={email || ''}
                    variant="outlined"
                    InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                    InputProps={{
                        endAdornment: <EditIcon />,
                    }}
                    type="text"
                    required
                />
            </FormRow>
            <FormContent>
                <InputMask mask="(99) 99999-9999" value={formatPhoneNumber(phone) || ""} onChange={(e) => store.updateUser({ phone: e.target.value })}>
                    {() => (
                        <FormInput
                            inputRef={userRefs.phone}
                            className="inputForm"
                            inputProps={{ inputMode: 'numeric' }}
                            label={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                            variant="outlined"
                            placeholder={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                            type="text"
                            InputLabelProps={{ shrink: true, style: { color: leveGreen } }}
                            required
                            InputProps={{
                                endAdornment: <EditIcon />,
                            }}
                        />
                    )}
                </InputMask>
                {isForeigner ?
                    (<InputMask mask="*******-*" required defaultValue={""}>
                        {() => <FormInput inputRef={userRefs.rg} className="inputForm" label="RNE" variant="outlined" placeholder="RNE" type="text" InputLabelProps={{ shrink: false }} required />}
                    </InputMask>)
                    :
                    (<InputMask mask="********-*" disabled defaultValue={rg || ""}>
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
                <InputMask mask="999.999.999-99" disabled defaultValue={cpf || ""}>
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

                <InputMask mask="99/99/9999" required value={birthDate || ""} onChange={(e) => store.updateUser({ birthDate: e.target.value })}>
                    {() => <FormInput
                        inputRef={userRefs.birthDate}
                        className="inputForm"
                        label="Data de Nascimento"
                        variant="outlined"
                        placeholder="Data de Nascimento"
                        type="text"
                        required
                        inputProps={{ inputMode: 'numeric' }}
                        InputLabelProps={{ style: { color: leveGreen } }}
                        InputProps={{
                            endAdornment: <EditIcon />,
                        }}
                    />}
                </InputMask>
                <FormInput
                    id="maritalStatus"
                    select
                    defaultValue={store.user.maritalStatus ? store.user.maritalStatus : ""}
                    label="Estado Civil"
                    className="inputForm"
                    inputProps={{ inputMode: 'numeric' }}
                    InputLabelProps={{ style: { color: leveGreen } }}
                    inputRef={userRefs.maritalStatus || ''}>
                    {maritalStatusOptions?.map((maritalStatus) => {
                        return (
                            <MenuItem key={maritalStatus.label} value={maritalStatus.value}>{maritalStatus.label}</MenuItem>
                        )
                    })}
                </FormInput>

                <FormInput
                    id="nationality"
                    select
                    defaultValue={store.user.nationality ? store.user.nationality : ""}
                    inputRef={userRefs.nationality}
                    className="inputForm"
                    label="Nacionalidade"
                    variant="outlined"
                    placeholder="Nacionalidade"
                    type="text"
                    InputLabelProps={{
                        component: 'span',
                        style: { color: leveGreen }
                    }}
                    InputProps={{ endAdornment: <EditIcon /> }}
                    required>
                    {nationalityOptions?.map((nationality) => {
                        return (
                            <MenuItem key={nationality.label} value={nationality.value}>{nationality.label}</MenuItem>
                        )
                    })}
                </FormInput>
                <FormInput
                    id="profession"
                    select
                    defaultValue={store.user.profession ? store.user.profession : ""}
                    inputRef={userRefs.profession}
                    className="inputForm"
                    label="Profissão"
                    variant="outlined"
                    placeholder="Profissão"
                    InputLabelProps={{
                        component: 'span',
                        style: { color: leveGreen }
                    }}
                    InputProps={{ endAdornment: <EditIcon /> }}
                    type="text"
                    required>
                    {professionOptions?.map((profession) => {
                        return (
                            <MenuItem key={profession.label} value={profession.value}>{profession.label}</MenuItem>
                        )
                    })}
                </FormInput>

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
                    disabled />

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

                <FormInput className="inputForm"
                    inputRef={addressRefs.complement}
                    label="Complemento" variant="outlined" placeholder="Complemento"
                    type="text"
                    InputLabelProps={{ style: { color: leveGreen } }} />

                <FormInput className="inputForm"
                    disabled
                    defaultValue={neighborhood || ''}
                    inputRef={addressRefs.neighborhood}
                    label="Bairro" variant="outlined" placeholder="Bairro"
                    type="text"
                    InputLabelProps={{ shrink: true, style: { color: leveGreen } }} required />

                <FormInput
                    id="state"
                    select
                    disabled
                    value={stateId}
                    onChange={(event) => handleChangeState(event.target.value)}
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
            </FormContent>

            <FormLastRow>
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
            </FormLastRow>
        </>
    )
}