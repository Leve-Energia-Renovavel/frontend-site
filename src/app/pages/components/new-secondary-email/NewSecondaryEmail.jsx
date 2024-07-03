"use client"

import { handleSecondaryEmail } from '@/app/service/email-service/SecondaryEmailService'
import { useRef, useState } from 'react'
import NewSuccessModal from '../utils/modals/success-modal/NewSuccessModal'
import { FormInput, LetterIcon, SecondaryEmailButton, SecondaryEmailContainer, SecondaryEmailForm, SubtitleContainer, TitleContainer } from './styles'

export default function NewSecondaryEmail({ setErrorMessage, setNotifications }) {

    const secondaryEmailRef = useRef(null)
    const [openModal, setOpenModal] = useState(false)
    
    const registerSecondaryEmail = async () => {
        const result = await handleSecondaryEmail(secondaryEmailRef.current.value, setNotifications, setErrorMessage)
        if (result) {
            setOpenModal(true)
        }
    }
    
    const closeModal = () => {
        setOpenModal(false)
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

            <NewSuccessModal
                isOpen={openModal}
                closeModal={closeModal}
                title={`Email secundário cadastrado com sucesso`}
                description={<span className='description'>A partir de agora você receberá notificações, notícias e oportunidades no endereço de email cadastrado: <span className="highlighted">{secondaryEmailRef?.current?.value}</span></span>}
                buttonTitle={`Concluir`}
            />
        </SecondaryEmailContainer>
    )
}