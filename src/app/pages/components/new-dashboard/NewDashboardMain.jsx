"use client"

import dynamic from 'next/dynamic';
import { NewDashboardContainer as Container } from './styles';
const DashboardSideBar = dynamic(() => import('./DashboardSideBar'), { ssr: false });

export default function NewDashboardMain() {

    return (
        <>
            <Container>
                <DashboardSideBar />
            </Container>
        </>
    )
}