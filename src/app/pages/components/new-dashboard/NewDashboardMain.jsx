"use client"

import DashboardSideBar from './DashboardSideBar';
import { NewDashboardContainer as Container } from './styles';

export default function NewDashboardMain() {

    return (
        <>
            <Container>
                <DashboardSideBar />
            </Container>
        </>
    )
}