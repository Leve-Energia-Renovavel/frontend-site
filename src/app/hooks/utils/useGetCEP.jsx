import { useStoreAddress } from "@/app/hooks/stores/useStore";
import { findCityIdByName, getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { statesAcronymOptions } from "@/app/utils/form-options/statesIdOptions";
import axios from 'axios';
import { requestSuccessful } from "../../service/utils/Validations";

function findStateId(uf) {
    for (const id in stateOptions) {
        if (stateOptions[id].sigla === uf) {
            return id;
        }
    }
    return "";
}

const useGetCEP = (setFormState) => {

    const storeAddress = useStoreAddress();

    const fetchData = async (cep) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep/`, {
                params: { cep: cep },
            });
            if (requestSuccessful(response?.status)) {
                const address = response?.data;
                const stateId = findStateId(address?.uf);
                const cityId = await findCityIdByName(address?.cidade, statesAcronymOptions[address?.uf]);
                const cityName = getCityNameByStateIdAndCityId(stateId, cityId);

                const updatedAddress = {
                    street: address?.logradouro,
                    neighborhood: address?.bairro,
                    city: cityName,
                    state: address?.uf,
                    stateId: stateId,
                    cityId: cityId,
                    cep: address?.cep,
                };

                storeAddress.updateAddress(updatedAddress);

                setFormState((prevState) => ({
                    ...prevState,
                    ...updatedAddress,
                }));
            }
        } catch (error) {
            console.error('Error fetching CEP data:', error);
        }
    };

    return fetchData;
};

export default useGetCEP;
