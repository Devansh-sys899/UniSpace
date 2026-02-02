const ResourcePerformanceTable = () => {
    const resources = [
        {
            id: 1,
            name: "Conference Room A",
            type: "Room",
            totalBookings: 120,
            utilization: 78,
            revenue: 96000,
            rating: 4.6,
            status: "Active"
        },
        {
            id: 2,
            name: "Computer Lab",
            type: "Lab",
            totalBookings: 85,
            utilization: 64,
            revenue: 72000,
            rating: 4.2,
            status: "Active"
        },
        {
            id: 3,
            name: "Auditorium",
            type: "Hall",
            totalBookings: 40,
            utilization: 35,
            revenue: 110000,
            rating: 4.8,
            status: "Maintenance"
        },
        {
            id: 4,
            name: "Study Room 3",
            type: "Room",
            totalBookings: 95,
            utilization: 82,
            revenue: 54000,
            rating: 4.1,
            status: "Active"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">
                Resource Performance Breakdown
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b text-gray-500">
                            <th className="text-left py-3">Resource</th>
                            <th className="text-left">Type</th>
                            <th className="text-center">Bookings</th>
                            <th className="text-center">Utilization</th>
                            <th className="text-right">Revenue</th>
                            <th className="text-center">Rating</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resources.map((resource) => (
                            <tr
                                key={resource.id}
                                className="border-b last:border-none hover:bg-gray-50"
                            >
                                <td className="py-3 font-medium">
                                    {resource.name}
                                </td>

                                <td>{resource.type}</td>

                                <td className="text-center">
                                    {resource.totalBookings}
                                </td>

                                <td className="text-center">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${resource.utilization >= 75
                                                ? "bg-green-100 text-green-700"
                                                : resource.utilization >= 50
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {resource.utilization}%
                                    </span>
                                </td>

                                <td className="text-right font-medium">
                                    ${resource.revenue.toLocaleString()}
                                </td>

                                <td className="text-center">
                                    ⭐ {resource.rating}
                                </td>

                                <td className="text-center">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${resource.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-200 text-gray-700"
                                            }`}
                                    >
                                        {resource.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResourcePerformanceTable;