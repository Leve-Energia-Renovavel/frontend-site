export const LEVE_WHATSAPP_NUMBER = "551131818210";

export const USER_COST = {
    DEFAULT_VALUE: 200,
    STEP: 10,
    MIN: 200,
    MAX: 3000,
};

export const DISTRIBUTOR_STATUS = {
    ACTIVE: "ATIVO",
    INACTIVE: "INATIVO",
};

export const USER_TYPE = {
    PJ: "PJ",
    PF: "PF",
    RESIDENCIA: "RESIDENCIA",
    EMPRESA: "EMPRESA",
};

export const ENVIRONMENTAL_IMPACT = {
    REDUCED_CARBON: 0.709,
    TREE_EQUIVALENCY: 364,
};
export const PATH_TO = {
    HOME: "/",
    ECONOMY_SIMULATION: "/simulacao-de-economia/",
    REGISTER_USER: "/cadastro/titular/",
    REGISTER_ADDRESS: "/cadastro/imovel/",
    REGISTER_CONTRACT: "/cadastro/assinatura-contrato/",
    LOGIN: "/login/",
    OUT_OF_RANGE: "/fail/out-of-range",
    LOW_COST: "/fail/low-cost",
    DASHBOARD: "/dashboard/",
    INSTALLATIONS: "/dashboard/installations",
};

export const CIDADE = {
    ARACAJU: {
        label: "Aracaju",
        cep: "49000-000",
        state: "PE"
    },
    BELO_HORIZONTE: {
        label: "Belo Horizonte",
        cep: "30110-000",
        state: "MG"
    },
    GOIANIA: {
        label: "Goiânia",
        cep: "74000-000",
        state: "GO"
    },
    GUARUJA: {
        label: "Guarujá",
        cep: "11410-000",
        state: "SP"
    },
    PAULISTA: {
        label: "Paulista",
        cep: "53433-480",
        state: "PE"
    },
    PIRATININGA: {
        label: "Piratininga",
        cep: "17490-011",
        state: "SP"
    },
    RECIFE: {
        label: "Recife",
        cep: "50010-000",
        state: "PE"
    },
    RIO_DE_JANEIRO: {
        label: "Rio de Janeiro",
        cep: "20010-000",
        state: "RJ"
    },
    SOCORRO: {
        label: "Socorro",
        cep: "13960-000",
        state: "SP"
    },
    SAO_PAULO: {
        label: "São Paulo",
        cep: "01001-000",
        state: "SP"
    },
    SAO_VICENTE: {
        label: "São Vicente",
        cep: "11310-000",
        state: "SP"
    }
};

export const DISTRIBUTOR = {
    CEMIG: "CEMIG",
    COPEL: "COPEL",
    CPFL_PAULISTA: "CPFL PAULISTA",
    CPFL_PIRATININGA: "CPFL PIRATININGA",
}


export const ERROR_MESSAGE = {
    UNAUTHENTICATED: "Unauthenticated.",
    CONSUMER_NOT_FOUND: "Consumidor não encontrado",
}

export const HOME_FORM_ID = "calculateYourEconomy"


