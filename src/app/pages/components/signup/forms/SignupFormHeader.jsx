import { Typography } from '@mui/material'
import { HelpIcon, SignupFormHeaderContainer, SignupFormHeaderHelpContainer, SignupFormHeaderHelpContentContainer } from './styles'

export default function SignupFormHeader(props) {

    const title = {
        1: "Cadastro",
        2: "Finalize a contratação",
        3: "Insira o token",
        4: "Pronto!",
    }
    return (
        <SignupFormHeaderContainer>
            <div>
                <Typography variant='h1'>{props.step}. {title[props.step]}</Typography>
            </div>
            <SignupFormHeaderHelpContainer>
                <Typography variant='subtitle1'>{props.step} de 4</Typography>
                <SignupFormHeaderHelpContentContainer>
                    <Typography variant='subtitle1'>Ajuda</Typography>
                    <HelpIcon className='helpIcon' />
                </SignupFormHeaderHelpContentContainer>
            </SignupFormHeaderHelpContainer>
        </SignupFormHeaderContainer>
    )
}
