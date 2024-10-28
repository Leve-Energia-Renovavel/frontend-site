import { useRouter } from 'next/navigation';
import { FormButton, NewSuccessBoxContent, NewSuccessBoxInfo, NewSuccessFormContent, SimpleArrowForward } from './styles';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
export default function NewSuccessContent() {

    const router = useRouter()

    const handleDashboard = () => {
        router.push(`/dashboard`)

    }
    return (
        <NewSuccessFormContent className='newSuccessFormContent'>
            <h1 className='title'>Parabéns!</h1>
            <p className='subtitle'>Você acaba de contratar a Leve Energia</p>
            <p className='description'>Agora, nosso time vai revisar seus dados e solicitar à sua distribuidora que cadastre seu imóvel como consumidor das nossas usinas. Esse processo pode levar até <span className='highlighted'>30 dias</span>, e sua conta de luz começará a ficar mais barata em até <span className='highlighted'>60 dias</span>.</p>

            <NewSuccessBoxInfo className='newSuccessBoxInfo'>
                <NewSuccessBoxContent>
                    <ChatOutlinedIcon className='boxIcon' />
                    <h6 className='boxTitle'>Enviaremos informações sobre o andamento por e-mail e Whatsapp. Fique de olho!</h6>
                </NewSuccessBoxContent>
                <p className='boxDescription'>Você também pode acessar o nosso portal de serviços e acompanhar tudo por lá. </p>
            </NewSuccessBoxInfo>

            <FormButton
                onClick={() => handleDashboard()}
                endIcon={<SimpleArrowForward className="icon" />}>
                <span>Acessar área de clientes</span>
            </FormButton>
        </NewSuccessFormContent>
    )
}