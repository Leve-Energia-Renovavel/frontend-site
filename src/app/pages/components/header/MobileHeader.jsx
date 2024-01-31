import CloseIcon from '@mui/icons-material/Close';
import { Modal } from '@mui/material';
import { useRouter } from 'next/navigation';
import { MenuItemMobile, MobileMenu, NavContainer, NavMobile, UlMobile } from './styles';

export default function MobileHeader(props) {

    const router = useRouter()
    const { isMenuOpen, closeMenu } = props;

    const handleNavigation = (path) => {
        closeMenu()
        router.push(`${path}`)

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
                            <MenuItemMobile>
                                <a onClick={() => handleNavigation("/")}>A Leve</a>
                            </MenuItemMobile>
                            <MenuItemMobile>
                                <a onClick={() => handleNavigation("/about")}>Como funciona</a>
                            </MenuItemMobile>
                            <MenuItemMobile>
                                <a onClick={() => handleNavigation("/beneficios")}>Benefícios</a>
                            </MenuItemMobile>
                            <MenuItemMobile>
                                <a onClick={() => handleNavigation("/quem-pode-ser-Leve")}>Quem pode ser Leve</a>
                            </MenuItemMobile>
                            <MenuItemMobile>
                                <a onClick={() => handleNavigation("/blog")}>Blog</a>
                            </MenuItemMobile>
                        </UlMobile>
                    </NavMobile>
                </NavContainer>
            </MobileMenu>
        </Modal>
    );
}