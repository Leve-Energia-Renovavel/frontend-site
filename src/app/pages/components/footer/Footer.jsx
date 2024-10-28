"use client";

import { footerBasedOn } from '@/app/utils/helper/footer/footerHelper';
import { usePathname } from 'next/navigation';
import NewFooter from '../new-footer/NewFooter';
import MinimalistFooter from '../new-footer/minimalist-footer/MinimalistFooter';

export default function Footer() {
    const pathname = usePathname();

    const showMinimalist = footerBasedOn[pathname];

    const hideFooter = pathname === "/signup/" || pathname === "/signup-form/" || pathname === "/signup/success/" || pathname === "/signup/contract-signature/";

    if (hideFooter) {
        return null;
    }

    return (
        <>
            {showMinimalist ? <MinimalistFooter /> : <NewFooter />}
        </>
    );
}
