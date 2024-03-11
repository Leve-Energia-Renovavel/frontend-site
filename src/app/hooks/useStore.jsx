import { create } from "zustand";

export const useStoreUser = create((set) => ({
    user: {
        uuid: "",
        name: "",
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

        clientId: "",
        accessToken: "",
        refreshToken: "",

        distributor: "",
        hasSyncDistributorData: false,

        memberGetMemberCode: "X36UY",
    },
    updateUser: (newUser) =>
        set((state) => ({
            user: {
                ...state.user,
                ...newUser
            }
        })),
    clearUser: () =>
        set(() => ({
            user: {
                uuid: "",
                name: "",
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
                clientId: "",
                accessToken: "",
                refreshToken: "",

                distributor: "",
                hasSyncDistributorData: false,

                memberGetMemberCode: "",
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
        })),
    clearAddress: () =>
        set(() => ({
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
        })),
    clearCompany: () =>
        set(() => ({
            company: {
                name: "",
                email: "",
                phone: "",
                corporateReason: "",
                cnpj: "",
                responsibleName: "",
            }
        }))
}));

export const useStoreClickSign = create((set) => ({
    data: {
        key: "",
        request_signature_key: "",
        url: "",
        signer_key: "",
        document_keys: [],
        summary: false,
        created_at: "",
        updated_at: "",
        opened: false
    },
    updateClickSign: (newClickSign) => {
        set((state) => ({
            data: {
                ...state.clicksign_reg,
                ...newClickSign.batch
            }
        }))
    },
    clearClickSign: () =>
        set(() => ({
            data: {
                key: "",
                request_signature_key: "",
                url: "",
                signer_key: "",
                document_keys: [],
                summary: false,
                created_at: "",
                updated_at: "",
                opened: false
            }
        }))
}));


export const useStoreInstallations = create((set) => ({
    installations: [],
    addInstallation: (newInstallation) => set((state) => ({
        installations: [...state.installations, newInstallation]
    })),
    updateInstallation: (index, updatedInstallation) => set((state) => ({
        installations: state.installations.map((installation, i) =>
            i === index ? { ...installation, ...updatedInstallation } : installation
        )
    })),
    deleteInstallation: (index) => set((state) => ({
        installations: state.installations.filter((_, i) => i !== index)
    })),
    clearInstallations: () =>
        set(() => ({
            installations: []
        }))
}));


export const useStoreNextBill = create((set) => ({
    exists: true,
    nextBill: {
        referenceMonth: "01/2024",
        value: "99,99",
        dueDate: "05/04/2024",
        paymentStatus: "pendente",
    },
    updateNextBill: (newBill) =>
        set((state) => ({
            nextBill: {
                ...state.nextBill,
                ...newBill
            }
        })),
    clearCompany: () =>
        set(() => ({
            nextBill: {
                referenceMonth: "",
                value: "",
                dueDate: "",
                paymentStatus: "",
            }
        }))
}));



export const useStoreUserEconomy = create((set) => ({
    userEconomy: {
        value: 571.99,
        energyValue: 7533,
        accumulatedEnergyValue: 0,
        co2: 0,
        economySince: "18/09/2023",
    },
    updateUserEconomy: (newUserEconomy) =>
        set((state) => ({
            userEconomy: {
                ...state.userEconomy,
                ...newUserEconomy
            }
        })),
    clearUser: () =>
        set(() => ({
            userEconomy: {
                value: 571.99,
                energyValue: 7533,
                accumulatedEnergyValue: 0,
                co2: 0,
                economySince: "18/09/2023",
            },
        }))
}));

export const useStoreBillingHistory = create((set) => ({
    billings: [
        {
            id: "1",
            referenceYear: "2023",
            referenceMonth: "Julho",
            value: "R$ 999,00",
            status: "Pago"
        },
        {
            id: "2",
            referenceYear: "2023",
            referenceMonth: "Julho",
            value: "R$ 999,00",
            status: "Pago"
        },
        {
            id: "3",
            referenceYear: "2023",
            referenceMonth: "Julho",
            value: "R$ 999,00",
            status: "Pago"
        },
    ],
    addBilling: (newBilling) => set((state) => ({
        billings: [...state.billings, newBilling]
    })),
    clearBillings: () =>
        set(() => ({
            billings: []
        }))
}));