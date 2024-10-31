import { create } from 'zustand';

interface AuthState {
  isSubscribed: boolean;
  setSubscribed: (status: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isSubscribed: false,
  setSubscribed: (status) => set({ isSubscribed: status }),
}));