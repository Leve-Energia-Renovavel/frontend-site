"use client"

import { footerBasedOn } from '@/app/utils/helper/footerHelper';
import { usePathname } from 'next/navigation';
import NewFooter from '../new-footer/NewFooter';
import MinimalistFooter from '../new-footer/minimalist-footer/MinimalistFooter';

export default function Footer() {

    const pathname = usePathname()
    
    const isMinimalist = footerBasedOn[pathname]


    return (
        <>
            {isMinimalist ? <MinimalistFooter /> : <NewFooter />}
        </>
    );
}