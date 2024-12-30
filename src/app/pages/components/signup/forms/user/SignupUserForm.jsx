/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreUser } from '@/app/hooks/stores/useStore';
import useGetCNPJ from '@/app/hooks/utils/useGetCNPJ';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import { formatBrazillianCurrency } from '@/app/utils/formatters/costFormatter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, MenuItem } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import InputMask from "react-input-mask";
import { BackButton, Form, FormContent, FormFooterContainer, FormInput, FormRow, FormSubmitButton } from './styles';

import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import { COOKIES_FOR, PATH_TO, REGISTER_FORM } from '@/app/pages/enums/globalEnums';
import { formatCpf } from '@/app/utils/formatters/documentFormatter';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import { sanitizeAndCapitalizeWords } from '@/app/utils/formatters/textFormatter';
import { cnpjInputComplete, companyInputFilled } from '@/app/utils/helper/register/registerCompanyHelper';
import { birthDateInputFilled, costTextInputFilled, costValidation, cpfInputFilled, emailInputFilled, handleChangeUserCost, inputIncomplete, normalTextInputFilled, phoneInputFilled, regularTextInputFilled, rgInputFilled } from '@/app/utils/helper/register/registerUserHelper';
import { schemaValidation } from './schema';

export default function SignupUserForm() {

  const search = useSearchParams()
  const router = useRouter()
  const store = useStoreUser()
  const storeMessage = useStoreMessages()

  const setErrors = storeMessage.setErrors
  const setNotifications = storeMessage.setNotifications

  const uuid = store?.user?.uuid || Cookies.get(COOKIES_FOR.UUID) || search.get("uuid")

  const { name, email, phone, cost, rg, cpf, distributor, nationality, maritalStatus, profession, companyName, cnpj, birthDate, isCompany } = store?.user || {}

  const [isForeigner, setIsForeigner] = useState(false);
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
    ...(isCompany && {
      cnpj: cnpj || "",
      socialReason: companyName || "",
      socialContractFile: null,
      energyExtractFile: null,
    }),
  });

  const getCompanyData = useGetCNPJ(setFormState);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    store.updateUser({ [name]: value });
  };

  const handleNationalityChange = (value) => {
    setIsForeigner(value === "estrangeira");
  };

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
      ...(isCompany && {
        razao_social: formState.socialReason,
        cnpj: formState.cnpj,
      }),
    };

    store.updateUser({ ...formState });
    const response = await schemaValidation(submitData, router, setNotifications, setErrors);

    setIsLoading(false)
  }

  const required = false
  const greenLeve = "#005940"
  const orangeLeve = "#FF7133"

  return (
    <>
      <Form id={REGISTER_FORM.USER_ID} acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
        {isCompany && (
          <FormRow>
            <InputMask mask="99.999.999/9999-99" onChange={handleInputChange} onBlur={() => handleGetCNPJ(formState?.cnpj)}>
              {() => (
                <FormInput
                  name='cnpj'
                  className="inputForm"
                  label="CNPJ"
                  variant="outlined"
                  placeholder="CNPJ"
                  type="text"
                  required
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
                  InputLabelProps={{ style: { color: cnpjInputComplete(formState?.cnpj) ? greenLeve : orangeLeve } }}
                />
              )}
            </InputMask>
            <FormInput
              name='socialReason'
              onChange={handleInputChange}
              className="inputForm"
              label="Razão Social"
              variant="outlined"
              placeholder="Razão Social"
              type="text"
              value={formState?.socialReason}
              success={companyInputFilled(formState?.socialReason)}
              InputLabelProps={{ style: { color: companyInputFilled(formState?.socialReason) ? greenLeve : orangeLeve } }}
              required
            />

          </FormRow>
        )}
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
            label={`Nome Completo ${isCompany ? 'do responsável' : ''}`}
            placeholder={`Nome Completo ${isCompany ? 'do responsável' : ''}`}
            InputLabelProps={{ shrink: true, style: { color: normalTextInputFilled(formState?.name) ? greenLeve : orangeLeve } }}
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
            label={`Email ${isCompany ? 'do responsável' : ''}`}
            placeholder={`Email ${isCompany ? 'do responsável' : ''}`}
            InputLabelProps={{ shrink: formState?.email !== "", style: { color: emailInputFilled(formState?.email) ? greenLeve : orangeLeve } }} />
        </FormRow>
        <FormContent>
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
                label={`Telefone ${isCompany ? 'do responsável' : ''}`}
                placeholder={`Telefone ${isCompany ? 'do responsável' : ''}`}
                InputLabelProps={{ shrink: formState?.phone !== "", style: { color: phoneInputFilled(formState?.phone) ? greenLeve : orangeLeve } }} />
            )}
          </InputMask>
          {isForeigner ? (
            <InputMask mask="*******-*" required onChange={handleInputChange}>
              {() => (
                <FormInput
                  name='rne'
                  className="inputForm"
                  label="RNE"
                  variant="outlined"
                  placeholder="RNE"
                  type="text"
                  required={required}
                />
              )}
            </InputMask>
          ) : (
            <InputMask mask="********-*" value={formState?.rg} onChange={handleInputChange}>
              {() => (
                <FormInput
                  className="inputForm"
                  label="RG"
                  variant="outlined"
                  placeholder="RG"
                  name='rg'
                  type="text"
                  required={required}
                  inputProps={{ inputMode: 'numeric' }}
                  error={rgInputFilled(formState?.rg) === false}
                  success={rgInputFilled(formState?.rg) === true}
                  InputLabelProps={{ shrink: formState?.rg !== "", style: { color: rgInputFilled(formState?.rg) ? greenLeve : orangeLeve } }} />
              )}
            </InputMask>
          )}
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
                InputLabelProps={{ shrink: formState?.cpf !== "", style: { color: cpfInputFilled(formState?.cpf) ? greenLeve : orangeLeve } }} />
            )}
          </InputMask>
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
                InputLabelProps={{ shrink: formState?.birthDate !== "", style: { color: birthDateInputFilled(formState?.birthDate) ? greenLeve : orangeLeve } }} />
            )}
          </InputMask>
          <FormInput
            className="inputForm"
            label="Custo Mensal em R$"
            variant="outlined"
            placeholder="Custo Mensal em R$"
            type="text"
            name='cost'
            required={required}
            onChange={(event) => handleChangeUserCost(event, setFormState)}
            inputProps={{ inputMode: 'numeric' }}
            value={formatBrazillianCurrency(formState?.cost)}
            success={costTextInputFilled(formState?.cost)}
            InputLabelProps={{ shrink: true, style: { color: regularTextInputFilled(formState?.cost) ? greenLeve : orangeLeve } }} />
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
            InputLabelProps={{ shrink: formState?.maritalStatus !== "", style: { color: regularTextInputFilled(formState?.maritalStatus) ? greenLeve : orangeLeve } }}>
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
            InputLabelProps={{ shrink: formState?.nationality !== "", style: { color: regularTextInputFilled(formState?.nationality) ? greenLeve : orangeLeve } }}>
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
            InputLabelProps={{ shrink: formState?.profession !== "", style: { color: regularTextInputFilled(formState?.profession) ? greenLeve : orangeLeve } }}>
            {professionOptions?.map((profession) => (
              <MenuItem key={profession.label} value={profession.value}>
                {profession.label}
              </MenuItem>
            ))}
          </FormInput>
        </FormContent>

        <FormFooterContainer>
          <BackButton onClick={() => router.push(`${PATH_TO.ECONOMY_SIMULATION}/?uuid=${uuid}`)} endIcon={<ArrowBackIcon className="icon" />} />
          {isLoading ? (
            <Box>
              <CircularProgress className="submitLoading" />
            </Box>
          ) : (
            <FormSubmitButton type="submit" form={REGISTER_FORM.USER_ID} endIcon={<ArrowForwardIcon className="icon" />}>
              <span>Continuar</span>
            </FormSubmitButton>
          )}
        </FormFooterContainer>
      </Form>
    </>
  )
}