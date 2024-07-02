import { ChangePasswordButton, ChangePasswordContainer, ChangePasswordForm, FormInput, LockIcon, TitleContainer } from './styles'

export default function NewChangePassword() {
    return (
        <ChangePasswordContainer>
            <TitleContainer>
                <LockIcon />
                <h3 className='title'>Alterar Senha de Acesso</h3>
            </TitleContainer>
            <ChangePasswordForm>
                <FormInput className="inputForm" placeholder='Senha atual' required />
                <FormInput className="inputForm" placeholder='Nova senha' required />
                <ChangePasswordButton className='button'>
                    <span>Trocar senha</span>
                </ChangePasswordButton>
            </ChangePasswordForm>
        </ChangePasswordContainer>
    )
}