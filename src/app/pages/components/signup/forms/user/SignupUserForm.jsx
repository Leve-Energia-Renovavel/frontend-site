/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreUser } from '@/app/hooks/stores/useStore';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, CircularProgress, MenuItem } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import InputMask from "react-input-mask";
import { Form, FormContent, FormContentLarge, FormFooterContainer, FormInput, FormRow, FormSubmitButton } from './styles';

import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import { COOKIES_FOR, REGISTER_FORM } from '@/app/pages/enums/globalEnums';
import { formatCpf } from '@/app/utils/formatters/documentFormatter';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import { sanitizeAndCapitalizeWords } from '@/app/utils/formatters/textFormatter';
import { birthDateInputFilled, birthDateInputIncomplete, costValidation, cpfInputFilled, emailInputComplete, emailInputIncomplete, inputCompleted, inputIncomplete, labelColorHelper, phoneInputComplete, phoneInputIncomplete, rgInputFilled, shrinkHelper } from '@/app/utils/helper/register/registerUserHelper';
import { schemaValidation } from './schema';

export default function SignupUserForm() {

  const search = useSearchParams()
  const router = useRouter()
  const store = useStoreUser()
  const storeMessage = useStoreMessages()

  const setErrors = storeMessage.setErrors

  const uuid = store?.user?.uuid || Cookies.get(COOKIES_FOR.UUID) || search.get("uuid")

  const { name, email, phone, cost, rg, cpf, nationality, maritalStatus, profession, birthDate } = store?.user || {}

  const [isLoading, setIsLoading] = useState(false);

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
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    store.updateUser({ [name]: value });
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
    };

    store.updateUser({ ...formState });
    const response = await schemaValidation(submitData, router, setErrors);

    setIsLoading(false)
  }

  const required = false

  return (
    <>
      <Form id={REGISTER_FORM.USER_ID}
        acceptCharset="UTF-8"
        method="POST"
        onSubmit={handleSubmit}
        className='signupUserForm'>
        <FormRow className='signupUserFormRow'>
          <FormInput
            className="inputForm"
            name='name'
            onChange={handleInputChange}
            variant="outlined"
            type="text"
            required={required}
            value={formState?.name}
            error={inputIncomplete(formState?.name)}
            success={inputCompleted(formState?.name)}
            label={`Nome completo`}
            placeholder={`Nome completo`}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.name),
              style: { color: labelColorHelper(formState?.name) }
            }}
          />
        </FormRow>

        <FormContentLarge className='signupUserFormContentLarge'>
          <FormInput
            name='email'
            onChange={handleInputChange}
            className="inputForm"
            variant="outlined"
            value={formState?.email}
            type="text"
            required={required}
            error={emailInputIncomplete(formState?.email)}
            success={emailInputComplete(formState?.email)}
            label={`Email`}
            placeholder={`Email`}
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
                error={phoneInputIncomplete(formState?.phone)}
                success={phoneInputComplete(formState?.phone)}
                label={`Celular / Whatsapp`}
                placeholder={`Celular / Whatsapp`}
                InputLabelProps={{
                  shrink: shrinkHelper(formState?.phone),
                  style: { color: labelColorHelper(formState?.phone) }
                }} />
            )}
          </InputMask>
        </FormContentLarge>

        <FormContent className='signupUserFormContent'>

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
                InputLabelProps={{
                  shrink: shrinkHelper(formState?.cpf),
                  style: { color: labelColorHelper(cpfInputFilled(formState?.cpf)) }
                }} />
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
                InputLabelProps={{
                  shrink: shrinkHelper(formState?.rg),
                  style: { color: labelColorHelper(rgInputFilled(formState?.rg)) }
                }} />
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
                error={birthDateInputIncomplete(formState?.birthDate)}
                success={birthDateInputFilled(formState?.birthDate)}
                InputLabelProps={{
                  shrink: shrinkHelper(formState?.birthDate),
                  style: { color: labelColorHelper(formState?.birthDate) }
                }} />
            )}
          </InputMask>

          <FormInput
            id="nationality"
            name='nationality'
            onChange={handleInputChange}
            select
            error={inputIncomplete(formState?.nationality)}
            success={inputCompleted(formState?.nationality)}
            label="Nacionalidade"
            className="inputForm"
            variant="outlined"
            placeholder="Nacionalidade"
            value={formState?.nationality || ""}
            required={required}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.nationality),
              style: { color: labelColorHelper(inputCompleted(formState?.nationality)) }
            }}>
            {nationalityOptions?.map((nationality) => (
              <MenuItem key={nationality.label} value={nationality.value}>
                {nationality.label}
              </MenuItem>
            ))}
          </FormInput>

          <FormInput
            id="maritalStatus"
            name='maritalStatus'
            onChange={handleInputChange}
            select
            error={inputIncomplete(formState?.maritalStatus)}
            success={inputCompleted(formState?.maritalStatus)}
            label="Estado Civil"
            variant="outlined"
            placeholder="Estado Civil"
            value={formState?.maritalStatus || ""}
            className="inputForm"
            InputLabelProps={{
              shrink: shrinkHelper(formState?.maritalStatus),
              style: { color: labelColorHelper(inputCompleted(formState?.maritalStatus)) }
            }}>
            {maritalStatusOptions?.map((maritalStatus) => (
              <MenuItem key={maritalStatus.label} value={maritalStatus.value} >
                {maritalStatus.label}
              </MenuItem>
            ))}
          </FormInput>

          <FormInput
            name='profession'
            onChange={handleInputChange}
            id="profession"
            select
            success={inputCompleted(formState?.profession)}
            label="Profissão"
            className="inputForm"
            variant="outlined"
            placeholder="Profissão"
            value={formState?.profession || ""}
            required={required}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.profession),
              style: { color: labelColorHelper(inputCompleted(formState?.profession)) }
            }}>
            {professionOptions?.map((profession) => (
              <MenuItem key={profession.label} value={profession.value}>
                {profession.label}
              </MenuItem>
            ))}
          </FormInput>
        </FormContent>

        <FormFooterContainer>
          {isLoading ? (
            <Box>
              <CircularProgress className="submitLoading" />
            </Box>
          ) : (
            <FormSubmitButton type="submit" form={REGISTER_FORM.USER_ID} endIcon={<ArrowForwardIcon className="icon" />}>
              <span>Dados do imóvel</span>
            </FormSubmitButton>
          )}
        </FormFooterContainer>
      </Form>
    </>
  )
}