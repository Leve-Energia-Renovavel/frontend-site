import { HelpIcon, SignupFormHeaderContainer, SignupFormHeaderHelpContainer, SignupFormHeaderHelpContentContainer } from './styles'

export default function SignupFormHeader(props) {

    const title = {
        1: "Cadastro",
        2: "Contratação",
        3: "Confirme o token",
    }
    return (
        <SignupFormHeaderContainer className='signupFormHeaderContainer'>
            <div>
                <h2 className='formHeaderTitle'>{props.step}. {title[props.step]}</h2>
            </div>
            <SignupFormHeaderHelpContainer>
                <p className='formHeaderSubtitle'>{props.step} de 3</p>
                <SignupFormHeaderHelpContentContainer>
                    <p>Ajuda</p>
                    <HelpIcon className='helpIcon' />
                </SignupFormHeaderHelpContentContainer>
            </SignupFormHeaderHelpContainer>
        </SignupFormHeaderContainer>
    )
}
