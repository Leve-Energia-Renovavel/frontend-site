import { create } from "zustand";

export const useStore = create((set) => ({
    uuid: 0,
    username: "",
    email: "",
    phone: "",
    setUUID: (uuid) => set(() => ({ uuid: uuid })),
    setUsername: (username) => set(() => ({ username: username })),
    setEmail: (email) => set(() => ({ email: email })),
    setPhone: (phone) => set(() => ({ phone: phone })),
}))