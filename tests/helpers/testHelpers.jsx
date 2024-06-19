import { getBrazilianDate } from "../utils/dateUtils";

export const dummyForm = {
    user: {
        name: `Marcos Vinicius Ferreira`,
        email: `marcos.ferreira+${getBrazilianDate()}@leveenergia.com.br`,
        phone: `11989332002`,
        registration: `123456`,
    },
    cep: {
        success: {
            beloHorizonte: `30670515`,
        },
        fail: {
            saoPauloCapital: `04408090`,
        }
    },
    urls: {
        stepOne: `${process.env.NEXT_PUBLIC_BASE_URL}/api/sign-up/step-one`,
        homologSignup: `https://new-homolog-cliente.leveenergia.com.br/signup/?uuid=`,
    },
    path: {
        home: "/"
    }

}