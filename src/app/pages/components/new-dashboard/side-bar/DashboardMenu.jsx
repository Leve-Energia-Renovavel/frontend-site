import { clearBrowserData } from '@/app/utils/browser/BrowserUtils';
import { menuOptions } from '@/app/utils/helper/dashboard/dashboardHelper';
import { useRouter } from 'next/navigation';
import { MenuOption, NewDashboardMenu } from './styles';

export default function DashboardMenu({ isSideBar, menuSelected, setMenuSelection, closeModal }) {

    const router = useRouter()

    const handleLoggout = () => {
        clearBrowserData()
        router.push("/")
    }

    const handleMenuSelection = (link, id) => {
        const selectedOption = menuOptions.find(option => option.id === id);
        setMenuSelection(selectedOption);
        router.push(link)

        if (closeModal) {
            closeModal()
        }
    }

    return (
        <>
            <NewDashboardMenu isSideBar={isSideBar}>
                {menuOptions.map((option, index) => {
                    if (option.id !== 3 && option.id !== 5) {
                        return (
                            <MenuOption
                                selected={menuSelected?.id === option.id}
                                key={option.id}
                                highlighted={option.highlighted}
                                onClick={() => handleMenuSelection(option?.link, option?.id)}>
                                {option.icon}
                                <p className='option'>{option.title}</p>
                            </MenuOption>
                        )
                    }
                })}
                <p className='loggout' onClick={() => handleLoggout()}>Sair</p>
            </NewDashboardMenu>
        </>
    )
}