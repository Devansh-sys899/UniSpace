import { useEffect, useState } from "react";
import { fetchUserMetrics } from "../../Services/metrics";
import BookingHero from "../../Components/Booking/BookingHero";
import QuickStats from "../../Components/Resources/QuickStats";
import ResourceList from "../Resources/ResourceList";

const UserDashboard = () => {
    const [metrics, setMetrics] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log('User dashboard mounted');

    useEffect(() => {
        const getMetrics = async () => {
            try {
                const data = await fetchUserMetrics();
                setMetrics(data);
                console.log("Metrics:", data);
            } catch (error) {
                console.error("Failed to fetch metrics", error);
            } finally {
                setLoading(false);
            }
        };

        getMetrics();
    }, []);

    if (loading) {
        return <div className="p-6 text-muted-foreground">Loading…</div>;
    }

    return (
        <main className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <QuickStats
                    label="Active Bookings"
                    value={metrics?.activeBookings ?? 0}
                    icon="time"
                    color="bg-blue-100"
                    iconColor="text-blue-600"
                />

                <QuickStats
                    label="Upcoming Bookings"
                    value={metrics?.upcomingBookings ?? 0}
                    icon="calendar"
                    color="bg-green-100"
                    iconColor="text-green-600"
                />

                <QuickStats
                    label="Total Hours Used"
                    value={metrics?.totalHoursUsed ?? 0}
                    icon="badge-check"
                    color="bg-purple-100"
                    iconColor="text-purple-600"
                />
            </div>

            <BookingHero />
            <ResourceList />
        </main>
    );
};

export default UserDashboard;