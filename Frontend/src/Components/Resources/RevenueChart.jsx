import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { day: 'Mon', revenue: 500},
    { day: 'Tue', revenue: 750},
    { day: 'Wed', revenue: 620},
    { day: 'Thu', revenue: 900},
    { day: 'Fri', revenue: 1200},
]

const RevenueChart = () => {
    return (
        <div className="bg-white rounded-xl border p-5">
            <h2 className="font-semibold mb-4">Revenue Overview</h2>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={55} />
                </BarChart>         
            </ResponsiveContainer>
        </div>
    )
}

export default RevenueChart;