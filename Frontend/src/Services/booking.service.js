import { api } from './api';

export const createBooking = async (data) => {
    const res = await api.post('/api/v1/booking/create-intent', data);
    return res.data;
}

export const verifyPayment = async (data) => {
    const res = await api.post('/api/v1/booking/verify-payment', data);
    return res.data;
}

export const getMyBookings = async () => {
    const res = await api.get('/api/v1/booking/my');
    return res.data;
}

export const getAllBookings = async () => {
    const res = await api.get('/api/v1/booking/');
    return res.data;
}

export const getResourceBookings = async (id) => {
    const res = await api.get(`/api/v1/booking/${id}`);
    return res.data;
}

