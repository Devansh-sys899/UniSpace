export const fetchUserMetrics = async () => {
    await new Promise((res) => setTimeout(res, 500))
    return {
        activeBookings: 3,
        upcomingBookings: 5,
        totalHoursUsed: 100,
    }
}

