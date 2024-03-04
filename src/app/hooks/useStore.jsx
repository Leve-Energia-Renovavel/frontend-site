import { create } from "zustand";

export const useStoreUser = create((set) => ({
    user: {
        uuid: "",
        username: "",
        companyName: "",
        email: "",
        phone: null,
        cep: "",
        cost: 0,
        isCompany: false,
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
        city: "",
        state: "",
        cep: "",
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