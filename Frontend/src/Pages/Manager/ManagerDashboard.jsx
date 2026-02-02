import { useState, useEffect } from 'react';
import { fetchManagerMetrics } from '../../Services/managerMetrics';
import QuickStats from '../../Components/Resources/QuickStats';
import RevenueChart from '../../Components/Resources/RevenueChart';
import ResourceUtilization from '../../Components/Resources/ResourceUtilization';
import ResourcePerformanceTable from '../../Components/Resources/ResourcePerformanceTable';

const ManagerDashboard= () => {
    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        fetchManagerMetrics().then(data => setMetrics(data));
    }, []);

    if(!metrics) {
        return <div>Loading...</div>;
    }

    return (
        <main className="w-full p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <QuickStats label="Total Resources" value={metrics.totalResources} icon="buildings" color="bg-blue-100" iconColor='text-blue-600' />
                <QuickStats label="Active Bookings" value={metrics.activeBookings} icon="time" color="bg-green-100" iconColor='text-green-600'/>
                <QuickStats label="Total Revenue" value={metrics.monthlyRevenue} icon="dollar" color="bg-red-100" iconColor='text-red-600'/>
                <QuickStats label="Occupancy Rate" value={metrics.occupancyRate} icon="bar-chart" color="bg-purple-100" iconColor='text-purple-600'/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ResourceUtilization />
                <RevenueChart /> 
            </div>
            <div className='mt-6'>
                <ResourcePerformanceTable />
            </div>
        </main>
    )
}

export default ManagerDashboard;