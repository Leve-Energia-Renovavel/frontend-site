"use client"

import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress } from '@mui/material';
import InputMask from "react-input-mask";
import { Form, FormFooterContainer, FormInput, FormRow, FormSubmitButton, RepresentativeTitleContainer } from "./styles";

import { useStoreUser } from "@/app/hooks/stores/useStore";
import { useStoreMessages } from "@/app/hooks/stores/useStoreMessages";
import useGetCNPJ from "@/app/hooks/utils/useGetCNPJ";
import { REGISTER_FORM } from '@/app/pages/enums/globalEnums';
import { formatCpf } from '@/app/utils/formatters/documentFormatter';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import { sanitizeAndCapitalizeWords } from '@/app/utils/formatters/textFormatter';
import { isValidCNPJ } from '@/app/utils/helper/globalHelper';
import { cnpjInputComplete, companyInputFilled, inputIncomplete, nameInputIncomplete, shrinkHelper } from '@/app/utils/helper/register/registerCompanyHelper';
import { birthDateInputFilled, birthDateInputIncomplete, costValidation, cpfInputFilled, emailInputComplete, labelColorHelper, normalTextInputFilled, phoneInputComplete, rgInputFilled } from '@/app/utils/helper/register/registerUserHelper';
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
        cnpj: cnpj || "",
        companyName: companyName || "",
        socialContractFile: null,
        energyExtractFile: null,

        nationality: "nao_informado",
        maritalStatus: "nao_informado",
        profession: "nao_informado",
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

        store.updateUser({ ...formState });
        const response = await schemaValidation(submitData, router, setErrors);

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
        if (isValidCNPJ(cnpj)) {
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
                    success={emailInputComplete(formState?.email)}
                    error={inputIncomplete(formState?.email)}
                    label={`E-mail`}
                    placeholder={`E-mail`}
                    InputLabelProps={{
                        shrink: shrinkHelper(formState?.email),
                        style: { color: labelColorHelper(formState?.email) }
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
                            success={phoneInputComplete(formState?.phone)}
                            label={`Celular / Whatsapp`}
                            placeholder={`Celular / Whatsapp`}
                            InputLabelProps={{
                                shrink: shrinkHelper(formState?.phone),
                                style: { color: labelColorHelper(formState?.phone) }
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
                    error={nameInputIncomplete(formState?.name)}
                    success={normalTextInputFilled(formState?.name)}
                    label={`Nome completo`}
                    placeholder={`Nome completo`}
                    InputLabelProps={{
                        shrink: true,
                        style: { color: labelColorHelper(formState?.name) }
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
                            error={birthDateInputIncomplete(formState?.birthDate)}
                            success={birthDateInputFilled(formState?.birthDate)}
                            InputLabelProps={{ shrink: shrinkHelper(formState?.birthDate), style: { color: labelColorHelper(birthDateInputFilled(formState?.birthDate)) } }} />
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
                            InputLabelProps={{ shrink: shrinkHelper(formState?.cpf), style: { color: labelColorHelper(cpfInputFilled(formState?.cpf)) } }} />
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
                            InputLabelProps={{ shrink: shrinkHelper(formState?.rg), style: { color: labelColorHelper(rgInputFilled(formState?.rg)) } }} />
                    )}
                </InputMask>

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