"use client"

import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser } from "@/app/hooks/stores/useStore";
import { getInstallationByUUIDandUpdateStore } from "@/app/service/installation-service/InstallationService";
import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { formatCep } from "@/app/utils/formatters/documentFormatter";
import { pascalCaseWord } from "@/app/utils/formatters/textFormatter";
import { getAddress, getNumber, isPending } from "@/app/utils/helper/installations/installationsHelper";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Skeleton } from "@mui/material";
import { useState } from "react";
import AddInstallationModal from "../../utils/modals/installations-modal/new-installation-modal/AddInstallationModal";
import { BoxInstallation, InstallationDetails, InstallationFooter, InstallationHeader, InstallationItem, NewDashboardInstallation, SelectInstallation } from "./styles";

export default function DashboardInstallation({ isMobileContent }) {

    const [openNewInstallationModal, setOpenNewInstallationModal] = useState(false)
    const [openPendingInstallationModal, setOpenPendingInstallationModal] = useState(true)

    const [isLoading, setIsLoading] = useState(false)

    const store = useStoreUser()
    const storeBilling = useStoreBillingHistory()
    const storeNextBills = useStoreNextBills()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const { uuid, hasConnectedByBackoffice } = store?.user || {}

    const { address, street, number, neighborhood, city, state, stateId, cityId, zipCode, id, hasStartedBilling } = storeMainInstallation?.mainInstallation || {}

    const allInstallations = storeInstallations?.installations || {}

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    const pendingInstallations = filteredInstallations?.filter(installation => isPending(installation?.status));

    const hasPendingContracts = pendingInstallations?.length > 0

    const handleChangeSelectedInstallation = async (selectedInstallation) => {
        setIsLoading(true)
        const uuid = selectedInstallation?.uuid
        await getInstallationByUUIDandUpdateStore(uuid, storeMainInstallation, storeInstallations, storeNextBills, storeBilling, setIsLoading)
    }
    const closeNewInstallationModal = () => {
        setOpenNewInstallationModal(false)
    }
    const closeModal = () => {
        setOpenPendingInstallationModal(false)
    }

    return (
        <>
            <NewDashboardInstallation isMobileContent={isMobileContent} className="dashboardInstallation">
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
                                        <span onClick={() => handleChangeSelectedInstallation(otherInstallation)}>
                                            {getAddress(address, street)}{number !== "Nº" ? `, ${number}` : ""}
                                        </span>
                                    </InstallationItem>
                                )
                            })}
                        </SelectInstallation>
                    </BoxInstallation>
                </InstallationHeader>
                <InstallationDetails>
                    <InstallationDetails>
                        {address ? (
                            isLoading ? (
                                <>
                                    <Skeleton variant="text" className="loadingAddress" />
                                    <Skeleton variant="text" className="loadingAddress" />
                                </>
                            ) : (
                                <p className="installationDetails">
                                    {getAddress(address, street)}, {getNumber(number)} -{" "}
                                    {neighborhood || "Bairro"}, {city || pascalCaseWord(getCityNameByStateIdAndCityId(stateId, cityId))} -{" "}
                                    {state || stateOptions[stateId]?.sigla}, CEP: {formatCep(zipCode)}
                                </p>
                            )
                        ) : (
                            <>
                                <Skeleton variant="text" className="loadingAddress" />
                                <Skeleton variant="text" className="loadingAddress" />
                            </>
                        )}
                    </InstallationDetails>
                </InstallationDetails>
                {hasStartedBilling && hasConnectedByBackoffice && <InstallationFooter onClick={() => setOpenNewInstallationModal(true)}>
                    <AddCircleIcon className="addInstallationIcon" />
                    <p className="addInstallation">Novo endereço</p>
                </InstallationFooter>}
            </NewDashboardInstallation>

            {<AddInstallationModal
                isOpen={openNewInstallationModal}
                closeModal={closeNewInstallationModal} />}

            {/* {<NewInstallationPendingContractModal
                pendingInstallations={pendingInstallations}
                closeModal={closeModal}
                isOpen={hasPendingContracts && openPendingInstallationModal}
            />} */}
        </>
    )
}