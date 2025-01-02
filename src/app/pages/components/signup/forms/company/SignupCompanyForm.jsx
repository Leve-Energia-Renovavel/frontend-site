"use client"

import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, MenuItem } from '@mui/material';
import InputMask from "react-input-mask";
import { Form, FormFooterContainer, FormInput, FormRow, FormSubmitButton, RepresentativeTitleContainer } from "./styles";

import { useStoreUser } from "@/app/hooks/stores/useStore";
import { useStoreMessages } from "@/app/hooks/stores/useStoreMessages";
import useGetCNPJ from "@/app/hooks/utils/useGetCNPJ";
import { REGISTER_FORM } from '@/app/pages/enums/globalEnums';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import { formatCpf } from '@/app/utils/formatters/documentFormatter';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import { sanitizeAndCapitalizeWords } from '@/app/utils/formatters/textFormatter';
import { inputIncomplete } from "@/app/utils/helper/register/registerAddressHelper";
import { cnpjInputComplete, companyInputFilled, regularTextInputFilled, shrinkHelper } from '@/app/utils/helper/register/registerCompanyHelper';
import { birthDateInputFilled, costValidation, cpfInputFilled, emailInputFilled, labelColorHelper, normalTextInputFilled, phoneInputFilled, rgInputFilled } from '@/app/utils/helper/register/registerUserHelper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { schemaValidation } from './schema';

