import { getBrazilianDate } from "../utils/dateUtils";

export const generateEmail = (scenario, partner) => {
    const dateSuffix = getBrazilianDate();
    return `marcos.ferreira+${partner}-${scenario}-${dateSuffix}@leveenergia.com.br`;
};
export const generateEmailForStressTesting = (scenario, partner, usertype) => {
    const dateSuffix = getBrazilianDate();
    return `marcos.ferreira+${usertype}-${partner}-${scenario}-${dateSuffix}@leveenergia.com.br`;
};

export const dummyForm = {
    user: {
        name: `Marcos Vinicius Ferreira`,
        email: `marcos.ferreira+${getBrazilianDate()}@leveenergia.com.br`,
        dynamicEmail: {
            success: generateEmail('success', 'mainForm'),
            failure: generateEmail('failure', 'mainForm'),
        },
        phone: `11989332002`,
        registration: `123456`,
        rg: '393613045',
        cpf: '36735996828',
        birthDate: '22021995',
        cost: '85000',
    },
    login: {
        email: "dalbenmilton@gmail.com",
        password: "123456A!",
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
        success: {
            email: generateEmail('success', 'tribanco')
        },
        failure: {
            email: generateEmail('failure', 'tribanco')
        }
    },
    martins: {
        success: {
            email: generateEmail('success', 'martins')
        },
        failure: {
            email: generateEmail('failure', 'martins')
        }
    },
    localiza: {
        success: {
            email: generateEmail('success', 'localiza')
        },
        failure: {
            email: generateEmail('failure', 'localiza')
        }
    },
    yduqs: {
        success: {
            email: generateEmail('success', 'yduqs')
        },
        failure: {
            email: generateEmail('failure', 'yduqs')
        }
    },
    tim: {
        success: {
            email: generateEmail('success', 'tim')
        },
        failure: {
            email: generateEmail('failure', 'tim')
        }
    },
    allya: {
        success: {
            email: generateEmail('success', 'allya')
        },
        failure: {
            email: generateEmail('failure', 'allya')
        }
    },
    arraia: {
        success: {
            email: generateEmail('success', 'arraia')
        },
        failure: {
            email: generateEmail('failure', 'arraia')
        }
    },
    empresas: {
        success: {
            email: generateEmail('success', 'empresas')
        },
        failure: {
            email: generateEmail('failure', 'empresas')
        }
    },
    novosClientes: {
        success: {
            email: generateEmail('success', 'novosClientes')
        },
        failure: {
            email: generateEmail('failure', 'novosClientes')
        }
    }
};
