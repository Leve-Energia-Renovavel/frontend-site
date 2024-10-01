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
        <SignupFormHeaderContainer className='signupFormHeaderContainer'>
            <div>
                <h2 className='formHeaderTitle'>{props.step}. {title[props.step]}</h2>
            </div>
            <SignupFormHeaderHelpContainer>
                <Typography variant='subtitle1' className='formHeaderSubtitle'>{props.step} de 4</Typography>
                <SignupFormHeaderHelpContentContainer>
                    <Typography variant='subtitle1'>Ajuda</Typography>
                    <HelpIcon className='helpIcon' />
                </SignupFormHeaderHelpContentContainer>
            </SignupFormHeaderHelpContainer>
        </SignupFormHeaderContainer>
    )
}
