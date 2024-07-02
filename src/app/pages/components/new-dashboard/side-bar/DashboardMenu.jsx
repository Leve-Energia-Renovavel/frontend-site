import { clearBrowserData } from '@/app/utils/browser/BrowserUtils';
import { menuOptions } from '@/app/utils/helper/dashboardHelper';
import { useRouter } from 'next/navigation';
import { MenuOption, NewDashboardMenu } from './styles';

export default function DashboardMenu({ menuSelected, setMenuSelection }) {

    const router = useRouter()

    const handleLoggout = () => {
        clearBrowserData()
        router.push("/")
    }

    const handleMenuSelection = (index) => {
        setMenuSelection(menuOptions[index])
    }

    return (
        <>
            <NewDashboardMenu>
                {menuOptions.slice(0, -1).map((option, index) => {
                    return (
                        <MenuOption
                            selected={menuSelected?.id === option.id}
                            key={option.id}
                            highlighted={option.highlighted}
                            onClick={() => handleMenuSelection(index)}>
                            {option.icon}
                            <p className='option'>{option.title}</p>
                        </MenuOption>
                    )
                })}
                <p className='loggout' onClick={() => handleLoggout()}>Sair</p>
            </NewDashboardMenu>
        </>
    )
}