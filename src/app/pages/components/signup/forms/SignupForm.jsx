"use client"

import { useStoreAddress, useStoreCompany, useStoreUser } from '@/app/hooks/useStore';
import useGetCEP from '@/app/hooks/utils/useGetCEP';
import useGetCNPJ from '@/app/hooks/utils/useGetCNPJ';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import SignupFormHeader from './SignupFormHeader';
import { FormTermsCheckbox as Checkbox, SignupFormContainer as Container, Form, FormButtonContainer, FormContent, FormDivider, FormFooter, FormInput, FormRow, FormSubmitButton, FormTermsContainer, FormTermsControl, FormTitleButton, FormTitleContainer, SignupFormContentContainer, SignupLinearProgress } from './styles';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import { stateOptions } from '@/app/utils/form-options/addressFormOptions';
import { statesAcronymOptions } from '@/app/utils/form-options/statesIdOptions';

export default function SignupForm() {

  const router = useRouter()
  const store = useStoreUser()
  const storeAddress = useStoreAddress()


  const uuid = store.user.uuid || Cookies.get('leveUUID')
  const user = JSON.parse(localStorage.getItem('user')) || store.user
  const address = JSON.parse(localStorage.getItem('address')) || storeAddress.address
  const company = useStoreCompany().company
  const isCompany = user?.user.isCompany


  const { name, email, phone, cost, distributor, cpf, rg, companyName, cnpj } = user?.user ?? (store?.user || {})
  const { street, neighborhood, city, state, stateId, cityId, cep, installationNumber } = address?.address ?? (storeAddress?.address || {})

  const stateValue = stateId ? stateId : stateOptions[(statesAcronymOptions[state])]

  const [isForeigner, setIsForeigner] = useState(false);

  const [errorMessage, setErrorMessage] = useState([]);
  const [successMessage, setSuccessMessage] = useState([])

  const fetchCEP = useGetCEP();
  const fetchCNPJ = useGetCNPJ();

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
    const newStateId = value
    const newStateUf = stateOptions[value].sigla
    storeAddress.updateAddress({stateId: newStateId, state: newStateUf})
  }
  const handleTests = () => {
    console.log("user ===>", user.user)
    console.log("address ===>", address.address)
    console.log("stateValue ===>", stateValue)
  }


  return (
    <>
      <Container>
        <FormTitleContainer>
          <Typography variant='h2'>Vamos começar a economizar com a Leve?</Typography>
          <FormTitleButton
            endIcon={<ArrowDownwardIcon />}>Continuar</FormTitleButton>
        </FormTitleContainer>
        <SignupFormContentContainer>

          <SignupFormHeader />
          <SignupLinearProgress variant="determinate" value={25} />
          <Typography className="fillFormBelow">Preencha o cadastro abaixo:</Typography>

          <Form acceptCharset="UTF-8" method="POST" onSubmit={console.log("submit")}>
            {isCompany && (
              <FormRow>
                <FormInput className="inputForm" defaultValue={company.razao_social || companyName || ''} inputRef={companyRefs.razao_social} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" InputLabelProps={{ shrink: true }} required />
                <InputMask mask="99.999.999/9999-99" defaultValue={company.cnpj || cnpj || ''}>
                  {() => <FormInput className="inputForm" defaultValue={company.cnpj || cnpj || ''} inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" required
                    InputProps={{
                      endAdornment: <SearchIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={() => fetchCNPJ(companyRefs.cnpj.current.value)} />,
                    }} />}
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
                InputLabelProps={{ shrink: true }}
                required
              />
              <FormInput
                className='inputForm'
                inputRef={userRefs.email}
                label={`Email ${isCompany ? 'do Responsável' : ''}`}
                placeholder={`Email ${isCompany ? 'do Responsável' : ''}`}
                defaultValue={email || ''}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
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
                    label={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                    variant="outlined"
                    placeholder={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                    type="text"
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                )}
              </InputMask>
              {isForeigner ?
                (<InputMask mask="*******-*" required defaultValue={rg || store.user.rg || ""}>
                  {() => <FormInput inputRef={userRefs.rg} className="inputForm" label="RNE" variant="outlined" placeholder="RNE" type="text" InputLabelProps={{ shrink: true }} required />}
                </InputMask>)
                :
                (<InputMask mask="********-*" required defaultValue={rg || store.user.rg || ""}>
                  {() => <FormInput
                    inputRef={userRefs.rg}
                    className="inputForm"
                    label="RG"
                    variant="outlined"
                    placeholder="RG"
                    type="text"
                    required
                    InputLabelProps={rg || store.user.rg ? { shrink: true } : {}}
                  />}
                </InputMask>)}
              <InputMask mask="999.999.999-99" required defaultValue={store.user.cpf || cpf || ""}>
                {() => <FormInput inputRef={userRefs.cpf} className="inputForm" label="CPF" variant="outlined" placeholder="CPF" type="text" required
                  InputLabelProps={cpf || store.user.cpf ? { shrink: true } : {}} />}
              </InputMask>

              <InputMask mask="99/99/9999" required defaultValue={store.user.birthDate ? store.user.birthDate : ""}>
                {() => <FormInput inputRef={userRefs.birthDate} className="inputForm" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" required
                  InputLabelProps={store.user.birthDate ? { shrink: true } : {}} />}
              </InputMask>
              <FormInput
                id="maritalStatus"
                select
                defaultValue={store.user.maritalStatus ? store.user.maritalStatus : ""}
                label="Estado Civil"
                className="inputForm"
                InputLabelProps={{
                  component: 'span',
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
                className="inputForm"
                label="Nacionalidade"
                variant="outlined"
                placeholder="Nacionalidade"
                type="text"
                InputLabelProps={{
                  component: 'span',
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
                value={cost || ""}
                onChange={(event) => handleChangeUserCost(event)}
                label="Custo Mensal em R$"
                variant="outlined"
                placeholder="Custo Mensal em R$"
                type="text"
                InputLabelProps={{ shrink: true }}
                required />

              <InputMask mask="99999-999" value={cep || ""}
                onChange={(e) => storeAddress.updateAddress({ cep: e.target.value })}
                onBlur={(e) => fetchCEP(addressRefs.addressCep.current.value)}>
                {() => <FormInput
                  className="inputForm"
                  inputRef={addressRefs.addressCep}
                  label="CEP"
                  variant="outlined"
                  placeholder="CEP"
                  type="text"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: <SearchIcon sx={{ cursor: 'pointer' }} />,
                  }}
                  required />}
              </InputMask>

              <FormInput className="inputForm" defaultValue={street || ''} inputRef={addressRefs.address} label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} required />
              <InputMask mask="99999">
                {() => <FormInput className="inputForm" inputRef={addressRefs.addressNumber} label="Nº" variant="outlined" placeholder="Nº" type="text" required />}
              </InputMask>

              <FormInput className="inputForm"
                inputRef={addressRefs.complement}
                label="Complemento" variant="outlined" placeholder="Complemento"
                type="text"
                InputLabelProps={addressRefs?.complement?.current?.value ? { shrink: true } : {}} />

              <FormInput className="inputForm"
                defaultValue={neighborhood || ''}
                inputRef={addressRefs.neighborhood}
                label="Bairro" variant="outlined" placeholder="Bairro"
                type="text"
                InputLabelProps={{ shrink: true }} required />

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


              <FormInput className="inputForm" defaultValue={city?.toUpperCase() || ''} inputRef={addressRefs.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text"
                InputLabelProps={{ shrink: true }} required />
            </FormContent>

            <button onClick={() => handleTests()}>TESTES</button>
          </Form>



          <FormDivider variant="middle" />

          <FormFooter>
            <FormTermsContainer>
              <FormTermsControl required control={<Checkbox />} label="Declaro que não possuo sistema de geração própria em minha residência/comércio" />
              <FormTermsControl required control={<Checkbox />} label="Declaro que não estou contratando nenhum serviço similar ao da Leve Energia Renovável" />
              <FormTermsControl required control={<Checkbox />} label="Declaro que não sou participante de nenhum programa governamental de subsídios na tarifa de energia" />
            </FormTermsContainer>

            <FormButtonContainer>
              <Typography className='requiredFields'>* Campos obrigatórios</Typography>
              <FormSubmitButton
                endIcon={<ArrowForwardIcon />}>Continuar</FormSubmitButton>
            </FormButtonContainer>
          </FormFooter>

        </SignupFormContentContainer>
      </Container >
    </>
  )
}