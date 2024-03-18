import axios from "axios";

export const findCityIdByName = async (cityName) => {
    try {
        const data = { estado_id: stateValue.cod_estados }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/cidades-estados`, data)
        if (requestSuccessful(response.status)) {
            for (const city of response.data.cidades) {
                if (city.nome.toUpperCase() === cityName.toUpperCase()) {
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