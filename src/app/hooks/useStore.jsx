import { create } from "zustand";

export const useStoreUser = create((set) => ({
    user: {
        uuid: "",
        username: "",
        email: "",
        phone: null,
        cep: "",
        cost: 0,

        companyName: "",

        discount: 0,
        isCompany: false,
        isLowCost: false,
        isOutOfRange: false,

        birthDate: "",
        rg: "",
        cpf: "",
        maritalStatus: "",
        profession: "",
        nationality: "",

    },
    updateUser: (newUser) =>
        set((state) => ({
            user: {
                ...state.user,
                ...newUser
            }
        }))
}));

export const useStoreAddress = create((set) => ({
    address: {
        street: "",
        number: "",
        neighborhood: "",
        cityId: 0,
        stateId: 0,
        city: "",
        state: "",
        cep: "",
        installationNumber: "",
    },
    updateAddress: (newAddress) =>
        set((state) => ({
            address: {
                ...state.address,
                ...newAddress
            }
        }))
}));

export const useStoreCompany = create((set) => ({
    company: {
        name: "",
        email: "",
        phone: "",
        corporateReason: "",
        cnpj: "",
        responsibleName: "",
    },
    updateCompany: (newCompany) =>
        set((state) => ({
            company: {
                ...state.company,
                ...newCompany
            }
        }))
}));