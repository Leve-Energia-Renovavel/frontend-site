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

    const handleMenuSelection = (link, index) => {
        setMenuSelection(menuOptions[index])
        router.push(link)
    }

    return (
        <>
            <NewDashboardMenu>
                {menuOptions.map((option, index) => {
                    return (
                        <MenuOption
                            selected={menuSelected?.id === option.id}
                            key={option.id}
                            highlighted={option.highlighted}
                            onClick={() => handleMenuSelection(option?.link, index)}>
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