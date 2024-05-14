import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const menuOptions = [
    {
        icon: <HomeIcon className='icon' />,
        title: "Início",
        highlighted: false,
    },
    {
        icon: <ReceiptIcon className='icon' />,
        title: "Faturas",
        highlighted: false,
    },
    {
        icon: <AttachMoneyIcon className='icon' />,
        title: "Pagamento recorrente",
        highlighted: false,
    },
    {
        icon: <LocationOnIcon className='icon' />,
        title: "Unidades cadastradas",
        highlighted: false,
    },
    {
        icon: <HelpOutlineIcon className='icon' />,
        title: "Dúvidas e Ajuda",
        highlighted: false,
    },
    {
        icon: <PersonAddAltIcon className='icon' />,
        title: "Indique e economize mais",
        highlighted: true,
    },
]