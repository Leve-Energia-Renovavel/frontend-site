import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import dynamic from 'next/dynamic';
import NewChangePassword from '../new-change-password/NewChangePassword';
import { NewProfileContainer as Container, NewProfileContentContainer as Content, NewProfileTitleContainer as TitleContainer } from "./styles";
import NewDefaultButton from '../utils/buttons/NewDefaultButton';

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

                <NewProfileMainForm />
            </Content>

            <NewChangePassword />


        </Container>
    )
}