import { create } from "zustand";

export const useStoreUser = create((set) => ({
    uuid: "",
    username: "",
    companyName: "",
    email: "",
    phone: "",
    cep: "",
    cost: 0,
    isCompany: false,
    setUUID: (uuid) => set(() => ({ uuid: uuid })),
    setUsername: (username) => set(() => ({ username: username })),
    setCompanyName: (companyName) => set(() => ({ companyName: companyName })),
    setEmail: (email) => set(() => ({ email: email })),
    setPhone: (phone) => set(() => ({ phone: phone })),
    setCost: (cost) => set(() => ({ cost: cost })),
    setCEP: (cep) => set(() => ({ cep: cep })),
}))

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