import { getBrazilianDate } from "../utils/dateUtils";

const generateEmail = (partner) => {
    const dateSuffix = getBrazilianDate();
    return `marcos.ferreira+${partner}-${dateSuffix}@leveenergia.com.br`;
};

export const dummyForm = {
    user: {
        name: `Marcos Vinicius Ferreira`,
        email: `marcos.ferreira+${getBrazilianDate()}@leveenergia.com.br`,
        phone: `11989332002`,
        registration: `123456`,
        rg: '393613045',
        cpf: '36735996828',
        birthDate: '22021995',
        cost: '85000',
    },
    login: {
        email: "dalbenmilton@gmail.com",
        password: "1234567",
        invalidPassword: "asdasdasd",
    },
    company: {
        name: "Empresa de Churros do Marcos"
    },
    address: {
        number: '1234',
        complement: 'test',
        installationNumber: "123456789"
    },
    cep: {
        success: {
            beloHorizonte: `30670515`,
        },
        fail: {
            saoPauloCapital: `04408090`,
            saoPauloCapitalSecond: `08311010`,
        }
    },
}

export const dummyUrl = {
    stepOne: `https://backofficehomolog.leveenergia.com.br/api/sign-up/step-one`,
    storeClient: `https://backofficehomolog.leveenergia.com.br/api/sign-up`,
    login: `https://backofficehomolog.leveenergia.com.br/api/login`,
    lpStepOne: `https://backofficehomolog.leveenergia.com.br/api/sign-up/lp/*`,
    homologSignup: `https://new-homolog-cliente.leveenergia.com.br/signup/?uuid=`,
}
export const destinationPattern = {
    signup: `/signup/?uuid=`,
    contractSignature: `/signup/contract-signature/?uuid=`,
    outOfRange: `/fail/out-of-range`,
    dashboard: `/dashboard`,
    login: `/login`,
}

export const dummyPath = {
    home: "/",
    signup: "/signup/?uuid=",
    login: "/login",
    dashboard: "/dashboard",
    lp: {
        tribanco: `https://new-homolog-cliente.leveenergia.com.br/lp/tribanco/`,
        martins: `https://new-homolog-cliente.leveenergia.com.br/lp/martins/`,
        tim: `https://new-homolog-cliente.leveenergia.com.br/lp/tim/`,
        allya: `https://new-homolog-cliente.leveenergia.com.br/lp/allya/`,
        localiza: `https://new-homolog-cliente.leveenergia.com.br/lp/localiza/`,
        yduqs: `https://new-homolog-cliente.leveenergia.com.br/lp/yduqs/`,
        novosClientes: `https://new-homolog-cliente.leveenergia.com.br/lp/novos-clientes/`,
        empresas: `https://new-homolog-cliente.leveenergia.com.br/lp/empresas/`,
    }
}

export const dummyFormLP = {
    tribanco: {
        email: generateEmail('tribanco')
    },
    martins: {
        email: generateEmail('martins')
    },
    localiza: {
        email: generateEmail('localiza')
    },
    yduqs: {
        email: generateEmail('yduqs')
    },
    tim: {
        email: generateEmail('tim')
    },
    allya: {
        email: generateEmail('allya')
    },
    arraia: {
        email: generateEmail('arraia')
    },
    empresas: {
        email: generateEmail('empresas')
    },
    novosClientes: {
        email: generateEmail('novosClientes')
    },
};
