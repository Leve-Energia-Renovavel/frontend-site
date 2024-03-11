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

        hasSignContract: false,
        hasSyncDistributorData: false,

        memberGetMemberCode: "",
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


export const useStoreMainInstallation = create((set) => ({
    mainInstallation: {
        uuid: "",
        id: "",
        address: "",
        street: "",
        number: "",
        neighborhood: "",
        cityId: 0,
        stateId: 0,
        city: "",
        state: "",
        cep: "",
        installationNumber: "",

        percentageAllocatedEnergy: "",
        kwhContracted: "",
        discount: "",

        clientId: "",
        isSelected: "",
        status: ""


    },
    updateMainInstallation: (newMainInstallation) =>
        set((state) => ({
            mainInstallation: {
                ...state.mainInstallation,
                ...newMainInstallation
            }
        })),
    clearMainInstallation: () =>
        set(() => ({
            mainInstallation: {
                uuid: "",
                id: "",
                address: "",
                street: "",
                number: "",
                neighborhood: "",
                cityId: 0,
                stateId: 0,
                city: "",
                state: "",
                cep: "",
                installationNumber: "",

                percentageAllocatedEnergy: "",
                kwhContracted: "",
                discount: "",

                clientId: "",
                isSelected: "",
                status: ""
            }
        }))
}));


export const useStoreInstallations = create((set) => ({
    installations: [],
    addInstallation: (newInstallation) => set((state) => {
        const exists = state.installations.some(installation => installation.uuid === newInstallation.uuid);
        if (!exists) {
            return {
                installations: [...state.installations, newInstallation]
            };
        }
        return state;
    }),
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



export const useStoreNextBills = create((set) => ({
    exists: false,
    nextBills: [],
    updateExists: (exists) => set({ exists }),
    addNextBill: (newBilling) => set((state) => {
        if (newBilling.value) {
            const exists = state.nextBills.some(bill => bill.uuid === newBilling.uuid);
            if (!exists) {
                return {
                    nextBills: [...state.nextBills, newBilling]
                };
            }
        }
        return state;
    }),
    clearNextBills: () =>
        set(() => ({
            nextBills: []
        }))
}));



export const useStoreUserEconomy = create((set) => ({
    userEconomy: {
        value: 0,
        energyValue: 0,
        accumulatedEnergyValue: 0,
        carbonCredits: 0,
        receivedCredits: 0,
        economySince: "",
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
                value: 0,
                energyValue: 0,
                accumulatedEnergyValue: 0,
                carbonCredits: 0,
                receivedCredits: 0,
                economySince: "",
            },
        }))
}));

export const useStoreBillingHistory = create((set) => ({
    billings: [],
    addBilling: (newBilling) => set((state) => {
        if (newBilling.value) {
            const exists = state.billings.some(bill => bill.uuid === newBilling.uuid);
            if (!exists) {
                return {
                    billings: [...state.billings, newBilling]
                };
            }
        }
        return state;
    }),
    clearBillings: () =>
        set(() => ({
            billings: []
        }))
}));