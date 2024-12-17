"use client";

import { footerBasedOn } from '@/app/utils/helper/footer/footerHelper';
import { usePathname } from 'next/navigation';
import { PATH_TO } from '../../enums/globalEnums';
import NewFooter from '../new-footer/NewFooter';
import MinimalistFooter from '../new-footer/minimalist-footer/MinimalistFooter';

export default function Footer() {
    const pathname = usePathname();

    const showMinimalist = footerBasedOn[pathname];

    const hideFooter =
        pathname === PATH_TO.ECONOMY_SIMULATION ||
        pathname === PATH_TO.REGISTER_USER ||
        pathname === PATH_TO.REGISTER_ADDRESS ||
        pathname === PATH_TO.REGISTER_CONTRACT;

    if (hideFooter) {
        return null;
    }

    return (
        <>
            {showMinimalist ? <MinimalistFooter /> : <NewFooter />}
        </>
    );
}
