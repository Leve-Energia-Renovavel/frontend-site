import { headerHelper } from '@/app/utils/helper/pathHelper';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import MobileHeaderButtonContained from '../utils/buttons/header/MobileHeaderButtonContained';
import MobileHeaderButtonOutlined from '../utils/buttons/header/MobileHeaderButtonOutlined';
import { MenuItemMobile, MobileButtonContainer, MobileMenu, NavContainer, NavMobile, UlMobile } from './styles';


export default function MobileHeader(props) {

    const router = useRouter()
    const pathname = usePathname()
    const { isMenuOpen, closeMenu } = props;

    const handleNavigation = (path) => {
        closeMenu()
        router.push(`${path}`)
    }

    const isLoggedUser = headerHelper[pathname];

    const handleOpenLoginModal = () => {
        closeMenu()
        props.openModal()
    }

    return (
        <Modal
            open={isMenuOpen}
            onClose={closeMenu}
        >
            <MobileMenu>
                <CloseIcon className='closeIcon' onClick={closeMenu} />
                <NavContainer>
                    <NavMobile>
                        <UlMobile>
                            {!isLoggedUser ?
                                <>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("/")}>A Leve</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("https://leveenergia.com.br/#comofunciona")}>Como funciona</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("https://leveenergia.com.br/#beneficios")}>Benefícios</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("https://leveenergia.com.br/#serleve")}>Quem pode ser Leve</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("https://leveenergia.com.br/blog/")}>Blog</a>
                                    </MenuItemMobile>

                                    <MobileButtonContainer>
                                        <MobileHeaderButtonOutlined className="menuButton" text="Quero ser Leve" onClick={() => handleNavigation("/")} />
                                        <MobileHeaderButtonContained className="menuButton" text="Entrar" onClick={() => handleOpenLoginModal()} />
                                    </MobileButtonContainer>
                                </> :
                                <>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("/dashboard")}>Início</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("/dashboard/profile")}>Meu Perfil</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("/dashboard/invoices")}>Minhas Faturas</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("/dashboard/installations")}>Meus Endereços</a>
                                    </MenuItemMobile>
                                    <MenuItemMobile>
                                        <a onClick={() => handleNavigation("https://leveenergia.com.br/")}>Sair</a>
                                    </MenuItemMobile>
                                </>}
                        </UlMobile>
                    </NavMobile>
                </NavContainer>
            </MobileMenu>
        </Modal>
    );
}