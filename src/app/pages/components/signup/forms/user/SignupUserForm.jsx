/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreUser } from '@/app/hooks/stores/useStore';
import useGetCNPJ from '@/app/hooks/utils/useGetCNPJ';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { maritalStatusOptions, nationalityOptions, professionOptions } from '@/app/utils/form-options/formOptions';
import { formatBrazillianCurrency } from '@/app/utils/formatters/costFormatter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CircularProgress, MenuItem } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import InputMask from "react-input-mask";
import { BackButton, FileUploadContainer, FileUploadItem, Form, FormContent, FormFooterContainer, FormInput, FormRow, FormSubmitButton } from './styles';

import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import { COOKIES_FOR, PATH_TO, REGISTER_FORM } from '@/app/pages/enums/globalEnums';
import { sanitizeAndCapitalizeWords } from '@/app/utils/formatters/textFormatter';
import { birthDateInputFilled, costValidation, cpfInputFilled, emailInputFilled, newCostValidation, normalTextInputFilled, phoneInputFilled, regularTextInputFilled, rgInputFilled } from '@/app/utils/helper/register/registerUserHelper';
import { userSchema } from './schema';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';

export default function SignupUserForm() {

  const search = useSearchParams()
  const router = useRouter()
  const store = useStoreUser()
  const storeMessage = useStoreMessages()

  const setErrors = storeMessage.setErrors
  const setNotifications = storeMessage.setNotifications

  const uuid = store?.user?.uuid || Cookies.get(COOKIES_FOR.UUID) || search.get("uuid")
  // const user = JSON.parse(localStorage.getItem('user'))

  const { name, email, phone, cost, rg, cpf, distributor, nationality, maritalStatus, profession, companyName, cnpj, birthDate, isCompany } = store?.user || {}

  const [isForeigner, setIsForeigner] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCNPJ, setIsLoadingCNPJ] = useState(false);

  const fetchCNPJ = useGetCNPJ();

  const handleChangeUserCost = (event) => {
    let newCost = event.target.value;

    newCost = newCost.replace(/\D/g, '');

    const validatedCost = newCostValidation(parseInt(newCost, 10) / 100);

    const integerPart = Math.floor(validatedCost).toString();
    const decimalPart = (validatedCost % 1).toFixed(2).split('.')[1];

    newCost = `${integerPart},${decimalPart}`;

    setFormState((prevState) => ({ ...prevState, cost: newCost }));
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
      setErrors(["Preencha o campo de CNPJ antes da busca"])
    }
  }

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
    razao_social: companyName || "",
    cnpj: cnpj || "",
    socialContractFile: null,
    energyExtractFile: null,
  });

  const schemaValidation = async (data, router) => {
    try {
      const validatedData = await userSchema.validate(data, { abortEarly: false })
      setNotifications(["Informações salvas com sucesso!"])
      router.push(`${PATH_TO.REGISTER_ADDRESS}`)

      return validatedData;
    } catch (error) {
      setErrors(error.errors)
      return error.errors;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    store.updateUser({ [name]: value });
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const validatedCost = costValidation(formState.cost)

    const submitData = {
      uuid: uuid,
      nome_completo: sanitizeAndCapitalizeWords(formState.name),
      email: formState.email,
      rg: formState.rg.replace(/[-_]/g, ""),
      cpf: formState.cpf,
      data_nascimento: formState.birthDate,
      telefone: formatPhoneNumber(formState.phone),
      valor: validatedCost,
      nacionalidade: formState.nationality,
      profissao: formState.profession,
      estado_civil: formState.maritalStatus,
      ...(isCompany && {
        razao_social: formState.razao_social,
        cnpj: formState.cnpj,
      }),
    };
    if (isCompany) {
      submitData["razao_social"] = companyRefs.razao_social.current.value
      submitData["cnpj"] = companyRefs.cnpj.current.value
    }

    const response = await schemaValidation(submitData, router);
    console.log("userSchema validation ===>>", response)

    store.updateUser({ ...formState });


    setIsLoading(false)
  }

  // const handleSubmit = async (event) => {

  //   const validatedCost = costValidation(userRefs.cost.current.value)

  //   var submitData = {
  //     uuid: uuid,
  //     nome_completo: sanitizeAndCapitalizeWords(userRefs.name.current.value),
  //     email: userRefs.email.current.value,
  //     rg: userRefs.rg.current.value?.replace(/[-_]/g, ""),
  //     cpf: userRefs.cpf.current.value,
  //     data_nascimento: userRefs.birthDate.current.value,
  //     telefone: userRefs.phone.current.value,
  //     cep: addressRefs.addressCep.current.value,
  //     endereco: addressRefs.address.current.value,
  //     numero: parseFloat(addressRefs.addressNumber.current.value?.replace(/[^0-9.]/g, "")),
  //     bairro: addressRefs.neighborhood.current.value,
  //     complemento: addressRefs.complement.current.value,
  //     estado_id: storeAddress.address.stateId || stateValue.cod_estados,
  //     cidade_id: storeAddress.address.cityId || await findCityIdByName(addressRefs.city.current.value, stateValue.cod_estados),
  //     valor: validatedCost,
  //     nacionalidade: userRefs.nationality.current.value,
  //     profissao: userRefs.profession.current.value,
  //     estado_civil: userRefs.maritalStatus.current.value,
  //     numero_instalacao: addressRefs.installationNumber.current.value
  //   }
  //   if (isCompany) {
  //     submitData["razao_social"] = companyRefs.razao_social.current.value
  //     submitData["cnpj"] = companyRefs.cnpj.current.value
  //   }

  //   const response = await schemaValidation(isCompany, submitData)
  //   if (requestSuccessful(response?.status) || hasToSignContract(response?.data?.message)) {

  //     store.updateUser({
  //       birthDate: submitData.data_nascimento,
  //       rg: submitData.rg,
  //       cpf: submitData.cpf,
  //       maritalStatus: submitData.estado_civil,
  //       profession: submitData.profissao,
  //       nationality: submitData.nacionalidade,
  //     });

  //     if (isCompany) {
  //       store.updateUser({
  //         companyName: submitData.razao_social,
  //       });
  //     }

  //     router.push(`/signup/contract-signature/?uuid=${uuid}`)

  //   } else await handleRequestsErrors(response, setNotifications, setErrorMessage, router)
  // }


  const required = false
  const greenLeve = "#005940"
  const orangeLeve = "#FF7133"

  return (
    <>
      <Form id={REGISTER_FORM.USER_ID} acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
        {isCompany && (
          <FormRow>
            <FormInput
              name='razao_social'
              onChange={handleInputChange}
              className="inputForm"
              label="Razão Social"
              variant="outlined"
              placeholder="Razão Social"
              filledCorrectly={normalTextInputFilled(formState?.razao_social)}
              value={formState?.razao_social}
              type="text"
              InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }}
              required
            />
            <InputMask mask="99.999.999/9999-99" onChange={handleInputChange}>
              {() => (
                <FormInput
                  name='cnpj'
                  className="inputForm"
                  label="CNPJ"
                  variant="outlined"
                  placeholder="CNPJ"
                  type="text"
                  required
                  InputProps={{
                    endAdornment: !isLoadingCNPJ ? (
                      <SearchIcon className="searchIcon" onClick={handleGetCNPJ} />
                    ) : (
                      <Box>
                        <CircularProgress className="formLoading" size={"25px"} />
                      </Box>
                    ),
                  }}
                  InputLabelProps={{ style: { color: '#FF7133' } }}
                />
              )}
            </InputMask>
          </FormRow>
        )}
        <FormRow>
          <FormInput
            className="inputForm"
            name='name'
            onChange={handleInputChange}
            filledCorrectly={normalTextInputFilled(formState?.name)}
            label={`Nome Completo ${isCompany ? 'do Responsável' : ''}`}
            placeholder={`Nome Completo ${isCompany ? 'do Responsável' : ''}`}
            variant="outlined"
            value={formState?.name}
            type="text"
            InputLabelProps={{ shrink: true, style: { color: normalTextInputFilled(formState?.name) ? greenLeve : orangeLeve } }}
            required={required}
          />
          <FormInput
            name='email'
            onChange={handleInputChange}
            className="inputForm"
            filledCorrectly={emailInputFilled(formState?.email)}
            label={`Email ${isCompany ? 'do Responsável' : ''}`}
            placeholder={`Email ${isCompany ? 'do Responsável' : ''}`}
            variant="outlined"
            value={formState?.email}
            type="text"
            required={required}
            InputLabelProps={{ shrink: formState?.email !== "", style: { color: emailInputFilled(formState?.email) ? greenLeve : orangeLeve } }} />
        </FormRow>
        <FormContent>
          <InputMask mask="(99) 99999-9999" value={formState?.phone} onChange={handleInputChange}>
            {() => (
              <FormInput
                name='phone'
                className="inputForm"
                filledCorrectly={phoneInputFilled(formState?.phone)}
                inputProps={{ inputMode: 'numeric' }}
                label={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                variant="outlined"
                placeholder={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                type="text"
                required={required}
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
                  filledCorrectly={rgInputFilled(formState?.rg)}
                  name='rg'
                  type="text"
                  inputProps={{ inputMode: 'numeric' }}
                  required={required}
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
                filledCorrectly={cpfInputFilled(formState?.cpf)}
                variant="outlined"
                placeholder="CPF"
                inputProps={{ inputMode: 'numeric' }}
                type="text"
                required={required}
                InputLabelProps={{ shrink: formState?.cpf !== "", style: { color: cpfInputFilled(formState?.cpf) ? greenLeve : orangeLeve } }} />
            )}
          </InputMask>
          <InputMask mask="99/99/9999" required value={formState?.birthDate} onChange={handleInputChange}>
            {() => (
              <FormInput
                name='birthDate'
                className="inputForm"
                filledCorrectly={birthDateInputFilled(formState?.birthDate)}
                label="Data de Nascimento"
                variant="outlined"
                placeholder="Data de Nascimento"
                type="text"
                inputProps={{ inputMode: 'numeric' }}
                required={required}
                InputLabelProps={{ shrink: formState?.birthDate !== "", style: { color: birthDateInputFilled(formState?.birthDate) ? greenLeve : orangeLeve } }} />
            )}
          </InputMask>
          <FormInput
            className="inputForm"
            label="Custo Mensal em R$"
            variant="outlined"
            value={formatBrazillianCurrency(formState?.cost)}
            placeholder="Custo Mensal em R$"
            type="text"
            name='cost'
            filledCorrectly={regularTextInputFilled(formState?.cost)}
            onChange={handleChangeUserCost}
            inputProps={{ inputMode: 'numeric' }}
            required={required}
            InputLabelProps={{ shrink: true, style: { color: regularTextInputFilled(formState?.cost) ? greenLeve : orangeLeve } }} />
          <FormInput
            id="maritalStatus"
            name='maritalStatus'
            onChange={handleInputChange}
            select
            filledCorrectly={regularTextInputFilled(formState?.maritalStatus)}
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
            filledCorrectly={regularTextInputFilled(formState?.nationality)}
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
            filledCorrectly={regularTextInputFilled(formState?.profession)}
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
        {isCompany && (
          <FileUploadContainer>
            <FileUploadItem>
              <Button
                className="documentUpload"
                startIcon={<FileUploadIcon />}
                onClick={() => handleClickFiles('socialContract')}
              >
                Enviar contrato social
              </Button>
              <input
                type="file"
                onChange={(event) => handleChangeFiles(event, 'socialContract')}
                style={{ display: 'none' }}
              />
            </FileUploadItem>
            <FileUploadItem>
              <Button
                className="documentUpload"
                startIcon={<FileUploadIcon />}
                onClick={() => handleClickFiles('energyExtract')}
              >
                Enviar fatura de energia
              </Button>
              <input
                type="file"
                onChange={(event) => handleChangeFiles(event, 'energyExtract')}
                style={{ display: 'none' }}
              />
            </FileUploadItem>
          </FileUploadContainer>
        )}
        <FormFooterContainer>
          {isLoading ? (
            <Box>
              <CircularProgress className="submitLoading" />
            </Box>
          ) : (
            <BackButton onClick={() => router.back()} startIcon={<ArrowBackIcon className="icon" />}>
              <span>Voltar</span>
            </BackButton>
          )}
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