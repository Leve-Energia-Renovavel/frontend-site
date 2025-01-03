/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from "@/app/hooks/stores/useStore";
import { useStoreMessages } from "@/app/hooks/stores/useStoreMessages";
import useGetCEP from "@/app/hooks/utils/useGetCEP";
import { COOKIES_FOR, PATH_TO, REGISTER_FORM } from "@/app/pages/enums/globalEnums";
import { findCityIdByName } from "@/app/service/utils/addressUtilsService";
import { hasToSignContract, requestSuccessful } from "@/app/service/utils/Validations";
import { stateOptions } from '@/app/utils/form-options/addressFormOptions';
import { formatCpf } from "@/app/utils/formatters/documentFormatter";
import formatPhoneNumber from "@/app/utils/formatters/phoneFormatter";
import { dontIncludesUnderscore, isNotEmpty } from "@/app/utils/helper/globalHelper";
import { addressTextInputFilled, cepInputComplete, cepInputIncomplete, inputIncomplete, inputIsEmpty, labelColorHelper, numberInputFilled, numberInputIncomplete, shrinkHelper } from "@/app/utils/helper/register/registerAddressHelper";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, MenuItem } from '@mui/material';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputMask from "react-input-mask";
import { schemaValidation } from "./schema";
import { Form, FormContent, FormContentFooter, FormFooterContainer, FormInput, FormRow, FormSubmitButton, LoadingIcon } from "./styles";

