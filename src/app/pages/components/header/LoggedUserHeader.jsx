import { useStoreAddress, useStoreCompany, useStoreInstallations, useStoreUser } from '@/app/hooks/useStore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Select } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import logo from "../../../../resources/img/logo-header.png";
import HeaderButton from '../utils/buttons/HeaderButton';
import { HeaderMenuItem, LogoContainer, MenuItem, Nav, Ul, installationFieldStyle } from "./styles";

export default function LoggedUserHeader() {
    const router = useRouter()
    const user = useStoreUser().user
    const address = useStoreAddress().address
    const mainInstallation = useStoreInstallations().installations[0]

    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()
    const storeCompany = useStoreCompany()
    const storeInstallation = useStoreInstallations()

    const handleLogout = () => {
        storeUser.clearUser()
        storeAddress.clearAddress()
        storeCompany.clearCompany()
        storeInstallation.clearInstallations()
        router.push("/")
    }

    return (
        <>
            <LogoContainer>
                <Image
                    loading="eager" priority={true}
                    className='logoImage'
                    src={logo}
                    alt="Leve Energia Logo"
                    onClick={() => router.push("/")}
                />
            </LogoContainer>
            <Nav>
                <Ul>
                    <Box sx={{ minWidth: 120, marginLeft: '4rem' }}>
                        <Select
                            fullWidth
                            value={10}
                            IconComponent={KeyboardArrowDownIcon}
                            sx={installationFieldStyle}>
                            <HeaderMenuItem value={10} style={{ display: 'none' }}
                            >
                                <span onClick={() => router.push("/dashboard")}>
                                    {mainInstallation ? (`${mainInstallation?.address}, ${mainInstallation?.number}`) : "Minha instalação"}
                                </span>
                            </HeaderMenuItem>
                            <HeaderMenuItem
                                value={20}>
                                <span onClick={() => router.push("/installations")}>
                                    Ver Minhas Instalações
                                </span>
                            </HeaderMenuItem>
                            <HeaderMenuItem
                                value={30}>
                                <span onClick={() => router.push("/installations")}>
                                    Adicionar Novo Endereço
                                </span>
                            </HeaderMenuItem>
                        </Select>
                    </Box>
                    <MenuItem>
                        <Link href="/">Olá{user ? (`, ${user.name}`) : ", Usuário Leve"}</Link>
                    </MenuItem>
                    <MenuItem>
                        <HeaderButton
                            text="Meu Perfil"
                            onClick={() => router.push("/profile")} />
                    </MenuItem>
                    <MenuItem>
                        <HeaderButton
                            text="Sair"
                            onClick={() => handleLogout()} />
                    </MenuItem>
                </Ul>
            </Nav>
        </>
    );
}