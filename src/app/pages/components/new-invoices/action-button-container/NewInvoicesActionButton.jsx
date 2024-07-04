
import { DownloadIcon, DueButton, GraphIcon, IconButton, InvoicesTableActionButtonContainer, LinkIcon, PaidButton, PendingButton } from './styles';


export default function NewInvoicesActionButtonContainer({ status }) {
    return (
        <InvoicesTableActionButtonContainer>
            {status === "due" && (
                <DueButton>
                    <GraphIcon />
                    <span>Ver consumo</span>
                </DueButton>
            )}
            {status === "paid" && (
                <PaidButton>
                    <DownloadIcon />
                    <span>Baixar PDF</span>
                </PaidButton>
            )}
            {status === "pending" && (
                <>
                    <PendingButton>
                        <span>Pagar</span>
                    </PendingButton>
                    <IconButton>
                        <LinkIcon className='icon' />
                    </IconButton>
                    <IconButton>
                        <DownloadIcon className='icon' />
                    </IconButton>
                </>
            )}
        </InvoicesTableActionButtonContainer>
    )
}