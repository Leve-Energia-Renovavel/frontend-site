import { allCities } from "@/app/utils/form-options/citiesOptions";
import axios from "axios";
import { requestSuccessful } from "./Validations";

export const findCityIdByName = async (cityName, stateId) => {
    try {
        const data = { estado_id: stateId }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/cidades-estados`, data)
        if (requestSuccessful(response.status)) {
            for (const city of response.data.cidades) {
                if (city.nome.toUpperCase() === cityName.toUpperCase() && city.estados_cod_estados === stateId) {
                    return city.cod_cidades;
                }
            }

        } else {
            return null
        }
    } catch (error) {
        console.error(error)
    }
};

export function getCityNameByStateIdAndCityId(stateID, cityID) {
    for (const stateCities of allCities) {
        const cities = stateCities[stateID];
        if (cities) {
            for (const city of cities) {
                const cityData = city[cityID];
                if (cityData) {
                    return cityData.nome;
                }
            }
        }
    }
    return null;
}