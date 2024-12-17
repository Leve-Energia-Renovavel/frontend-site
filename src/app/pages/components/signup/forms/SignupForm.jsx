/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreCompany, useStoreUser } from '@/app/hooks/stores/useStore';
import useGetCEP from '@/app/hooks/utils/useGetCEP';
import useGetCNPJ from '@/app/hooks/utils/useGetCNPJ';
import InstallationNumberModal from '@/app/register/modals/installation-number-modal/InstallationNumberModal';
import { hasToSignContract, requestSuccessful } from '@/app/service/utils/Validations';
import { findCityIdByName } from '@/app/service/utils/addressUtilsService';
import { stateOptions } from '@/app/utils/form-options/addressFormOptions';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import { statesAcronymOptions } from '@/app/utils/form-options/statesIdOptions';
import { formatBrazillianCurrency } from '@/app/utils/formatters/costFormatter';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CircularProgress, MenuItem, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import InputMask from "react-input-mask";
import { companySchema, userSchema } from './schema';
import { SignupFormContainer as Container, FileUploadContainer, FileUploadItem, Form, FormButtonContainer, FormContent, FormDivider, FormFooter, FormInput, FormLastRow, FormRow, FormSubmitButton, InstallationInput, InstallationNumberDisclaimer, SignupFormContentContainer, fileInputStyles } from './styles';

import { signUp } from '@/app/service/user-service/UserService';
import { sanitizeAndCapitalizeWords } from '@/app/utils/formatters/textFormatter';
import { activeDistributorsForDisclaimer, costValidation, newCostValidation } from '@/app/utils/helper/signup/signupHelper';
import dynamic from 'next/dynamic';
import { handleRequestsErrors } from './validation';

const Messages = dynamic(() => import('../../messages/Messages'), { ssr: false });

