import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "Conference Room", value: 40 },
    { name: "Meeting Room", value: 30 },
    { name: "Workspace", value: 20 },
    { name: "Studio", value: 10 },
];
const COLORS = ["#16a34a", "#2563eb", "#f59e0b", "#ef4444"];

const total = data.reduce((acc, cur) => acc + cur.value, 0);

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={12}
            fontWeight="600"
        >
            {`${Math.round((value / total) * 100)}%`}
        </text>
    );
};

const ResourceUtilization = () => {
    return (
        <div className="bg-white rounded-xl border p-5">
            <h3 className="font-semibold mb-4">Resource Utilization</h3>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Chart */}
                <div className="w-full lg:w-2/3 h-[260px]">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={4}
                                dataKey="value"
                                label={renderLabel}
                            >
                                {data.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="flex flex-col justify-center gap-3">
                    {data.map((item, index) => (
                        <div key={item.name} className="flex items-center gap-3">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: COLORS[index] }}
                            />
                            <p className="text-sm text-gray-600">
                                {item.name}
                                <span className="ml-2 font-medium text-gray-900">
                                    {Math.round((item.value / total) * 100)}%
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourceUtilization;