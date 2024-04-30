import { useStoreAddress } from "@/app/hooks/useStore";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import axios from 'axios';
import { requestSuccessful } from "../../service/utils/Validations";
import { findCityIdByName } from "@/app/service/utils/addressUtilsService";
import { statesAcronymOptions } from "@/app/utils/form-options/statesIdOptions";

function findStateId(uf) {
    for (const id in stateOptions) {
        if (stateOptions[id].sigla === uf) {
            return id;
        }
    }
    return "";
}

const useGetCEP = () => {
    const storeAddress = useStoreAddress();
    const fetchData = async (cep) => {
        var response = null
        try {
            response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                params: { cep: cep }
            });

            if (requestSuccessful(response?.status)) {
                const address = response?.data;

                storeAddress.updateAddress({
                    street: address?.logradouro,
                    neighborhood: address?.bairro,
                    city: address?.cidade,
                    state: address?.uf,
                    stateId: findStateId(address?.uf),
                    cityId: await findCityIdByName(address?.cidade, statesAcronymOptions[address?.uf]),
                    cep: address?.cep,
                });
            }
        } catch (error) {
            console.error('Error fetching CEP data:', error);
        }
        return response
    };

    return fetchData;
};

export default useGetCEP;
