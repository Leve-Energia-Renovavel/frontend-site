"use client"

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useState } from 'react';
import MemberGetMemberModal from '../../../utils/modals/member-get-member-modal/MemberGetMemberModal';
import { MenuOption } from './styles';

export default function DashboardMemberGetMember({ isSideBar, setErrors, setNotifications }) {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(current => !current)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            <MenuOption highlighted={true} isSideBar={isSideBar} onClick={() => handleOpenModal()} className='dashboardMemberGetMember'>
                <PersonAddAltIcon className='icon' />
                <span className='memberGetMember'>Indique um amigo e ganhe, para cada um, <span className='couponValue'>R$50 na fatura</span></span>
            </MenuOption>

            {<MemberGetMemberModal isOpen={openModal}
                closeModal={handleCloseModal}
                setErrors={setErrors}
                setNotifications={setNotifications} />}
        </>
    )
}