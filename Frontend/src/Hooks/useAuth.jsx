import { useEffect } from 'react';
import { useAuthStore } from '../Store/Auth.Store';

export const useAuth = () => {
    const {
        user,
        isAuthenticated,
        authChecked,
        loading,
        error,
        login,
        register,
        me,
    } = useAuthStore();

    useEffect(() => {
        if(!authChecked) {
            me();
        }
    }, [authChecked]);
    
    console.log('[Auth]:', { user, isAuthenticated, loading });
    return {
        user,
        isAuthenticated,
        loading,
        authChecked,
        error,
        login,
        register,
        me,
    }
}