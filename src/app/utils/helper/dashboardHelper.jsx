import NewHelpMain from '@/app/pages/components/help/NewHelpMain';
import NewInstallationsMain from '@/app/pages/components/new-installations/NewInstallationsMain';
import NewInvoicesMain from '@/app/pages/components/new-invoices/NewInvoicesMain';
import NewDashboardMainContent from '@/app/pages/components/new-dashboard/main-content/NewDashboardMainContent';
import NewPaymentMain from '@/app/pages/components/payment/NewPaymentMain';
import NewProfileMain from '@/app/pages/components/new-profile/NewProfileMain';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const menuOptions = [
    {
        id: 1,
        icon: <HomeIcon className='icon' />,
        title: "Início",
        menuLabel: "home",
        highlighted: false,
        content: <NewDashboardMainContent />
    },
    {
        id: 2,
        icon: <ReceiptIcon className='icon' />,
        menuLabel: "invoices",
        title: "Faturas",
        highlighted: false,
        content: <NewInvoicesMain />
    },
    {
        id: 3,
        icon: <AttachMoneyIcon className='icon' />,
        title: "Pagamento recorrente",
        menuLabel: "payment",
        highlighted: false,
        content: <NewPaymentMain />
    },
    {
        id: 4,
        icon: <LocationOnIcon className='icon' />,
        title: "Unidades cadastradas",
        menuLabel: "installations",
        highlighted: false,
        content: <NewInstallationsMain />
    },
    {
        id: 5,
        icon: <HelpOutlineIcon className='icon' />,
        title: "Dúvidas e Ajuda",
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