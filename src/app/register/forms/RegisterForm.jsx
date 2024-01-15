import FormButton from "@/app/pages/components/utils/buttons/FormButton";
import { FormContainer, FormContent } from "./styles";
import { TextField, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

export default function RegisterForm(props) {

    const isCompany = props.isCompany

    return (
        <FormContainer>
            <div>
                <Typography variant="body1" component="h1">Vamos começar a economizar com a Leve?</Typography>
                <Typography variant="body1" component="h1">É só completar o cadastro</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="body1" component="h2" sx={{ color: 'orange' }}>Progresso: </Typography>
                <LinearProgress variant="buffer" value={30} sx={{
                    height: '.75rem',
                    width: '40vw',
                    borderRadius: 5,
                    '& .MuiLinearProgress-colorPrimary': {
                        backgroundColor: 'lightblue'
                    },
                    '& .MuiLinearProgress-barColorPrimary': {
                        backgroundColor: 'yellow'
                    }
                }} />
            </div>
            <FormContent>
                {isCompany ? (
                    <>
                        <TextField className="formInput" label="Nome da Empresa" variant="outlined" placeholder="Nome da Empresa" type="text" />
                        <TextField className="formInput" label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" />
                        <TextField className="formInput" label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" />
                        <TextField className="formInput" label="Inscrição Estadual" variant="outlined" placeholder="Inscrição Estadual" type="text" />
                        <TextField className="formInput" label="Nome Completo do Responsável" variant="outlined" placeholder="Nome Completo do Responsável" type="text" />
                        <TextField className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" />
                        <TextField className="formInput" label="Telefone do Responsável" variant="outlined" placeholder="Telefone do Responsável" type="text" />
                    </>
                ) : (
                    <>
                        <TextField className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" />
                        <TextField className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" />
                        <TextField className="formInput" label="Celular" variant="outlined" placeholder="Celular" type="text" />
                        <TextField className="formInput" label="RG" variant="outlined" placeholder="RG" type="text" />
                        <TextField className="formInput" label="CPF" variant="outlined" placeholder="CPF" type="text" />
                        <TextField className="formInput" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" />
                        <TextField className="formInput" label="Estado Civil" variant="outlined" placeholder="Estado Civil" type="text" />
                        <TextField className="formInput" label="Nacionalidade" variant="outlined" placeholder="Nacionalidade" type="text" />
                        <TextField className="formInput" label="Profissão" variant="outlined" placeholder="Profissão" type="text" />
                    </>

                )}
                <TextField className="formInput" label="Endereço" variant="outlined" placeholder="Endereço" type="text" />
                <TextField className="formInput" label="Nº" variant="outlined" placeholder="Nº" type="text" />
                <TextField className="formInput" label="CEP" variant="outlined" placeholder="CEP" type="text" />
                <TextField className="formInput" label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                <TextField className="formInput" label="Bairro" variant="outlined" placeholder="Bairro" type="text" />
                <TextField className="formInput" label="Estado" variant="outlined" placeholder="Estado" type="text" />
                <TextField className="formInput" label="Cidade" variant="outlined" placeholder="Cidade" type="text" />
                <TextField className="formInput" label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text" />
                <Typography variant="body2" sx={{ color: 'blue' }}>Não encontrou o número? Clique aqui para saber onde encontrá-lo.</Typography>
                <FormButton className="formInput" variant="outlined" type="submit" text="Continuar" />
            </FormContent >
        </FormContainer>
    );
}