export default function SignupForm() {

  const search = useSearchParams()
  const router = useRouter()
  const store = useStoreUser()
  const storeAddress = useStoreAddress()

  const uuid = store.user.uuid || Cookies.get('leveUUID')
  const user = JSON.parse(localStorage.getItem('user'))
  const address = JSON.parse(localStorage.getItem('address'))
  const company = useStoreCompany().company

  const { name, email, phone, cost, distributor, companyName, cnpj, birthDate, isCompany } = user?.user ?? (store?.user || {})
  const { street, neighborhood, city, state, stateId, cityId, cep } = address?.address ?? (storeAddress?.address || {})

  const [userCost, setUserCost] = useState(cost || null)
  const [isForeigner, setIsForeigner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCEP, setIsLoadingCEP] = useState(false);
  const [isLoadingCNPJ, setIsLoadingCNPJ] = useState(false);

  const [errors, setErrorMessage] = useState([]);
  const [notifications, setNotifications] = useState([])
  const [stateValue, setStateValue] = useState(stateId ? stateId : stateOptions[(statesAcronymOptions[state])]);

  const [socialContractFile, setSocialContractFile] = useState(null);
  const [energyExtractFile, setEnergyExtractFile] = useState(null);

  const showDisclaimer = activeDistributorsForDisclaimer(distributor?.toUpperCase())

  const fetchCEP = useGetCEP();
  const fetchCNPJ = useGetCNPJ();

  const handleChangeUserCost = (event) => {
    let newCost = event.target.value;

    newCost = newCost.replace(/\D/g, '');

    const validatedCost = newCostValidation(parseInt(newCost, 10) / 100);

    const integerPart = Math.floor(validatedCost).toString();
    const decimalPart = (validatedCost % 1).toFixed(2).split('.')[1];

    newCost = `${integerPart},${decimalPart}`;

    setUserCost(newCost);
  };

  const handleGetCNPJ = async (cnpj) => {
    if (cnpj !== "") {
      setIsLoadingCNPJ(true)
      try {
        const response = await fetchCNPJ(cnpj)
        if (requestSuccessful(response?.status)) {
        }
      } catch (error) {
      } finally {
        setIsLoadingCNPJ(false)
      }
    } else {
      setErrorMessage(["Preencha o campo de CNPJ antes da busca"])
    }
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

  const closeModal = () => {
    setIsModalOpen(false)
  }

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

  const handleChangeState = (value) => {
    setStateValue(stateOptions[value])
    const newStateId = value
    const newStateUf = stateOptions[value].sigla
    storeAddress.updateAddress({ stateId: newStateId, state: newStateUf })
  }

  const handleClickFiles = (fileType) => {
    companyRefs[fileType].current.click();
  }

  const handleChangeFiles = (event, fileType) => {
    console.log(event.target.files)
    const fileUploaded = event.target.files[0];
    if (fileType === 'socialContract') {
      setSocialContractFile(fileUploaded);
    } else if (fileType === 'energyExtract') {
      setEnergyExtractFile(fileUploaded);
    }
  };

  const handleDeleteFiles = (event, fileType) => {
    if (fileType === 'socialContract') {
      setSocialContractFile(null);
    } else if (fileType === 'energyExtract') {
      setEnergyExtractFile(null);
    }
  };

  const handleNationalityChange = (value) => {
    setIsForeigner(value === "estrangeira");
  };

  const schemaValidation = async (isCompany, data) => {
    try {
      const validatedData = isCompany
        ? await companySchema.validate(data, { abortEarly: false })
        : await userSchema.validate(data, { abortEarly: false });

      return await signUp(validatedData);
    } catch (error) {
      return error.errors;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const validatedCost = costValidation(userRefs.cost.current.value)

    var submitData = {
      uuid: uuid,
      nome_completo: sanitizeAndCapitalizeWords(userRefs.name.current.value),
      email: userRefs.email.current.value,
      rg: userRefs.rg.current.value?.replace(/[-_]/g, ""),
      cpf: userRefs.cpf.current.value,
      data_nascimento: userRefs.birthDate.current.value,
      telefone: userRefs.phone.current.value,
      cep: addressRefs.addressCep.current.value,
      endereco: addressRefs.address.current.value,
      numero: parseFloat(addressRefs.addressNumber.current.value?.replace(/[^0-9.]/g, "")),
      bairro: addressRefs.neighborhood.current.value,
      complemento: addressRefs.complement.current.value,
      estado_id: storeAddress.address.stateId || stateValue.cod_estados,
      cidade_id: storeAddress.address.cityId || await findCityIdByName(addressRefs.city.current.value, stateValue.cod_estados),
      valor: validatedCost,
      nacionalidade: userRefs.nationality.current.value,
      profissao: userRefs.profession.current.value,
      estado_civil: userRefs.maritalStatus.current.value,
      numero_instalacao: addressRefs.installationNumber.current.value
    }
    if (isCompany) {
      submitData["razao_social"] = companyRefs.razao_social.current.value
      submitData["cnpj"] = companyRefs.cnpj.current.value
    }

    const response = await schemaValidation(isCompany, submitData)
    if (requestSuccessful(response?.status) || hasToSignContract(response?.data?.message)) {

      store.updateUser({
        birthDate: submitData.data_nascimento,
        rg: submitData.rg,
        cpf: submitData.cpf,
        maritalStatus: submitData.estado_civil,
        profession: submitData.profissao,
        nationality: submitData.nacionalidade,
      });

      if (isCompany) {
        store.updateUser({
          companyName: submitData.razao_social,
        });
      }

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

      setNotifications(["Cadastro realizado com sucesso!"])
      router.push(`/signup/contract-signature/?uuid=${uuid}`)

    } else await handleRequestsErrors(response, setNotifications, setErrorMessage, router)

    setIsLoading(false)
  }

  useEffect(() => {
    setStateValue(stateOptions[stateId] || stateOptions[(statesAcronymOptions[state])] || null)
  }, [store, storeAddress])

  useEffect(() => {
    if (uuid !== search.get("uuid")) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }, []);

  return (
    <>
      <Container className='signupFormContainer'>

        <SignupFormContentContainer className='signupFormContent'>

          <Form id='signupForm' acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
            {isCompany && (
              <FormRow>
                <FormInput className="inputForm" defaultValue={company.razao_social || companyName || ''} inputRef={companyRefs.razao_social} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }} required />
                <InputMask mask="99.999.999/9999-99" defaultValue={company.cnpj || cnpj || ''}>
                  {() => <FormInput className="inputForm" defaultValue={company.cnpj || cnpj || ''} inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" required
                    InputProps={{
                      endAdornment: !isLoadingCNPJ ? <SearchIcon className="searchIcon"
                        onClick={() => handleGetCNPJ(companyRefs.cnpj.current.value)} /> :
                        <Box>
                          <CircularProgress className='formLoading' size={"25px"} />
                        </Box>,
                    }}
                    InputLabelProps={{ style: { color: '#FF7133' } }}
                  />}
                </InputMask>
              </FormRow>)}
            <FormRow>
              <FormInput
                className='inputForm'
                inputRef={userRefs.name}
                label={`Nome Completo ${isCompany ? 'do Responsável' : ''} (Titular da Conta de Luz)`}
                placeholder={`Nome Completo ${isCompany ? 'do Responsável' : ''} (Titular da Conta de Luz)`}
                defaultValue={name || ''}
                variant="outlined"
                type="text"
                InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }}
                required
              />
              <FormInput
                className='inputForm'
                inputRef={userRefs.email}
                label={`Email ${isCompany ? 'do Responsável' : ''}`}
                placeholder={`Email ${isCompany ? 'do Responsável' : ''}`}
                defaultValue={email || ''}
                variant="outlined"
                InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }}
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
                    InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }}
                    required
                  />
                )}
              </InputMask>
              {isForeigner ?
                (<InputMask mask="*******-*" required defaultValue={""}>
                  {() => <FormInput inputRef={userRefs.rg} className="inputForm" label="RNE" variant="outlined" placeholder="RNE" type="text" InputLabelProps={{ shrink: false }} required />}
                </InputMask>)
                :
                (<InputMask mask="********-*" required defaultValue={""}>
                  {() => <FormInput
                    inputRef={userRefs.rg}
                    className="inputForm"
                    label="RG"
                    variant="outlined"
                    placeholder="RG"
                    type="text"
                    required
                    inputProps={{ inputMode: 'numeric' }}
                    InputLabelProps={{ shrink: false },
                      { style: { color: '#FF7133' } }}
                  />}
                </InputMask>)}
              <InputMask mask="999.999.999-99" required defaultValue={""}>
                {() => <FormInput inputRef={userRefs.cpf}
                  className="inputForm"
                  label="CPF"
                  variant="outlined"
                  placeholder="CPF"
                  inputProps={{ inputMode: 'numeric' }}
                  type="text"
                  required
                  InputLabelProps={{ shrink: false },
                    { style: { color: '#FF7133' } }} />}
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
                  InputLabelProps={{ shrink: birthDate !== "" },
                    { style: { color: '#FF7133' } }
                  }
                />}
              </InputMask>
              <FormInput
                id="maritalStatus"
                select
                defaultValue={store.user.maritalStatus ? store.user.maritalStatus : ""}
                label="Estado Civil"
                className="inputForm"
                inputProps={{ inputMode: 'numeric' }}
                InputLabelProps={{
                  component: 'span',
                  style: { color: '#FF7133' }
                }}
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
                onChange={(event) => handleNationalityChange(event.target.value)}
                className="inputForm"
                label="Nacionalidade"
                variant="outlined"
                placeholder="Nacionalidade"
                type="text"
                InputLabelProps={{
                  component: 'span',
                  style: { color: '#FF7133' }
                }}
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
                  style: { color: '#FF7133' }
                }}
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
                value={formatBrazillianCurrency(userCost) || formatBrazillianCurrency(cost) || ""}
                onChange={(event) => handleChangeUserCost(event)}
                label="Custo Mensal em R$"
                variant="outlined"
                placeholder="Custo Mensal em R$"
                type="text"
                inputProps={{ inputMode: 'numeric' }}
                InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }}
                required />

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
              {showDisclaimer && <InstallationNumberDisclaimer onClick={() => setIsModalOpen(true)}>
                <InfoIcon className='infoIcon' />
                <Typography className='installationNumberDisclaimer'><span className='underlined'>Encontre este número</span> no canto superior direito de sua fatura atual.</Typography>
              </InstallationNumberDisclaimer>}
            </FormLastRow>

            {isCompany ? (
              <FileUploadContainer>
                <FileUploadItem>
                  <Button
                    className='documentUpload'
                    startIcon={<FileUploadIcon />}
                    onClick={() => handleClickFiles('socialContract')}>Enviar contrato social</Button>
                  <input
                    type="file"
                    onChange={(event) => handleChangeFiles(event, 'socialContract')}
                    ref={companyRefs.socialContract}
                    style={{ display: 'none' }} />
                  {socialContractFile && (
                    <>
                      <p>{socialContractFile.name}</p>
                      <button
                        style={fileInputStyles}
                        onClick={(event) => handleDeleteFiles(event, 'socialContract')}>x</button>
                    </>
                  )}
                </FileUploadItem>

                <FileUploadItem>
                  <Button
                    className='documentUpload'
                    startIcon={<FileUploadIcon />}
                    onClick={() => handleClickFiles('energyExtract')}>Enviar fatura de energia</Button>
                  <input
                    type="file"
                    onChange={(event) => handleChangeFiles(event, 'energyExtract')}
                    ref={companyRefs.energyExtract}
                    style={{ display: 'none' }} />
                  {energyExtractFile && (
                    <>
                      <p>{energyExtractFile.name}</p>
                      <button
                        style={fileInputStyles}
                        onClick={(event) => handleDeleteFiles(event, 'energyExtract')}>x</button>
                    </>
                  )}
                </FileUploadItem>
              </FileUploadContainer>
            ) : null}
          </Form>

          <FormDivider variant="middle" />

          <FormFooter>
            <FormButtonContainer>
              <Typography className='requiredFields'>* Campos obrigatórios</Typography>
              {isLoading ?
                <Box >
                  <CircularProgress className='submitLoading' />
                </Box>
                : <FormSubmitButton
                  type='submit'
                  form='signupForm'
                  endIcon={<ArrowForwardIcon className='icon' />}><span>Continuar</span></FormSubmitButton>}
            </FormButtonContainer>
          </FormFooter>

        </SignupFormContentContainer>
        {isModalOpen && <InstallationNumberModal isModalOpen={isModalOpen} closeModal={closeModal} distribuitor={distributor ? distributor.toLowerCase() : ""} />}

      </Container >

      <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />

    </>
  )
}