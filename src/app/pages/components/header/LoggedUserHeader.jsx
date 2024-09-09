import { useStoreAddress, useStoreCompany, useStoreInstallations, useStoreMainInstallation, useStoreUser } from '@/app/hooks/useStore';
import { clearBrowserData } from '@/app/utils/browser/BrowserUtils';
import { pathHelper } from '@/app/utils/helper/pathHelper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Select } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import logo from "../../../../resources/img/logo-header.png";
import HeaderButton from '../utils/buttons/HeaderButton';
import { HeaderMenuItem, LogoContainer, MenuItem, Nav, Ul, installationFieldStyle } from "./styles";

export default function LoggedUserHeader() {

    const router = useRouter()
    const pathname = usePathname()

    const storeUser = useStoreUser()
    const storeAddress = useStoreAddress()
    const storeCompany = useStoreCompany()
    const storeInstallation = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const mainInstallation = JSON.parse(localStorage.getItem('mainInstallation')) || storeMainInstallation.mainInstallation
    const mainAddress = JSON.parse(localStorage.getItem('address')) || storeAddress.address
    const user = JSON.parse(localStorage.getItem('user')) || storeUser.user

    const { street, installationNumber } = mainAddress?.address ?? (storeAddress?.address || {})
    const { address, neighborhood, number, stateId, uuid, zipCode } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})
    const { name } = user?.user ?? (storeUser?.user || {})

    const homeUrl = "https://leveenergia.com.br/"

    const handleLogout = async () => {
        storeUser.clearUser()
        storeAddress.clearAddress()
        storeCompany.clearCompany()
        storeInstallation.clearInstallations()
        router.push("/")
    }

    const handleClickLogo = () => {
        if (pathHelper[pathname]) {
            router.push('/dashboard')
        } else {
            router.push(homeUrl)
        }
    }

    return (
        <>
            <LogoContainer>
                <Image
                    loading="lazy"
                    className='logoImage'
                    src={logo}
                    alt="Leve Energia Logo"
                    onClick={() => handleClickLogo()}
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
                                <span className="mainInstallation" onClick={() => router.push("/dashboard")} style={{ fontSize: "1.2rem" }}>
                                    {address !== "" ? address : street ? street : "Minha instalação"}
                                </span>
                            </HeaderMenuItem>
                            <HeaderMenuItem
                                value={20}>
                                <span onClick={() => router.push("/dashboard/installations")}>
                                    Ver Meus Endereços
                                </span>
                            </HeaderMenuItem>
                            <HeaderMenuItem
                                value={30}>
                                <span onClick={() => router.push("/dashboard/installations")}>
                                    Adicionar Novo Endereço
                                </span>
                            </HeaderMenuItem>
                        </Select>
                    </Box>
                    <MenuItem>
                        <Link href="/dashboard" className='helloUser'>Olá{name ? (`, ${name}`) : ", Usuário Leve"}</Link>
                    </MenuItem>
                    <MenuItem>
                        <HeaderButton
                            text="Meu Perfil"
                            onClick={() => router.push("/dashboard/profile")} />
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