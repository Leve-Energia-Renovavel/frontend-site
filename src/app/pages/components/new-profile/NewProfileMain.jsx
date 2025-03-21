"use client"

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Messages from '../messages/Messages';
import NewChangePassword from '../new-change-password/NewChangePassword';
import NewMemberGetMember from '../new-member-get-member/NewMemberGetMember';
import NewSecondaryEmail from '../new-secondary-email/NewSecondaryEmail';
import FinalOptions from './final-options/FinalOptions';
import RegisteredInstallations from './registered-installations/RegisteredInstallations';
import { CancelEditIcon, NewProfileContainer as Container, NewProfileContentContainer as Content, NewProfileEditHeader as Edit, EditIcon, NewProfileTitleHeader as Title, NewProfileTitleContainer as TitleContainer } from "./styles";

const NewProfileMainForm = dynamic(() => import('./form/NewProfileMainForm'), { ssr: false });

export default function NewProfileMain() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const [isEdition, setEdition] = useState(false)

    const handleEdition = () => {
        setEdition(current => !current)
    }

    return (
        <Container className="newProfileMainContainer">
            <h1 className='pageTitle'>Meu perfil</h1>

            <Content>
                <TitleContainer className='profileTitleContainer'>
                    <Title>
                        <PersonOutlineIcon className='profileIcon' />
                        <h2 className='formTitle'>Dados Cadastrais</h2>
                    </Title>
                    <Edit onClick={() => handleEdition()}>
                        {!isEdition ? (<>
                            <h2 className='editTitle'>Editar</h2>
                            <EditIcon />
                        </>) : (<>
                            <h2 className='cancelEditTitle'>Cancelar</h2>
                            <CancelEditIcon />
                        </>)}
                    </Edit>
                </TitleContainer>

                <NewProfileMainForm
                    isEdition={isEdition}
                    handleEdition={handleEdition}
                    setNotifications={setNotifications}
                    setErrorMessage={setErrorMessage} />
            </Content>

            <NewChangePassword
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

            <NewSecondaryEmail
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

            <RegisteredInstallations />

            <NewMemberGetMember
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

            <FinalOptions />

            <Messages
                notifications={notifications}
                errors={errors}
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />

        </Container>
    )
}