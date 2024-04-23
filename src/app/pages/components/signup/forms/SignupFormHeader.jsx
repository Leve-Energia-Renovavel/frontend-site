import { Typography } from '@mui/material'
import { HelpIcon, SignupFormHeaderContainer, SignupFormHeaderHelpContainer, SignupFormHeaderHelpContentContainer } from './styles'

export default function SignupFormHeader() {
    return (
        <SignupFormHeaderContainer>
            <div>
                <Typography variant='h1'>1. Cadastro</Typography>
            </div>
            <SignupFormHeaderHelpContainer>
                <Typography variant='subtitle1'>1 de 4</Typography>
                <SignupFormHeaderHelpContentContainer>
                    <Typography variant='subtitle1'>Ajuda</Typography>
                    <HelpIcon className='helpIcon' />
                </SignupFormHeaderHelpContentContainer>
            </SignupFormHeaderHelpContainer>
        </SignupFormHeaderContainer>
    )
}