export default function SignupCompanyForm() {

    const search = useSearchParams()
    const router = useRouter()
    const store = useStoreUser()
    const storeMessage = useStoreMessages()

    const setErrors = storeMessage.setErrors
    const setNotifications = storeMessage.setNotifications

    const uuid = store?.user?.uuid || Cookies.get(COOKIES_FOR.UUID) || search.get("uuid")

    const { name, email, phone, cost, rg, cpf, nationality, maritalStatus, profession, companyName, cnpj, birthDate } = store?.user || {}

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingCNPJ, setIsLoadingCNPJ] = useState(false);

    const [formState, setFormState] = useState({
        name: name || "",
        email: email || "",
        phone: phone || "",
        cost: cost || "",
        rg: rg || "",
        cpf: cpf || "",
        birthDate: birthDate || "",
        nationality: nationality || "",
        maritalStatus: maritalStatus || "",
        profession: profession || "",
        cnpj: cnpj || "",
        companyName: companyName || "",
        socialContractFile: null,
        energyExtractFile: null,
    });

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        const validatedCost = costValidation(formState.cost)

        const submitData = {
            uuid: uuid,
            nome_completo: sanitizeAndCapitalizeWords(formState.name),
            email: formState.email,
            rg: formState.rg.replace(/[-_]/g, ""),
            cpf: formatCpf(formState.cpf),
            data_nascimento: formState.birthDate,
            telefone: formatPhoneNumber(formState.phone),
            valor: validatedCost,
            nacionalidade: formState.nationality,
            profissao: formState.profession,
            estado_civil: formState.maritalStatus,
            razao_social: formState.companyName,
            cnpj: formState.cnpj,
        };

        console.log("company form submitData ==>>", submitData)

        store.updateUser({ ...formState });
        const response = await schemaValidation(submitData, router, setNotifications, setErrors);

        setIsLoading(false)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        store.updateUser({ [name]: value });
    };

    const handleGetCNPJ = async (cnpj) => {
        if (cnpj !== "") {
            setIsLoadingCNPJ(true)
            try {
                await getCompanyData(cnpj)
            } catch (error) {
                setErrors(["Houve um problema ao buscar o CNPJ. Por favor, informe manualmente"])
            } finally {
                setIsLoadingCNPJ(false)
            }
        } else {
            setErrors(["Preencha o campo de CNPJ antes da busca"])
        }
    }

    const getCompanyData = useGetCNPJ(setFormState);

    const required = false

    return (
        <Form id={REGISTER_FORM.COMPANY_ID} acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
            <FormRow>
                <InputMask mask="99.999.999/9999-99"
                    value={formState?.cnpj}
                    onChange={handleInputChange}
                    onBlur={() => handleGetCNPJ(formState?.cnpj)}>
                    {() => (
                        <FormInput
                            type="text"
                            name='cnpj'
                            label="CNPJ"
                            placeholder="CNPJ"
                            variant="outlined"
                            className="inputForm"
                            required={required}
                            error={cnpjInputComplete(formState?.cnpj) === false}
                            success={cnpjInputComplete(formState?.cnpj) === true}
                            InputProps={{
                                endAdornment: isLoadingCNPJ ?
                                    (<Box>
                                        <CircularProgress className="formLoading" size={"25px"} />
                                    </Box>)
                                    :
                                    (<SearchIcon className="searchIcon" />),
                            }}
                            InputLabelProps={{
                                shrink: shrinkHelper(formState?.cnpj),
                                style: { color: labelColorHelper(cnpjInputComplete(formState?.cnpj)) }
                            }}
                        />
                    )}
                </InputMask>
                <FormInput
                    name='companyName'
                    onChange={handleInputChange}
                    className="inputForm"
                    label="Razão social"
                    variant="outlined"
                    placeholder="Razão social"
                    type="text"
                    required={required}
                    defaultValue={formState?.companyName}
                    success={companyInputFilled(formState?.companyName)}
                    InputLabelProps={{
                        shrink: shrinkHelper(formState?.companyName),
                        style: { color: labelColorHelper(companyInputFilled(formState?.companyName)) }
                    }}
                />

                <FormInput
                    name='email'
                    onChange={handleInputChange}
                    className="inputForm"
                    variant="outlined"
                    value={formState?.email}
                    type="text"
                    required={required}
                    success={emailInputFilled(formState?.email)}
                    error={inputIncomplete(formState?.email)}
                    label={`E-mail`}
                    placeholder={`E-mail`}
                    InputLabelProps={{
                        shrink: shrinkHelper(formState?.email),
                        style: { color: labelColorHelper(emailInputFilled(formState?.email)) }
                    }} />
                <InputMask mask="(99) 99999-9999" value={formState?.phone} onChange={handleInputChange}>
                    {() => (
                        <FormInput
                            name='phone'
                            className="inputForm"
                            variant="outlined"
                            type="text"
                            required={required}
                            inputProps={{ inputMode: 'numeric' }}
                            error={inputIncomplete(formState?.phone)}
                            success={phoneInputFilled(formState?.phone)}
                            label={`Telefone`}
                            placeholder={`Telefone`}
                            InputLabelProps={{
                                shrink: shrinkHelper(formState?.phone),
                                style: { color: labelColorHelper(phoneInputFilled(formState?.phone)) }
                            }} />
                    )}
                </InputMask>
            </FormRow>

            <RepresentativeTitleContainer>
                <p className='representativeTitle'>Representante legal</p>
            </RepresentativeTitleContainer>

            <FormRow>
                <FormInput
                    className="inputForm"
                    name='name'
                    onChange={handleInputChange}
                    variant="outlined"
                    type="text"
                    required={required}
                    value={formState?.name}
                    error={!normalTextInputFilled(formState?.name)}
                    success={normalTextInputFilled(formState?.name)}
                    label={`Nome completo`}
                    placeholder={`Nome completo`}
                    InputLabelProps={{
                        shrink: true,
                        style: { color: labelColorHelper(normalTextInputFilled(formState?.name)) }
                    }}
                />
                <InputMask mask="99/99/9999" required value={formState?.birthDate} onChange={handleInputChange}>
                    {() => (
                        <FormInput
                            name='birthDate'
                            className="inputForm"
                            label="Data de Nascimento"
                            placeholder="Data de Nascimento"
                            variant="outlined"
                            type="text"
                            required={required}
                            inputProps={{ inputMode: 'numeric' }}
                            error={inputIncomplete(formState?.birthDate)}
                            success={birthDateInputFilled(formState?.birthDate)}
                            InputLabelProps={{ shrink: formState?.birthDate !== "", style: { color: labelColorHelper(birthDateInputFilled(formState?.birthDate)) } }} />
                    )}
                </InputMask>
                <InputMask mask="999.999.999-99" required value={formState?.cpf} onChange={handleInputChange}>
                    {() => (
                        <FormInput
                            name='cpf'
                            className="inputForm"
                            label="CPF"
                            variant="outlined"
                            placeholder="CPF"
                            type="text"
                            required={required}
                            inputProps={{ inputMode: 'numeric' }}
                            error={cpfInputFilled(formState?.cpf) === false}
                            success={cpfInputFilled(formState?.cpf) === true}
                            InputLabelProps={{ shrink: formState?.cpf !== "", style: { color: labelColorHelper(cpfInputFilled(formState?.cpf)) } }} />
                    )}
                </InputMask>

                <InputMask mask="********-*" value={formState?.rg} onChange={handleInputChange}>
                    {() => (
                        <FormInput
                            className="inputForm"
                            label="Documento de identidade"
                            variant="outlined"
                            placeholder="Documento de identidade"
                            name='rg'
                            type="text"
                            required={required}
                            inputProps={{ inputMode: 'numeric' }}
                            error={rgInputFilled(formState?.rg) === false}
                            success={rgInputFilled(formState?.rg) === true}
                            InputLabelProps={{ shrink: formState?.rg !== "", style: { color: labelColorHelper(rgInputFilled(formState?.rg)) } }} />
                    )}
                </InputMask>

                <FormInput
                    id="maritalStatus"
                    name='maritalStatus'
                    onChange={handleInputChange}
                    select
                    error={inputIncomplete(formState?.maritalStatus)}
                    success={regularTextInputFilled(formState?.maritalStatus)}
                    label="Estado Civil"
                    variant="outlined"
                    placeholder="Estado Civil"
                    value={formState?.maritalStatus || ""}
                    className="inputForm"
                    InputLabelProps={{
                        shrink: shrinkHelper(formState?.maritalStatus),
                        style: { color: labelColorHelper(formState?.maritalStatus) }
                    }}>
                    {maritalStatusOptions?.map((maritalStatus) => (
                        <MenuItem key={maritalStatus.label} value={maritalStatus.value} >
                            {maritalStatus.label}
                        </MenuItem>
                    ))}
                </FormInput>
                <FormInput
                    id="nationality"
                    name='nationality'
                    onChange={handleInputChange}
                    select
                    error={inputIncomplete(formState?.nationality)}
                    success={regularTextInputFilled(formState?.nationality)}
                    label="Nacionalidade"
                    className="inputForm"
                    variant="outlined"
                    placeholder="Nacionalidade"
                    value={formState?.nationality || ""}
                    required={required}
                    InputLabelProps={{
                        shrink: shrinkHelper(formState?.nationality),
                        style: { color: labelColorHelper(formState?.nationality) }
                    }}>
                    {nationalityOptions?.map((nationality) => (
                        <MenuItem key={nationality.label} value={nationality.value}>
                            {nationality.label}
                        </MenuItem>
                    ))}
                </FormInput>
                <FormInput
                    name='profession'
                    onChange={handleInputChange}
                    id="profession"
                    select
                    success={regularTextInputFilled(formState?.profession)}
                    label="Profissão"
                    className="inputForm"
                    variant="outlined"
                    placeholder="Profissão"
                    value={formState?.profession || ""}
                    required={required}
                    InputLabelProps={{
                        shrink: shrinkHelper(formState?.profession),
                        style: { color: labelColorHelper(formState?.profession) }
                    }}>
                    {professionOptions?.map((profession) => (
                        <MenuItem key={profession.label} value={profession.value}>
                            {profession.label}
                        </MenuItem>
                    ))}
                </FormInput>
            </FormRow>

            <FormFooterContainer>
                {isLoading ? (
                    <Box>
                        <CircularProgress className="submitLoading" />
                    </Box>
                ) : (
                    <FormSubmitButton type="submit" form={REGISTER_FORM.COMPANY_ID} endIcon={<ArrowForwardIcon className="icon" />}>
                        <span>Dados do imóvel</span>
                    </FormSubmitButton>
                )}
            </FormFooterContainer>

        </Form>

    )
}