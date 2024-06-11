import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { MenuOption } from './styles';

export default function DashboardMemberGetMember() {
    return (
        <MenuOption highlighted={true}>
            <PersonAddAltIcon className='icon' />
            <span className='memberGetMember'>Indique um amigo e ganhe, para cada um, <span className='couponValue'>R$50 na fatura</span></span>
        </MenuOption>
    )
}