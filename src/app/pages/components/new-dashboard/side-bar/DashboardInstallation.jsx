/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreInstallations, useStoreMainInstallation } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { formatCep } from "@/app/utils/formatters/documentFormatter";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { InstallationDetails, InstallationFooter, InstallationHeader, NewDashboardInstallation } from "./styles";

export default function DashboardInstallation() {

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const mainInstallation = JSON.parse(localStorage.getItem('mainInstallation'))

    const { street, number, neighborhood, city, state, stateId, cityId, zipCode, installationNumber } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

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
                        status: instalacao?.status
                    }

                    storeMainInstallation.updateMainInstallation(updatedMainInstallation)
                    storeInstallations.addInstallation(updatedMainInstallation);

                    outrasInstalacoes?.forEach(installation => {
                        const otherInstallation = {
                            uuid: installation?.uuid,
                            address: installation?.endereco,
                            neighborhood: installation?.bairro,
                            number: installation?.numero,
                            zipCode: installation?.cep,
                            cityId: installation?.cidade_id,
                            stateId: installation?.estado_id,
                            status: installation?.situacao,
                            installationNumber: installation?.numero_instalacao,
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


    return (
        <NewDashboardInstallation>
            <InstallationHeader>
                <InventoryIcon className="installationIcon" />
                <h6 className="installationTitle">Casa</h6>
            </InstallationHeader>
            <InstallationDetails>
                <p className="installationDetails">{street}, {number} - {neighborhood}, {city !== "" ? city : getCityNameByStateIdAndCityId(stateId, cityId)} - {state !== "" ? state : stateOptions[stateId]?.nome}, CEP: {formatCep(zipCode)}</p>
            </InstallationDetails>
            <InstallationFooter>
                <AddCircleIcon className="addInstallationIcon" />
                <p className="addInstallation">Adicionar unidade</p>
            </InstallationFooter>
        </NewDashboardInstallation>
    )
}