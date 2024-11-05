import { useStoreAddress, useStoreCompany, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser, useStoreUserEconomy } from '@/app/hooks/useStore';
import { clearBrowserData } from '@/app/utils/browser/BrowserUtils';
import { menuOptions } from '@/app/utils/helper/dashboard/dashboardHelper';
import { useRouter } from 'next/navigation';
import { MenuOption, NewDashboardMenu } from './styles';
import { PATH_TO } from '@/app/pages/enums/globalEnums';

export default function DashboardMenu({ isSideBar, menuSelected, setMenuSelection, closeModal }) {

    const router = useRouter()
    const storeUser = useStoreUser()
    const storeCompany = useStoreCompany()
    const storeAddress = useStoreAddress()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeUserEconomy = useStoreUserEconomy()

    const handleLoggout = async () => {
        await clearBrowserData()
        storeUser.clearUser()
        storeAddress.clearAddress()
        storeCompany.clearCompany()
        storeInstallations.clearInstallations()
        storeMainInstallation.clearMainInstallation()
        storeNextBills.clearNextBills()
        storeUserEconomy.clearUser()
        
        router.push(PATH_TO.HOME)
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
            <NewDashboardMenu isSideBar={isSideBar} className='dashboardMenu'>
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