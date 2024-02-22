import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Select } from "@mui/material";
import Link from "next/link";
import DefaultButton from "../utils/buttons/DefaultButton";
import { LoggedUserNavContainer, LogoContainer, MenuItem, Nav, Ul } from "./styles";
import Image from 'next/image';
import logo from "../../../../resources/img/logo-header.png";
import HeaderButton from '../utils/buttons/HeaderButton';

export default function LoggedUserHeader() {
    return (
        <>
            <LogoContainer>
                <Image className='logoImage'
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
                                color: 'white',
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
                                }
                            }}>
                            <MenuItem value={10}>Instalação Leve Selecionada</MenuItem>
                            <MenuItem value={20}>Outra instalação Leve</MenuItem>
                        </Select>
                    </Box>
                    <MenuItem>
                        <Link href="/">Ola, Usuário Leve</Link>
                    </MenuItem>
                    <MenuItem>
                        <HeaderButton text="Meu Perfil" />
                    </MenuItem>
                    <MenuItem>
                        <HeaderButton text="Sair" />
                    </MenuItem>
                </Ul>
            </Nav>
        </>
    );
}