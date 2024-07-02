import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import dynamic from 'next/dynamic';
import NewChangePassword from '../new-change-password/NewChangePassword';
import NewSecondaryEmail from '../new-secondary-email/NewSecondaryEmail';
import { NewProfileContainer as Container, NewProfileContentContainer as Content, RegisteredInstallationsContainer, NewProfileTitleContainer as TitleContainer } from "./styles";
import RegisteredInstallations from './registered-installations/RegisteredInstallations';

const NewProfileMainForm = dynamic(() => import('./form/NewProfileMainForm'), { ssr: false });

export default function NewProfileMain() {
    return (
        <Container className="newProfileMainContainer">
            <h1 className='pageTitle'>Meu perfil</h1>

            <Content>
                <TitleContainer>
                    <PersonOutlineIcon className='profileIcon' />
                    <h2 className='formTitle'>Dados Cadastrais</h2>
                </TitleContainer>
                <NewProfileMainForm className='profileMainForm' />
            </Content>

            <NewChangePassword className='profileChangePassword' />

            <NewSecondaryEmail className='profileSecondaryEmail' />

            <RegisteredInstallations />

        </Container>
    )
}