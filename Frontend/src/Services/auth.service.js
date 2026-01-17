import { api } from './api';

export const handleLogin = async (credentials) => {
    const res = await api.post('/api/v1/auth/login', credentials);
    return res.data;
}

export const handleRegister = async (credentials) => {
    const res = await api.post('/api/v1/auth/register', credentials);
    return res.data;
}

export const getMe = async () => {
    const res = await api.get('/api/v1/auth/me', { withCredentials: true });
    return res.data;
}



