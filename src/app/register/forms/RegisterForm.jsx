import FormButton from "@/app/pages/components/utils/buttons/FormButton";
import { TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef } from "react";
import InputMask from "react-input-mask";
import RegisterFormProgress from "./RegisterFormProgress";
import RegisterFormTitle from "./RegisterFormTitle";
import { FormContainer, FormContent, FormHeader } from "./styles";

export default function RegisterForm(props) {

    const { name, email, phone, cep, companyName } = props.userData

    const isCompany = props.isCompany

    const userRefs = {
        name: useRef(null),
        rg: useRef(null),
        cpf: useRef(null),
        birthday: useRef(null),
        nationality: useRef(null),
        maritalStatus: useRef(null),
        profession: useRef(null),
        email: useRef(null),
        phone: useRef(null),

    };



    const companyRefs = {
        companyName: useRef(null),
        corporateReason: useRef(null),
        cnpj: useRef(null),
        stateRegistration: useRef(null),
        responsibleName: useRef(null),
        companyEmail: useRef(null),
        companyPhone: useRef(null),
    }

    const addressRefs = {
        address: useRef(null),
        addressNumber: useRef(null),
        addressCep: useRef(null),
        addressComplement: useRef(null),
        neighborhood: useRef(null),
        state: useRef(null),
        city: useRef(null),
        installationNumber: useRef(null)
    }



    const handleSubmit = (event) => {
        event.preventDefault()

        var data = {}

        if (isCompany) {
            data = {
                company: {
                    companyName: companyRefs.companyName.current.value,
                    corporateReason: companyRefs.corporateReason.current.value,
                    cnpj: companyRefs.cnpj.current.value,
                    stateRegistration: companyRefs.stateRegistration.current.value,
                    responsibleName: companyRefs.responsibleName.current.value,
                    companyEmail: companyRefs.companyEmail.current.value,
                    companyPhone: companyRefs.companyPhone.current.value,
                },
                address: {
                    address: addressRefs.address.current.value,
                    addressNumber: addressRefs.addressNumber.current.value,
                    addressCep: addressRefs.addressCep.current.value,
                    addressComplement: addressRefs.addressComplement.current.value,
                    neighborhood: addressRefs.neighborhood.current.value,
                    state: addressRefs.state.current.value,
                    city: addressRefs.city.current.value,
                    installationNumber: addressRefs.installationNumber.current.value
                },

            }
        } else {
            data = {
                user: {
                    name: userRefs.name.current.value,
                    rg: userRefs.rg.current.value,
                    cpf: userRefs.cpf.current.value,
                    birthday: userRefs.birthday.current.value,
                    nationality: userRefs.nationality.current.value,
                    maritalStatus: userRefs.maritalStatus.current.value,
                    profession: userRefs.profession.current.value,
                    email: userRefs.email.current.value,
                    phone: userRefs.phone.current.value,
                },
                address: {
                    address: addressRefs.address.current.value,
                    addressNumber: addressRefs.addressNumber.current.value,
                    addressCep: addressRefs.addressCep.current.value,
                    addressComplement: addressRefs.addressComplement.current.value,
                    neighborhood: addressRefs.neighborhood.current.value,
                    state: addressRefs.state.current.value,
                    city: addressRefs.city.current.value,
                    installationNumber: addressRefs.installationNumber.current.value
                },
            }

        }

        console.log(data)

    }



    const statusIsSuccessful = (status) => {
        return status === 200
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://viacep.com.br/ws/${cep}/json/`
                await axios.get(url).then(response => {
                    if (statusIsSuccessful(response.status)) {
                        addressRefs.address.current.value = response.data.logradouro
                        addressRefs.neighborhood.current.value = response.data.bairro
                        addressRefs.addressCep.current.value = response.data.cep
                        addressRefs.city.current.value = response.data.localidade
                        addressRefs.state.current.value = response.data.uf

                    }
                })

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);



    const formatPhoneNumber = (phoneNumber) => {
        const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        } else {
            return phoneNumber
        }
    };

    const formattedPhone = formatPhoneNumber(phone);

    return (
        <form
            acceptCharset="UTF-8"
            method="POST"
            onSubmit={handleSubmit}>

            <FormContainer>
                <FormHeader>
                    <RegisterFormTitle />
                    <RegisterFormProgress />
                </FormHeader>
                <FormContent>
                    {isCompany ? (
                        <>
                            <TextField className="formInput" inputRef={companyRefs.companyName} defaultValue={companyName || ''} label="Nome da Empresa" variant="outlined" placeholder="Nome da Empresa" type="text" InputLabelProps={{ shrink: true }} />
                            <TextField className="formInput" inputRef={companyRefs.corporateReason} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" />
                            <InputMask mask="99.999.999/9999-99">
                                {() => <TextField className="formInput" inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" />}
                            </InputMask>
                            <InputMask>
                                {() => <TextField className="formInput" inputRef={companyRefs.stateRegistration} label="Inscrição Estadual" variant="outlined" placeholder="Inscrição Estadual" type="text" />}
                            </InputMask>
                            <TextField className="formInput" inputRef={companyRefs.responsibleName} defaultValue={name || ''} label="Nome Completo do Responsável" variant="outlined" placeholder="Nome Completo do Responsável" type="text" InputLabelProps={{ shrink: true }} />
                            <TextField sx={{ width: '300px' }} inputRef={companyRefs.companyEmail} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" InputLabelProps={{ shrink: true }} />
                            <InputMask mask="(99) 99999-9999" value={formattedPhone || ''}>
                                {() => <TextField sx={{ width: '300px' }} inputRef={companyRefs.companyPhone} className="formInput" label="Telefone do Responsável" variant="outlined" placeholder="Telefone do Responsável" type="text" InputLabelProps={{ shrink: true }} />}
                            </InputMask>
                        </>
                    ) : (
                        <>
                            <TextField sx={{ width: '500px' }} inputRef={userRefs.name} defaultValue={name || ''} className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" />
                            <TextField sx={{ width: '500px' }} inputRef={userRefs.email} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" />

                            <InputMask mask="(99) 99999-9999" value={formattedPhone || ''}>
                                {() => <TextField sx={{ width: '200px' }}
                                    inputRef={userRefs.phone} className="formInput" label="Celular" placeholder="Celular" variant="outlined" type="text" />}
                            </InputMask>
                            <InputMask mask="99999999-9">
                                {() => <TextField sx={{ width: '200px' }} inputRef={userRefs.rg} className="formInput" label="RG" variant="outlined" placeholder="RG" type="text" />}
                            </InputMask>
                            <InputMask mask="999.999.999-99">
                                {() => <TextField sx={{ width: '200px' }} inputRef={userRefs.cpf} className="formInput" label="CPF" variant="outlined" placeholder="CPF" type="text" />}
                            </InputMask>
                            <InputMask mask="99/99/9999">
                                {() => <TextField sx={{ width: '300px' }} inputRef={userRefs.birthday} className="formInput" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" />}
                            </InputMask>
                            <TextField sx={{ width: '300px' }} inputRef={userRefs.maritalStatus} className="formInput" label="Estado Civil" variant="outlined" placeholder="Estado Civil" type="text" />
                            <TextField sx={{ width: '300px' }} inputRef={userRefs.nationality} className="formInput" label="Nacionalidade" variant="outlined" placeholder="Nacionalidade" type="text" />
                            <TextField sx={{ width: '300px' }} inputRef={userRefs.profession} className="formInput" label="Profissão" variant="outlined" placeholder="Profissão" type="text" />
                        </>

                    )}
                    <TextField className="formInput" inputRef={addressRefs.address} label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField className="formInput" inputRef={addressRefs.addressNumber} label="Nº" variant="outlined" placeholder="Nº" type="text" />
                    <InputMask mask="99999-999">
                        {() => <TextField className="formInput" inputRef={addressRefs.addressCep} defaultValue={cep || ''} label="CEP" variant="outlined" placeholder="CEP" type="text" InputLabelProps={{ shrink: true }} />}
                    </InputMask>

                    <TextField className="formInput" inputRef={addressRefs.addressComplement} label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                    <TextField className="formInput" inputRef={addressRefs.neighborhood} label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField className="formInput" inputRef={addressRefs.state} label="Estado" variant="outlined" placeholder="Estado" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField className="formInput" inputRef={addressRefs.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField sx={{
                        width: '60%', margin: '1rem', borderColor: '#0075FF',
                        '& label': {
                            color: '#0075FF',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#0075FF',
                            },
                            '&:hover fieldset': {
                                borderColor: '#0075FF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#0075FF',
                            },
                        },
                    }} inputRef={addressRefs.installationNumber} label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text" />
                    <Typography variant="body2" sx={{ color: 'blue', maxWidth: '20%', margin: '1rem' }}>Não encontrou o número? <a target="_blank" style={{ textDecoration: 'underline', cursor: 'pointer' }} href="https://www.google.com">Clique aqui para saber onde encontrá-lo.</a></Typography>
                    <FormButton className="formInput" variant="outlined" type="submit" text="Continuar" />
                </FormContent >
            </FormContainer >
        </form>
    );
}