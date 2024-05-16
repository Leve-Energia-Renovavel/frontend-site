"use client"

import { useStoreAddress } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { InstallationDetails, InstallationFooter, InstallationHeader, NewDashboardInstallation } from "../styles";

export default function DashboardInstallation() {

    const storeAddress = useStoreAddress()
    const address = JSON.parse(localStorage.getItem('address'))

    const { street, number, neighborhood, city, state, stateId, cityId, cep, installationNumber } = address?.address ?? (storeAddress?.address || {})

    useEffect(() => {
        const fetchUserData = async () => {

            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
                if (requestSuccessful(response?.status)) {
                    const consumidor = response?.data?.consumidor

                    const updatedAddress = {
                        street: consumidor?.endereco,
                        number: consumidor?.numero,
                        neighborhood: consumidor?.bairro,
                        city: getCityNameByStateIdAndCityId(consumidor?.estado_id, consumidor?.cidade_id),
                        cityId: consumidor?.cidade_id,
                        state: stateOptions[consumidor?.estado_id]?.sigla,
                        stateId: consumidor?.estado_id,
                        cep: consumidor?.cep,
                        hasFetchedData: true,
                    }
                    storeAddress.updateAddress(updatedAddress)

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
                <h6 className="installationTitle">Casa BH</h6>
            </InstallationHeader>
            <InstallationDetails>
                <p className="installationDetails">{street}, {number} - {neighborhood}, {city} - {state}, {cep}</p>
            </InstallationDetails>
            <InstallationFooter>
                <AddCircleIcon className="addInstallationIcon" />
                <p className="addInstallation">Adicionar unidade</p>
            </InstallationFooter>
        </NewDashboardInstallation>
    )
}