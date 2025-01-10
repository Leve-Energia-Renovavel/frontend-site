import { create } from 'zustand';

export const useStoreMessages = create((set) => ({
    errors: [],
    notifications: [],

    setErrors: (newErrors) => set(() => ({
        errors: newErrors,
    })),

    setNotifications: (newNotifications) => set(() => ({
        notifications: newNotifications,
    })),

    clearErrors: () => set(() => ({
        errors: [],
    })),

    clearNotifications: () => set(() => ({
        notifications: [],
    })),
}));
