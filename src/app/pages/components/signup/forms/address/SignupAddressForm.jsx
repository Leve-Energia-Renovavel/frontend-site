/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreUser } from "@/app/hooks/stores/useStore";
import useGetCEP from "@/app/hooks/utils/useGetCEP";
import useGetCNPJ from "@/app/hooks/utils/useGetCNPJ";
import { PATH_TO } from "@/app/pages/enums/globalEnums";
import { findCityIdByName } from "@/app/service/utils/addressUtilsService";
import { hasToSignContract, requestSuccessful } from "@/app/service/utils/Validations";
import { stateOptions } from '@/app/utils/form-options/addressFormOptions';
import { statesAcronymOptions } from "@/app/utils/form-options/statesIdOptions";
import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, MenuItem } from '@mui/material';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import { Form, FormContent, FormInput, FormLastRow, InstallationInput } from "./styles";

export default function SignupAddressForm() {

  const router = useRouter()
  const store = useStoreUser()
  const storeAddress = useStoreAddress()

  const fetchCEP = useGetCEP();
  const fetchCNPJ = useGetCNPJ();

  const uuid = store.user.uuid || Cookies.get('leveUUID')
  // const address = JSON.parse(localStorage.getItem('address'))

  const { street, neighborhood, city, state, stateId, cityId, cep } = address?.address ?? (storeAddress?.address || {})

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCEP, setIsLoadingCEP] = useState(false);

  const [stateValue, setStateValue] = useState(stateId ? stateId : stateOptions[(statesAcronymOptions[state])]);

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

  const schemaValidation = async (data) => {
    try {
      console.log("data ==>>" + data)
      // const validatedData =  await addressSchema.validate(data, { abortEarly: false })

      return data;
    } catch (error) {
      return error.errors;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    var submitData = {
      uuid: uuid,
      cep: addressRefs.addressCep.current.value,
      endereco: addressRefs.address.current.value,
      numero: parseFloat(addressRefs.addressNumber.current.value?.replace(/[^0-9.]/g, "")),
      bairro: addressRefs.neighborhood.current.value,
      complemento: addressRefs.complement.current.value,
      estado_id: storeAddress.address.stateId || stateValue.cod_estados,
      cidade_id: storeAddress.address.cityId || await findCityIdByName(addressRefs.city.current.value, stateValue.cod_estados),
      numero_instalacao: addressRefs.installationNumber.current.value
    }

    const response = await schemaValidation(submitData)
    if (requestSuccessful(response?.status) || hasToSignContract(response?.data?.message)) {

      store.updateUser({
        birthDate: submitData.data_nascimento,
        rg: submitData.rg,
        cpf: submitData.cpf,
        maritalStatus: submitData.estado_civil,
        profession: submitData.profissao,
        nationality: submitData.nacionalidade,
      });

      const updatedAddress = {
        street: submitData.endereco,
        number: submitData.numero,
        neighborhood: submitData.bairro,
        complement: submitData.complemento,
        city: addressRefs.city.current.value,
        state: addressRefs.state.current.value,
        cityId: submitData.cidade_id,
        stateId: submitData.estado_id,
        cep: submitData.cep,
        installationNumber: submitData.numero_instalacao,
      }

      storeAddress.updateAddress(updatedAddress)

      router.push(PATH_TO.REGISTER_CONTRACT)

    } else await handleRequestsErrors(response, setNotifications, setErrorMessage, router)

    setIsLoading(false)
  }

  const handleGetCEP = async (cep) => {
    if (cep !== "") {
      setIsLoadingCEP(true)
      try {
        const response = await fetchCEP(cep)
        if (requestSuccessful(response?.status)) {
          setNotifications(["Endereço encontrado com sucesso!"])
        } else {
          setErrorMessage(["Erro ao buscar o CEP. Por favor, preencha os dados manualmente."])
        }
      } catch (error) {
      } finally {
        setIsLoadingCEP(false)
      }
    } else {
      setErrorMessage(["Preencha o campo de CEP antes da busca"])
    }
  }

  const handleChangeState = (value) => {
    setStateValue(stateOptions[value])
    const newStateId = value
    const newStateUf = stateOptions[value].sigla
    storeAddress.updateAddress({ stateId: newStateId, state: newStateUf })
  }


  return (
    <Form id='signupForm' acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
      <FormContent>
        <InputMask mask="99999-999" value={cep || ""}
          onChange={(e) => storeAddress.updateAddress({ cep: e.target.value })}
          onBlur={(e) => handleGetCEP(addressRefs.addressCep.current.value)}>
          {() => <FormInput
            className="inputForm"
            inputRef={addressRefs.addressCep}
            label="CEP"
            variant="outlined"
            placeholder="CEP"
            type="text"
            inputProps={{ inputMode: 'numeric' }}
            InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }}
            InputProps={{
              endAdornment: !isLoadingCEP ? <SearchIcon className="searchIcon"
                onClick={() => handleGetCEP(addressRefs.addressCep.current.value)} /> :
                <Box>
                  <CircularProgress className='formLoading' size={"25px"} />
                </Box>,
            }}
            required />}
        </InputMask>

        <FormInput className="inputForm"
          defaultValue={street || ''}
          inputRef={addressRefs.address}
          label="Endereço" variant="outlined"
          placeholder="Endereço"
          type="text"
          InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }} required />

        <InputMask mask="99999">
          {() => <FormInput
            className="inputForm"
            inputRef={addressRefs.addressNumber}
            label="Nº"
            variant="outlined"
            placeholder="Nº"
            type="text"
            inputProps={{ inputMode: 'numeric' }}
            InputLabelProps={{ style: { color: '#FF7133' } }}
            required />}
        </InputMask>

        <FormInput className="inputForm"
          inputRef={addressRefs.complement}
          label="Complemento" variant="outlined" placeholder="Complemento"
          type="text"
          InputLabelProps={addressRefs?.complement?.current?.value ? { shrink: true } : {},
            { style: { color: '#FF7133' } }} />

        <FormInput className="inputForm"
          defaultValue={neighborhood || ''}
          inputRef={addressRefs.neighborhood}
          label="Bairro" variant="outlined" placeholder="Bairro"
          type="text"
          InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }} required />

        <FormInput
          id="state"
          select
          value={stateValue?.cod_estados || ''}
          onChange={(event) => handleChangeState(event.target.value)}
          label="Estado"
          placeholder="Estado"
          variant="outlined"
          className="inputForm"
          InputLabelProps={{
            component: 'span',
            style: { color: '#FF7133' },
            shrink: stateValue ? true : false
          }}
          inputRef={addressRefs.state}
          required>
          {Object.values(stateOptions).map((state) => {
            return (
              <MenuItem key={state.cod_estados} value={state.cod_estados}>{state.sigla}</MenuItem>
            )
          })}
        </FormInput>


        <FormInput
          className="inputForm"
          defaultValue={city?.toUpperCase() || ''}
          inputRef={addressRefs.city}
          label="Cidade"
          variant="outlined"
          placeholder="Cidade"
          type="text"
          InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }} required />
      </FormContent>

      <FormLastRow>
        <InstallationInput
          inputRef={addressRefs.installationNumber}
          className="inputForm"
          label={`Número de Instalação`}
          variant="outlined"
          placeholder={`Número de Instalação`}
          type="text"
        />
      </FormLastRow>

    </Form>
  )
}