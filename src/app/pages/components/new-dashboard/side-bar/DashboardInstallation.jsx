/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills } from "@/app/hooks/useStore";
import { getInstallationByUUID, getMainInstallationData } from "@/app/service/installation-service/InstallationService";
import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { formatCep } from "@/app/utils/formatters/documentFormatter";
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect } from "react";
import { BoxInstallation, InstallationDetails, InstallationHeader, InstallationItem, NewDashboardInstallation, SelectInstallation } from "./styles";

export default function DashboardInstallation() {

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()

    const mainInstallation = JSON.parse(localStorage?.getItem('mainInstallation'))
    const installations = JSON.parse(localStorage?.getItem('installations'))

    const { uuid, street, number, neighborhood, city, state, stateId, cityId, zipCode, installationNumber, id } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

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
        await getInstallationByUUID(uuid, storeMainInstallation, storeInstallations, storeNextBills, storeBilling)
    }

    return (
        <NewDashboardInstallation>
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
                            return (
                                <InstallationItem key={otherInstallation?.id} value={index + 1}>
                                    <span onClick={() => handleChangeSelectedInstallation(otherInstallation)}>{otherInstallation.street}</span>
                                </InstallationItem>
                            )
                        })}
                    </SelectInstallation>
                </BoxInstallation>
            </InstallationHeader>
            <InstallationDetails>
                <p className="installationDetails">{street ? street : "Rua"}, {number ? number : "123"}  - {neighborhood ? neighborhood : "Bairro"}, {city ? "Cidade" : getCityNameByStateIdAndCityId(stateId, cityId)} - {state ? "Estado" : stateOptions[stateId]?.sigla}, CEP: {formatCep(zipCode)}</p>
            </InstallationDetails>
            {/* <InstallationFooter>
                <AddCircleIcon className="addInstallationIcon" />
                <p className="addInstallation">Nova unidade</p>
            </InstallationFooter> */}
        </NewDashboardInstallation>
    )
}