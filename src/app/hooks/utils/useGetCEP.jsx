import { useStoreAddress } from "@/app/hooks/stores/useStore";
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

const useGetCEP = (setFormState) => {

    const storeAddress = useStoreAddress();

    const fetchData = async (cep) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep/`, {
                params: { cep: cep },
            });
            if (requestSuccessful(response?.status)) {
                const address = response?.data;
                const cityId = await findCityIdByName(address?.cidade, statesAcronymOptions[address?.uf]);

                const updatedAddress = {
                    street: address?.logradouro,
                    neighborhood: address?.bairro,
                    city: address?.cidade,
                    state: address?.uf,
                    stateId: findStateId(address?.uf),
                    cityId,
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
