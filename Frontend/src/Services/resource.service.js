import { api } from './api';

export const getResources = async () => {
    const res = await api.get('/api/v1/resource');
    return res.data.data;
}

export const getResourceById = async (id) => {
    const res = await api.get(`/api/v1/resource/${id}`);
    return res.data.data;
}

export const createResource = async (credentials) => {
    const res = await api.post('/api/v1/resource/', credentials);
    return res.data.data;
}

export const deleteResource = async (id) => {
    const res = await api.delete(`/api/v1/resource/${id}`);
    return res.data;
}






