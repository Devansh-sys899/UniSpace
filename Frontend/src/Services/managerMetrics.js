export const fetchManagerMetrics = async () => {
    await new Promise((res) => setTimeout(res, 500));

    return {
        totalResources: 12, 
        activeBookings: 7,
        upcomingBookings: 4,
        monthlyRevenue: 4820,
        occupancyRate: 68
    }
}