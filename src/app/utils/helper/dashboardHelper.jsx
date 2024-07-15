import NewHelpMain from '@/app/pages/components/help/NewHelpMain';
import NewDashboardMainContent from '@/app/pages/components/new-dashboard/main-content/NewDashboardMainContent';
import NewInvoicesMain from '@/app/pages/components/new-invoices/NewInvoicesMain';
import NewPaymentMain from '@/app/pages/components/new-payment/NewPaymentMain';
import NewProfileMain from '@/app/pages/components/new-profile/NewProfileMain';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import dynamic from 'next/dynamic';

const NewInstallationsMain = dynamic(() => import('@/app/pages/components/new-installations/NewInstallationsMain'), { ssr: false });

export const menuOptions = [
    {
        id: 1,
        icon: <HomeIcon className='icon' />,
        title: "Início",
        link: "/dashboard",
        menuLabel: "home",
        highlighted: false,
        content: <NewDashboardMainContent />
    },
    {
        id: 2,
        icon: <ReceiptIcon className='icon' />,
        menuLabel: "invoices",
        link: "/dashboard/invoices",
        title: "Faturas",
        highlighted: false,
        content: <NewInvoicesMain />
    },
    {
        id: 3,
        icon: <AttachMoneyIcon className='icon' />,
        title: "Pagamento recorrente",
        menuLabel: "payment",
        link: "/dashboard/payment",
        highlighted: false,
        content: <NewPaymentMain />
    },
    {
        id: 4,
        icon: <LocationOnIcon className='icon' />,
        title: "Unidades cadastradas",
        link: "/dashboard/installations",
        menuLabel: "installations",
        highlighted: false,
        content: <NewInstallationsMain />
    },
    {
        id: 5,
        icon: <HelpOutlineIcon className='icon' />,
        title: "Dúvidas e Ajuda",
        link: "/dashboard/help",
        menuLabel: "help",
        highlighted: false,
        content: <NewHelpMain />
    },
    {
        id: 6,
        icon: <HelpOutlineIcon className='icon' />,
        title: "Meu Perfil",
        menuLabel: "profile",
        highlighted: false,
        content: <NewProfileMain />
    },
]