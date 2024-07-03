"use client"

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Messages from '../messages/Messages';
import NewChangePassword from '../new-change-password/NewChangePassword';
import NewMemberGetMember from '../new-member-get-member/NewMemberGetMember';
import NewSecondaryEmail from '../new-secondary-email/NewSecondaryEmail';
import RegisteredInstallations from './registered-installations/RegisteredInstallations';
import { NewProfileContainer as Container, NewProfileContentContainer as Content, NewProfileTitleContainer as TitleContainer } from "./styles";

const NewProfileMainForm = dynamic(() => import('./form/NewProfileMainForm'), { ssr: false });

export default function NewProfileMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

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

            <NewChangePassword className='profileChangePassword'
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

            <NewSecondaryEmail className='profileSecondaryEmail'
                setErrorMessage={setErrorMessage}
                etNotifications={setNotifications} />

            <RegisteredInstallations className='registeredInstallations' />

            <NewMemberGetMember className='memberGetMember' />

            <Messages
                notifications={notifications}
                errors={errors}
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

        </Container>
    )
}