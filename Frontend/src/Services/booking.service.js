import { api } from './api';

export const createBooking = async (data) => {
    const res = await api.post('/api/v1/booking/create-intent', data);
    return res.data;
}

export const getBooking = async (data) => {
    const res = await api.post('/api/v1/booking/create-intent', data);
    return res.data;
}

