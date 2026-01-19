import { useQuery, useMutation } from '@tanstack/react-query'
import { getAllBookings, getMyBookings, getResourceBookings, createBooking } from '../Services/booking.service'


export const useCreateBooking = () => {
    return useMutation({
        mutationFn: createBooking
    })
}

export const useMyBookings = () => {
    return useQuery({
        queryKey: ['my-bookings'],
        queryFn: getMyBookings
    })
}

export const useResourceBookings = () => {
    return useQuery({
        queryKey: ['resource-bookings'],
        queryFn: getResourceBookings
    })
}
export const useAllBookings = () => {
    return useQuery({
        queryKey: ['all-bookings'],
        queryFn: getAllBookings
    })
}

