"use client"

import { useStoreAddress } from "@/app/hooks/useStore";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import { InstallationDetails, InstallationFooter, InstallationHeader, NewDashboardInstallation } from "./styles";


export default function DashboardInstallation() {

    const storeAddress = useStoreAddress()
    const address = JSON.parse(localStorage.getItem('address'))

    const { street, neighborhood, city, state, stateId, cityId, cep, installationNumber } = address?.address ?? (storeAddress?.address || {})

    return (
        <NewDashboardInstallation>
            <InstallationHeader>
                <InventoryIcon className="installationIcon" />
                <h6 className="installationTitle">Casa BH</h6>
            </InstallationHeader>
            <InstallationDetails>
                <p className="installationDetails">{street} - {neighborhood}, {city} - {state}, {cep}</p>
            </InstallationDetails>
            <InstallationFooter>
                <AddCircleIcon className="addInstallationIcon" />
                <p className="addInstallation">Adicionar unidade</p>
            </InstallationFooter>
        </NewDashboardInstallation>
    )
}