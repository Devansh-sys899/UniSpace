import { create } from 'zustand'
import { handleLogin, handleRegister, getMe } from '../Services/auth.service'

export const useAuthStore = create((set,get) => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    authChecked: false,

    login: async (credentials) => {
        try {
            set({ loading: true, error: null });

            const res = await handleLogin(credentials);

            set({ 
                user: res.user,
                isAuthenticated: true,
                loading: false,
            })

            return res;
        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Login Failed',
                loading: false,
            })
            throw error;
        }
    },

    register: async (credentials) => {
        try {
            set({ loading : true });
    
            const res = await handleRegister(credentials);
            set({
                user: res.user,
                isAuthenticated: true,
                loading: false
            })
            return res;
        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Login Failed',
                loading: false,
            })
            throw error;
        }
    },

    me: async () => {
        try {
            set({ loading: true });
            const res = await getMe();
            set({
                user: res.user,
                isAuthenticated: true,
                loading: false,
                authChecked: true
            })
            return res;
        } catch (error) {
            set({ 
                error: error.response?.data?.message || 'Login Failed',
                loading: false,
                authChecked: true
            })
        }
    },

    clearError: () => set({ error: null })
}))