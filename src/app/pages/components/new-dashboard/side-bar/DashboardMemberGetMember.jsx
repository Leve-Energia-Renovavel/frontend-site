"use client"

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useState } from 'react';
import { MenuOption } from './styles';
import MemberGetMemberModal from '../../utils/modals/member-get-member-modal/MemberGetMemberModal';

export default function DashboardMemberGetMember({ isSideBar }) {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(current => !current)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }


    return (
        <>
            <MenuOption highlighted={true} isSideBar={isSideBar} onClick={() => handleOpenModal()}>
                <PersonAddAltIcon className='icon' />
                <span className='memberGetMember'>Indique um amigo e ganhe, para cada um, <span className='couponValue'>R$50 na fatura</span></span>
            </MenuOption>
            {openModal && <MemberGetMemberModal isOpen={openModal} closeModal={handleCloseModal} />}
        </>
    )
}