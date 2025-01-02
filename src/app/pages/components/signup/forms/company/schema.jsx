import { PATH_TO } from "@/app/pages/enums/globalEnums";
import * as yup from 'yup';
import { userSchema } from "../user/schema";

export const schemaValidation = async (data, router, setErrors) => {
    try {
        const validatedData = await companySchema.validate(data, { abortEarly: false })
        router.push(`${PATH_TO.REGISTER_ADDRESS}`)
        return validatedData;
    } catch (error) {
        setErrors(error.errors)
        return error.errors;
    }
};
export const companySchema = userSchema.concat(
    yup.object({
        razao_social: yup.string().required("O campo Razão Social é obrigatório"),
        cnpj: yup.string().required("O campo CNPJ é obrigatório")
    })
);