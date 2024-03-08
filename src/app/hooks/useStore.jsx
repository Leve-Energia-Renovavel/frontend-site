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
        const newValue = JSON.parse(newClickSign);
        set((state) => ({
            data: {
                ...state.clicksign_reg,
                ...newValue.batch
            }
        }))
    }
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
    }))
}));