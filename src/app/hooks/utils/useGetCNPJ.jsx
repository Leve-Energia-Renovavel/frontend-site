import { useStoreCompany } from "@/app/hooks/stores/useStore";
import axios from "axios";
import { requestSuccessful } from "../../service/utils/Validations";

const useGetCNPJ = () => {
    const storeCompany = useStoreCompany()

    const fetchData = async (value) => {
        const cnpj = value?.replace(/\D/g, '');
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_FETCH_CNPJ}/${cnpj}`);
            if (requestSuccessful(response?.status)) {
                const company = response?.data?.estabelecimento
                storeCompany.updateCompany({
                    name: company?.nome_fantasia,
                    phone: company?.ddd1 + company?.telefone1,
                    corporateReason: response?.data?.razao_social,
                    cnpj: company?.cnpj,
                })
            }

        } catch (error) {
            console.error('Error fetching CNPJ data:', error);
        }
    }
    return fetchData;

}

export default useGetCNPJ;