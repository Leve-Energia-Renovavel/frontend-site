import { clearBrowserData } from '@/app/utils/browser/BrowserUtils';
import { menuOptions } from '@/app/utils/helper/dashboardHelper';
import { useRouter } from 'next/navigation';
import { MenuOption, NewDashboardMenu } from './styles';

export default function DashboardMenu() {

    const router = useRouter()

    const handleLoggout = () => {
        clearBrowserData()
        router.push("/")
    }

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
                <p className='loggout' onClick={() => handleLoggout()}>Sair</p>
            </NewDashboardMenu>
        </>
    )
}