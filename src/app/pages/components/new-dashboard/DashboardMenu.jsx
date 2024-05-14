import { menuOption, menuOptions } from '@/app/utils/helper/dashboardHelper';
import { MenuOption, NewDashboardMenu } from './styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
export default function DashboardMenu() {

    return (
        <>
            <NewDashboardMenu>
                {menuOptions.map((option) => {
                    return (
                        <MenuOption key={option.title} highlighted={option.highlighted}>
                            {option.icon}
                            <p className='option'>{option.title}</p>
                        </MenuOption>
                    )
                })}

            </NewDashboardMenu>
        </>
    )
}