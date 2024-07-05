
import { downloadBillByUrl } from '@/app/utils/downloader/invoicesDownloader';
import { useRouter } from 'next/navigation';
import { DownloadIcon, DueButton, GraphIcon, IconButton, InvoicesTableActionButtonContainer, LinkIcon, PaidButton, PendingButton } from './styles';

export default function NewInvoicesActionButtonContainer({ status, urlBill, uuid, referenceDate }) {

    const router = useRouter()

    const handleOpenLink = () => {
        window.open(urlBill, '_blank', 'noopener noreferrer');
    }

    const handleDownloadBill = () => {
        const filename = `Fatura_Leve_${referenceDate}`
        downloadBillByUrl(urlBill, filename)

    }

    return (
        <InvoicesTableActionButtonContainer>
            {status === "due" && (
                <DueButton onClick={() => router.push("/dashboard/installations")}>
                    <GraphIcon />
                    <span>Ver consumo</span>
                </DueButton>
            )}
            {status === "paid" && (
                <PaidButton onClick={() => handleDownloadBill()}>
                    <DownloadIcon />
                    <span>Baixar PDF</span>
                </PaidButton>
            )}
            {status === "pending" && (
                <>
                    <PendingButton>
                        <span>Pagar</span>
                    </PendingButton>
                    <IconButton onClick={() => handleOpenLink()}>
                        <LinkIcon className='icon' />
                    </IconButton>
                    <IconButton onClick={() => handleDownloadBill()}>
                        <DownloadIcon className='icon' />
                    </IconButton>
                </>
            )}
        </InvoicesTableActionButtonContainer>
    )
}