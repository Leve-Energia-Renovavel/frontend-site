import { handleSecondaryEmail } from '@/app/service/email-service/SecondaryEmailService'
import { useRef } from 'react'
import { FormInput, LetterIcon, SecondaryEmailButton, SecondaryEmailContainer, SecondaryEmailForm, SubtitleContainer, TitleContainer } from './styles'

export default function NewSecondaryEmail({ setErrorMessage, setNotifications }) {

    const secondaryEmailRef = useRef(null)

    const registerSecondaryEmail = async () => {
        await handleSecondaryEmail(secondaryEmailRef.current.value, setNotifications, setErrorMessage)
    }

    return (
        <SecondaryEmailContainer>
            <TitleContainer>
                <LetterIcon />
                <h3 className='title'>Cadastrar Email Secundário</h3>
            </TitleContainer>
            <SubtitleContainer>
                <p className='subtitle'>Caso queira receber suas faturas em um novo e-mail, é só inserir no campo abaixo e checar a caixinha.</p>
            </SubtitleContainer>
            <SecondaryEmailForm>
                <FormInput className="inputForm" inputRef={secondaryEmailRef} placeholder='Email secundário' required />
                <SecondaryEmailButton className='button' onClick={() => registerSecondaryEmail()} >
                    <span>Cadastrar email</span>
                </SecondaryEmailButton>
            </SecondaryEmailForm>
        </SecondaryEmailContainer>
    )
}