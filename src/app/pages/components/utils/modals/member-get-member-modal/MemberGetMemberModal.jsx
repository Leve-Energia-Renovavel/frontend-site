import { Backdrop, Modal } from '@mui/material'
import { ModalBox } from './styles'
import NewMemberGetMember from '../../../new-member-get-member/NewMemberGetMember'

export default function MemberGetMemberModal({ isOpen, closeModal }) {
    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    },
                },
            }}>
            <ModalBox>
                <NewMemberGetMember closeModal={closeModal} />
            </ModalBox>
        </Modal>
    )
}
