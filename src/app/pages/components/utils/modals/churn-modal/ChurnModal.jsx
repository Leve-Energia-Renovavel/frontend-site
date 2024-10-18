import { useStoreInstallations, useStoreUser } from '@/app/hooks/useStore'
import { formatCpfUnrestricted } from '@/app/utils/formatters/documentFormatter'
import { factoryInfos } from '@/app/utils/helper/dashboard/newDashboardHelper'
import { Backdrop, Modal } from '@mui/material'
import HistoryDetails from '../../../new-dashboard/history/details/HistoryDetails'
import { FactoryDetailsContainer, FactoryDetailsContent, FactoryInfoCard, HistoryDetailsContainer, ModalBox, OptionsButton, OptionsContainer } from './styles'
import { LEVE_WHATSAPP_NUMBER } from '@/app/pages/enums/globalEnums'

export default function ChurnModal({ isOpen, closeModal, confirmChurn }) {

    const user = useStoreUser()
    const storeInstallations = useStoreInstallations()

    const installations = JSON.parse(localStorage.getItem('installations'))

    const { name, cpf } = user?.user ?? (user?.user || {})

    const allInstallations = installations?.installations ?? (storeInstallations?.installations || {})

    const numberOfInstallations = allInstallations?.length

    const handleConfirmChurn = () => {
        closeModal()
        confirmChurn()
    }
    const handleRequestChurn = () => {
        const message = `Oi! Estou no painel do cliente Leve Energia e desejo o cancelamento da minha conta.\n\nMeus dados são:\nNome: ${name}\nCPF: ${formatCpfUnrestricted(cpf)}\nTenho ${numberOfInstallations > 1 ? "endereços cadastrados" : "endereço cadastrado"}.`;
        const url = `https://api.whatsapp.com/send/?phone=${LEVE_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
        window.open(url, '_blank', 'noopener noreferrer');
    }

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
                <h1 className='modalTitle'>Cancelar meu cadastro com a Leve</h1>
                <p className='modalDescription'>Você tem certeza que quer deixar de economizar todos os meses enquanto ajuda nosso planeta? Veja abaixo quanto foi economizado e o impacto realizado desde sua chegada na Leve:</p>

                <HistoryDetailsContainer>
                    <HistoryDetails />
                </HistoryDetailsContainer>

                <FactoryDetailsContainer>
                    <p className='factoryName'>Usina Uberlândia II</p>
                    <FactoryDetailsContent>
                        {factoryInfos?.map((info, index) => {
                            return (
                                <FactoryInfoCard key={info.title} className={`factoryCard-${index}`}>
                                    {info.icon}
                                    <p className='infoTitle'>{info.title}</p>
                                    <p className='infoValue'>{info.value}</p>
                                </FactoryInfoCard>
                            )
                        })}
                    </FactoryDetailsContent>
                </FactoryDetailsContainer>

                <OptionsContainer>
                    {/* <OptionsButton onClick={() => handleConfirmChurn()}>
                        <span>Confirmar cancelamento</span>
                    </OptionsButton>
                    <OptionsButton isChurn={true} onClick={closeModal}>
                        <span>Continuar economizando</span>
                    </OptionsButton> */}
                    <OptionsButton onClick={() => handleRequestChurn()}>
                        <span>Solicitar cancelamento com o suporte</span>
                    </OptionsButton>
                </OptionsContainer>
            </ModalBox>
        </Modal>
    )
}