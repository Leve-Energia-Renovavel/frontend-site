import { useStore } from '@/app/hooks/useStore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Select } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import logo from "../../../../resources/img/logo-header.png";
import HeaderButton from '../utils/buttons/HeaderButton';
import { HeaderMenuItem, LogoContainer, MenuItem, Nav, Ul } from "./styles";

export default function LoggedUserHeader() {
    const router = useRouter()
    const { username } = useStore()

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
                            IconComponent={KeyboardArrowDownIcon} // Custom arrow icon
                            sx={{
                                fontFamily: 'Metropolis',
                                fontWeight: '600',
                                color: '#FFF',
                                '& .MuiOutlinedInput-root': {
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#0075FF', // Border color on hover
                                    },
                                    '& .MuiSelect-select:focus': {
                                        backgroundColor: '#0075FF', // Avoid the blue background on focus
                                    },
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#0075FF', // Border color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#0075FF', // Border color on hover
                                },
                                '.MuiSvgIcon-root ': {
                                    fill: "white !important",
                                },

                            }}>
                            <HeaderMenuItem
                                value={10}>
                                <span onClick={() => router.push("/dashboard")}>
                                    Instalação Leve Selecionada
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
                                <span onClick={() => console.log("/installations")}>
                                    Adicionar Novo Endereço
                                </span>
                            </HeaderMenuItem>
                        </Select>
                    </Box>
                    <MenuItem>
                        <Link href="/">Olá, {username}</Link>
                    </MenuItem>
                    <MenuItem>
                        <HeaderButton
                            text="Meu Perfil"
                            onClick={() => router.push("/profile")} />
                    </MenuItem>
                    <MenuItem>
                        <HeaderButton
                            text="Sair"
                            onClick={() => router.push("/")} />
                    </MenuItem>
                </Ul>
            </Nav>
        </>
    );
}