export default function SignupAddressForm() {

  const router = useRouter()
  const store = useStoreUser()
  const storeAddress = useStoreAddress()
  const storeMessage = useStoreMessages()

  const setErrors = storeMessage.setErrors
  const setNotifications = storeMessage.setNotifications

  const uuid = store.user.uuid || Cookies.get(COOKIES_FOR.UUID)

  const { name, email, phone, cost, rg, cpf, distributor, nationality, maritalStatus, profession, companyName, cnpj, birthDate, isCompany } = store?.user || {}
  const { street, neighborhood, city, state, number, complement, stateId, cityId, cep, installationNumber } = storeAddress?.address || {}

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCEP, setIsLoadingCEP] = useState(false);

  const [formState, setFormState] = useState({
    street: street || "",
    number: number || "",
    cep: cep || "",
    complement: complement || "",
    neighborhood: neighborhood || "",
    state: state || "",
    stateId: stateId || "",
    city: city || "",
    cityId: cityId || "",
    installationNumber: installationNumber || "",
  });


  const fetchCEP = useGetCEP(setFormState);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    store.updateUser({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    var submitData = {
      uuid: uuid,
      nome_completo: name,
      email: email,
      rg: rg,
      cpf: formatCpf(cpf),
      data_nascimento: birthDate,
      telefone: formatPhoneNumber(phone),
      valor: parseFloat(cost?.toString()?.replace(',', '.')),
      nacionalidade: nationality,
      profissao: profession,
      estado_civil: maritalStatus,

      ...(isCompany && {
        razao_social: companyName,
        cnpj: cnpj,
      }),

      cep: formState?.cep,
      endereco: formState?.street,
      numero: parseFloat(formState?.number?.replace(/[^0-9.]/g, "")),
      bairro: formState?.neighborhood,
      complemento: formState?.complement,
      estado_id: formState?.stateId,
      cidade_id: formState?.cityId || await findCityIdByName(formState?.city, formState?.stateId),
      numero_instalacao: formState?.installationNumber,
    };

    console.log("address form data ===>>", submitData)

    const response = await schemaValidation(submitData, setErrors);
    storeAddress.updateAddress({ ...formState });

    if (requestSuccessful(response?.status) || hasToSignContract(response?.data?.message)) {
      router.push(PATH_TO.REGISTER_CONTRACT);
    } else {
      setErrors(["Erro ao salvar as informações do imóvel. Por favor, tente novamente."]);
    }

    setIsLoading(false);
  };

  const handleGetCEP = async (cep) => {
    if (isNotEmpty(cep) && dontIncludesUnderscore(cep)) {
      setIsLoadingCEP(true)
      try {
        await fetchCEP(cep)
      } catch (error) {
        setErrors(["Erro ao buscar o CEP. Por favor, preencha os dados manualmente."])
      } finally {
        setIsLoadingCEP(false)
      }
    } else {
      setErrors(["Preencha o campo de CEP corretamente antes da busca"])
    }

    console.log("formState ===>>", formState)
    console.log("storeAddress ===>>", storeAddress?.address)
  }

  const handleChangeState = (value) => {
    const newStateId = value
    const newState = stateOptions[value].sigla
    setFormState((prevState) => ({ ...prevState, stateId: newStateId, state: newState }));
    storeAddress.updateAddress({ stateId: newStateId, state: newState })
  }

  const required = true

  return (
    <>
      <Form id={REGISTER_FORM.ADDRESS_ID} acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit} className="signupAddressForm">

        <FormRow className="signupAddressFormRow">
          <InputMask mask="99999-999" value={formState?.cep} onChange={handleInputChange}>
            {() => <FormInput
              className="inputForm"
              label="CEP"
              name="cep"
              variant="outlined"
              placeholder="CEP"
              type="text"
              required={required}
              inputProps={{ inputMode: 'numeric' }}
              error={cepInputIncomplete(formState?.cep)}
              success={cepInputComplete(formState?.cep)}
              InputLabelProps={{
                shrink: shrinkHelper(formState?.cep),
                style: { color: labelColorHelper(formState?.cep) }
              }}
              InputProps={{
                endAdornment: !isLoadingCEP ?
                  <SearchIcon className="searchIcon"
                    onClick={() => handleGetCEP(formState?.cep)} /> :
                  <Box>
                    <CircularProgress className='formLoading' size={"25px"} />
                  </Box>,
              }} />}
          </InputMask>

          <FormInput
            label="Endereço"
            variant="outlined"
            type="text"
            name="street"
            className="inputForm"
            placeholder="Endereço"
            required={required}
            onChange={handleInputChange}
            value={formState?.street}
            error={inputIncomplete(formState?.street)}
            success={addressTextInputFilled(formState?.street)}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.street),
              style: { color: labelColorHelper(formState?.street) }
            }} />

          <InputMask mask="99999" onChange={handleInputChange} value={formState?.number}>
            {() => <FormInput
              label="Nº"
              name="number"
              placeholder="Nº"
              type="text"
              required={required}
              variant="outlined"
              className="inputForm"
              inputProps={{ inputMode: 'numeric' }}
              error={numberInputIncomplete(formState?.number)}
              success={numberInputFilled(formState?.number)}
              InputLabelProps={{
                shrink: shrinkHelper(formState?.number),
                style: { color: labelColorHelper(formState?.number) }
              }} />
            }
          </InputMask>

        </FormRow>

        <FormContent className="signupAddressFormContent">
          <FormInput
            type="text"
            label="Bairro"
            placeholder="Bairro"
            variant="outlined"
            name="neighborhood"
            className="inputForm"
            required={required}
            onChange={handleInputChange}
            value={formState?.neighborhood}
            error={inputIsEmpty(formState?.neighborhood)}
            success={addressTextInputFilled(formState?.neighborhood)}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.neighborhood),
              style: { color: labelColorHelper(addressTextInputFilled(formState?.neighborhood)) }
            }} />


          <FormInput
            name="complement"
            variant="outlined"
            type="text"
            label="Complemento"
            className="inputForm"
            placeholder="Complemento"
            required={false}
            onChange={handleInputChange}
            value={formState?.complement}
            error={inputIsEmpty(formState?.complement)}
            success={addressTextInputFilled(formState?.complement)}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.complement),
              style: { color: labelColorHelper(formState?.complement) }
            }} />


        </FormContent>

        <FormContentFooter className="signupAddressFormContentFooter">
          <FormInput
            type="text"
            name="city"
            label="Cidade"
            placeholder="Cidade"
            className="inputForm"
            variant="outlined"
            required={required}
            onChange={handleInputChange}
            defaultValue={formState?.city?.toUpperCase()}
            error={inputIsEmpty(formState?.city)}
            success={addressTextInputFilled(formState?.city)}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.city),
              style: { color: labelColorHelper(formState?.city) }
            }}
          />

          <FormInput
            id="state"
            select
            label="UF"
            placeholder="UF"
            variant="outlined"
            className="inputForm"
            required={required}
            value={formState?.stateId || ''}
            onChange={(event) => handleChangeState(event.target.value)}
            error={inputIncomplete(formState?.stateId)}
            success={addressTextInputFilled(formState?.stateId)}
            InputLabelProps={{
              component: 'span',
              shrink: shrinkHelper(formState?.stateId),
              style: { color: labelColorHelper(formState?.stateId) }
            }}>
            {Object.values(stateOptions).map((state) => {
              return (
                <MenuItem key={state.estado_id} value={state.estado_id}>{state.sigla}</MenuItem>
              )
            })}
          </FormInput>

          <FormInput
            type="text"
            variant="outlined"
            className="inputForm"
            onChange={handleInputChange}
            name="installationNumber"
            label="Número de instalação"
            placeholder="Número de instalação"
            required={false}
            value={formState?.installationNumber || ''}
            success={addressTextInputFilled(formState?.installationNumber)}
            InputLabelProps={{
              shrink: shrinkHelper(formState?.installationNumber),
              style: { color: labelColorHelper(addressTextInputFilled(formState?.installationNumber)) }
            }}
          />

        </FormContentFooter>

        <FormFooterContainer className="signupAddressFormFooterContainer">
          {isLoading ?
            <LoadingIcon className="submitLoading" />
            : <FormSubmitButton
              type='submit'
              form={REGISTER_FORM.ADDRESS_ID}
              endIcon={<ArrowForwardIcon className='icon' />}><span>Assine o contrato</span></FormSubmitButton>}
        </FormFooterContainer>

      </Form>
    </>

  )
}