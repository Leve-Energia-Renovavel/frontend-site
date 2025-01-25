"use client"

import dynamic from 'next/dynamic';
import NewHomeBoxes from './boxes/new-home/NewHomeBoxes';

const NewHomeBenefits = dynamic(() => import('./benefits/NewHomeBenefits'), { ssr: false });
const NewHomeTutorial = dynamic(() => import('./tutorial/new-home/NewHomeTutorial'), { ssr: false });

export default function HomeHowLeveWorks() {
    return (
        <>
            <NewHomeBoxes />

            <NewHomeBenefits />

            <NewHomeTutorial />
        </>
    )
}