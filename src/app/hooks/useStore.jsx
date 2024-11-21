import { create } from "zustand";

export const useStoreUser = create((set) => ({
    user: {
        uuid: "",
        name: "",
        email: "",
        secondaryEmail: "",
        phone: null,
        cep: "",
        cost: 0,
        coupon: "",
        couponValue: 0,

        companyName: "",
        cnpj: "",

        discount: 0,
        isCompany: null,
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
        distributorPhotoUrl: "",
        distributorLogin: "",
        distributorPassword: "",

        hasSignContract: false,
        hasSyncDistributorData: null,

        memberGetMemberCode: "",

        invoiceDate: 0,

        isFirstAccess: null,
        hasOpenedSharedAccessModal: null, 
        hasConnectedByBackoffice: false,

        tusd: 0,
        te: 0,
        annualDiscount: 0,
        treeEquivalency: 0,
        carbonReduction: 0,
        availabilityTax: 0,
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
                secondaryEmail: "",
                phone: null,
                cep: "",
                cost: 0,
                coupon: "",
                couponValue: 0,

                companyName: "",
                cnpj: "",

                discount: 0,
                isCompany: null,
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
                distributorPhotoUrl: "",
                distributorLogin: "",
                distributorPassword: "",

                hasSignContract: false,
                hasSyncDistributorData: null,

                memberGetMemberCode: "",

                invoiceDate: 0,

                isFirstAccess: null,
                hasOpenedSharedAccessModal: null, 
                hasConnectedByBackoffice: false,

                tusd: 0,
                te: 0,
                annualDiscount: 0,
                treeEquivalency: 0,
                carbonReduction: 0,
                availabilityTax: 0,
            },
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
    updateClicksignKey: (newKey) => set((state) => ({
        data: {
            ...state.data,
            key: newKey
        }
    })),
    updateClickSign: (newClickSign) => {
        set((state) => ({
            data: {
                ...state.data,
                ...newClickSign
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
        status: "",

        hasStartedBilling: false,
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
                complement: "",
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
                status: "",

                hasStartedBilling: false,
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
        })),
    getFilteredNextBills: () => {
        const { mainInstallation } = useStoreMainInstallation.getState();
        return useStoreNextBills.getState().nextBills.filter(billing => billing.installationId === mainInstallation.id);
    }
}));



export const useStoreUserEconomy = create((set) => ({
    userEconomy: {
        value: "",
        energyValue: "",
        accumulatedEnergyValue: "",
        carbonCredits: "",
        receivedCredits: "",
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
                value: "",
                energyValue: "",
                accumulatedEnergyValue: "",
                carbonCredits: "",
                receivedCredits: "",
                economySince: "",
            },
        }))
}));

export const useStoreBillingHistory = create((set, get) => ({
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
        })),
    getFilteredBillings: () => {
        const { mainInstallation } = useStoreMainInstallation.getState();
        return get().billings.filter(billing => billing.installationId === mainInstallation.id);
    }
}));

export const useStoreCookies = create((set) => ({
    hasDataCookies: false,
    setDataCookies: () => set({ hasDataCookies: true }),
}))

const createLocalStorageSubscription = (store, key) => {
    store.subscribe(
        state => {
            localStorage.setItem(key, JSON.stringify(state));
        },
        state => state
    );
};

createLocalStorageSubscription(useStoreUser, 'user');
createLocalStorageSubscription(useStoreAddress, 'address');
createLocalStorageSubscription(useStoreCompany, 'company');
createLocalStorageSubscription(useStoreClickSign, 'clickSign');
createLocalStorageSubscription(useStoreMainInstallation, 'mainInstallation');
createLocalStorageSubscription(useStoreInstallations, 'installations');


useStoreNextBills.subscribe(
    ({ nextBills, exists }) => {
        localStorage.setItem('nextBills', JSON.stringify(nextBills));
        localStorage.setItem('exists', JSON.stringify(exists));
    },
    state => ({ nextBills: state.nextBills, exists: state.exists })
);

useStoreUserEconomy.subscribe(
    ({ userEconomy }) => {
        localStorage.setItem('userEconomy', JSON.stringify(userEconomy));
    },
    state => state.userEconomy
);


useStoreBillingHistory.subscribe(
    ({ billings }) => {
        localStorage.setItem('billingHistory', JSON.stringify(billings));
    },
    state => state.billings
);