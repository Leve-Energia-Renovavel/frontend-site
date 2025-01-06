import { USER_TYPE } from '@/app/pages/enums/globalEnums';
import { create } from 'zustand';

export const useStoreHome = create((set) => ({
    selectedUserType: USER_TYPE.PF,

    changeUserType: (usertype) => set(() => ({
        selectedUserType: usertype,
    }))
}));
