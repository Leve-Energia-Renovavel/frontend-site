/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreInstallations, useStoreMainInstallation } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { formatCep } from "@/app/utils/formatters/documentFormatter";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { BoxInstallation, InstallationDetails, InstallationFooter, InstallationHeader, NewDashboardInstallation, SelectInstallation } from "./styles";

export default function DashboardInstallation() {

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const mainInstallation = JSON.parse(localStorage.getItem('mainInstallation'))
    const installations = JSON.parse(localStorage.getItem('installations'))

    const { street, number, neighborhood, city, state, stateId, cityId, zipCode, installationNumber, id } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

    const allInstallations = installations?.installations ?? (storeInstallations?.installations || {})

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    useEffect(() => {
        const fetchUserData = async () => {

            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
                if (requestSuccessful(response?.status)) {
                    const { instalacao } = response?.data
                    const outrasInstalacoes = response?.data?.outras_instalacoes
                    const hasStartedBilling = response?.data?.ciclosConsumo ? true : false

                    const updatedMainInstallation = {
                        id: instalacao?.id,
                        uuid: instalacao?.uuid,
                        address: instalacao?.nome,
                        street: instalacao?.nome,
                        number: instalacao?.numero,
                        cityId: instalacao?.cidade_id,
                        stateId: instalacao?.estado_id,
                        neighborhood: instalacao?.bairro,
                        complement: instalacao?.complemento,
                        zipCode: instalacao?.cep,
                        amount: instalacao?.valor_base_consumo,
                        status: instalacao?.situacao,
                        installationNumber: instalacao?.numero_instalacao,

                        percentageAllocatedEnergy: instalacao?.porcentagem_energia_alocada,
                        kwhContracted: instalacao?.kwh_contratado,
                        discount: instalacao?.desconto,

                        clientId: instalacao?.clientes_id,
                        isSelected: instalacao?.selecionada,

                        hasStartedBilling: hasStartedBilling
                    }

                    storeMainInstallation.updateMainInstallation(updatedMainInstallation)
                    storeInstallations.addInstallation(updatedMainInstallation);

                    outrasInstalacoes?.forEach(installation => {
                        const otherInstallation = {
                            id: installation?.id,
                            uuid: installation?.uuid,
                            address: installation?.nome,
                            street: installation?.nome,
                            number: installation?.numero,
                            cityId: installation?.cidade_id,
                            stateId: installation?.estado_id,
                            neighborhood: installation?.bairro,
                            complement: installation?.complemento,
                            zipCode: installation?.cep,
                            amount: installation?.valor_base_consumo,
                            status: installation?.situacao,
                            installationNumber: installation?.numero_instalacao,

                            percentageAllocatedEnergy: installation?.porcentagem_energia_alocada,
                            kwhContracted: installation?.kwh_contratado,
                            discount: installation?.desconto,

                            clientId: installation?.clientes_id,
                            isSelected: installation?.selecionada,
                        }

                        storeInstallations.addInstallation(otherInstallation);
                    });

                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleChangeSelectedInstallation = (selectedInstallation) => {
        console.log(selectedInstallation)
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
                        IconComponent={KeyboardArrowDownIcon}>
                        <li value={0} style={{ display: 'none' }}>
                            <span className="home">Casa</span>
                        </li>
                        {filteredInstallations?.map((otherInstallation, index) => {
                            return (
                                <li key={otherInstallation?.id} value={index + 1}>
                                    <span onClick={() => handleChangeSelectedInstallation(otherInstallation)}>{otherInstallation.street}</span>
                                </li>
                            )
                        })}
                    </SelectInstallation>
                </BoxInstallation>
            </InstallationHeader>
            <InstallationDetails>
                <p className="installationDetails">{street}, {number} - {neighborhood}, {city !== "" ? city : getCityNameByStateIdAndCityId(stateId, cityId)} - {state !== "" ? state : stateOptions[stateId]?.nome}, CEP: {formatCep(zipCode)}</p>
            </InstallationDetails>
            <InstallationFooter>
                <AddCircleIcon className="addInstallationIcon" />
                <p className="addInstallation">Nova unidade</p>
            </InstallationFooter>
        </NewDashboardInstallation>
    )
}