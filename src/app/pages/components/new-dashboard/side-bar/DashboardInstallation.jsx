/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills } from "@/app/hooks/useStore";
import { getInstallationByUUIDandUpdateStore, getMainInstallationData } from "@/app/service/installation-service/InstallationService";
import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { formatCep } from "@/app/utils/formatters/documentFormatter";
import { getAddress, getNumber } from "@/app/utils/helper/installations/installationsHelper";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from "react";
import AddInstallationModal from "../../utils/modals/installations-modal/new-installation-modal/AddInstallationModal";
import { BoxInstallation, InstallationDetails, InstallationFooter, InstallationHeader, InstallationItem, NewDashboardInstallation, SelectInstallation } from "./styles";


export default function DashboardInstallation({ isMobileContent }) {

    const [openNewInstallationModal, setOpenNewInstallationModal] = useState(false)

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()

    const mainInstallation = JSON.parse(localStorage?.getItem('mainInstallation'))
    const installations = JSON.parse(localStorage?.getItem('installations'))

    const { uuid, address, street, number, neighborhood, city, state, stateId, cityId, zipCode, installationNumber, id, hasStartedBilling } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

    const allInstallations = installations?.installations ?? (storeInstallations?.installations || {})

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    useEffect(() => {
        const fetchUserData = async () => {
            await getMainInstallationData(storeMainInstallation, storeInstallations)
        };
        if (!uuid) {
            fetchUserData();
        }
    }, []);

    const handleChangeSelectedInstallation = async (selectedInstallation) => {
        const uuid = selectedInstallation?.uuid
        await getInstallationByUUIDandUpdateStore(uuid, storeMainInstallation, storeInstallations, storeNextBills, storeBilling)
    }
    const handleCloseModal = () => {
        setOpenNewInstallationModal(false)
    }

    return (
        <>
            <NewDashboardInstallation isMobileContent={isMobileContent}>
                <InstallationHeader>
                    <InventoryIcon className="installationIcon" />
                    <BoxInstallation >
                        <SelectInstallation
                            fullWidth
                            value={0}
                            displayEmpty
                            IconComponent={filteredInstallations.length > 0 ? KeyboardArrowDownIcon : ""}>
                            <li value={0} style={{ display: 'none' }}>
                                {/* <span className="home">{`Endereço ${installationNumber}`}</span> */}
                                <span className="home">{`Casa`}</span>
                            </li>
                            {filteredInstallations?.map((otherInstallation, index) => {
                                const address = otherInstallation.address
                                const street = otherInstallation.street
                                const number = getNumber(otherInstallation.number)
                                return (
                                    <InstallationItem key={otherInstallation?.id} value={index + 1}>
                                        <span onClick={() => handleChangeSelectedInstallation(otherInstallation)}>{getAddress(address, street)}{number !== "Nº" ? `, ${number}` : ""}</span>
                                    </InstallationItem>
                                )
                            })}
                        </SelectInstallation>
                    </BoxInstallation>
                </InstallationHeader>
                <InstallationDetails>
                    <p className="installationDetails">{getAddress(address, street)}, {getNumber(number)}  - {neighborhood ? neighborhood : "Bairro"}, {city ? "Cidade" : getCityNameByStateIdAndCityId(stateId, cityId)} - {state ? "Estado" : stateOptions[stateId]?.sigla}, CEP: {formatCep(zipCode)}</p>
                </InstallationDetails>
                {hasStartedBilling && <InstallationFooter onClick={() => setOpenNewInstallationModal(true)}>
                    <AddCircleIcon className="addInstallationIcon" />
                    <p className="addInstallation">Novo endereço</p>
                </InstallationFooter>}
            </NewDashboardInstallation>
            {openNewInstallationModal && <AddInstallationModal isOpen={openNewInstallationModal} closeModal={handleCloseModal} />}
        </>
    )
}