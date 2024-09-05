import { Backdrop, Modal } from '@mui/material';
import NewMemberGetMember from '../../../new-member-get-member/NewMemberGetMember';
import { ModalBox } from './styles';

export default function MemberGetMemberModal({ isOpen, closeModal, setErrorMessage, setNotifications }) {

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
                <NewMemberGetMember closeModal={closeModal}
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications} />
            </ModalBox>
        </Modal>
    )
}
