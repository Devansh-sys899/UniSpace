import { useState } from "react";
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    addMonths,
    subMonths,
    format,
    isSameMonth,
    isSameDay,
    isBefore,
} from "date-fns";


export const Calendar = ({ bookedDates = [], onSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(startMonth);
    const startDate = startOfWeek(startMonth);
    const endDate = endOfWeek(endMonth);

    const rows = [];
    let day = startDate;

    while (day <= endDate) {
        const days = [];

        for (let i = 0; i < 7; i++) {
            const cloneDay = new Date(day);
            const isDisabled =
                isBefore(cloneDay, new Date()) ||
                bookedDates.some((d) => isSameDay(new Date(d), cloneDay));

            days.push(
                <button
                    key={cloneDay.toISOString()}
                    disabled={isDisabled}
                    onClick={() => {
                        setSelectedDate(cloneDay);
                        onSelect?.(cloneDay);
                    }}
                    className={`h-10 w-10 rounded-lg text-sm font-medium
            ${!isSameMonth(cloneDay, startMonth) && "text-muted-foreground"}
            ${isSameDay(cloneDay, selectedDate) && "bg-gray-900 text-white"}
            ${isDisabled && "opacity-40 cursor-not-allowed"}
            hover:bg-accent transition`}
                >
                    {format(cloneDay, "d")}
                </button>
            );

            day = addDays(day, 1);
        }

        rows.push(
            <div key={day.toISOString()} className="text-center grid grid-cols-7 gap-4 relative right-2">
                {days}
            </div>
        );
    }

    return (
        <div className="space-y-4 border bg-gray-100/25 border-border p-6 w-full rounded-lg">
            {/* Header */}
            <div className="w-full flex items-center justify-between">
                <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                    <i className="bx bx-left-arrow-alt" />
                </button>

                <h3 className="font-semibold">
                    {format(currentMonth, "MMMM yyyy")}
                </h3>

                <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                    <i className="bx bx-right-arrow-alt" />
                </button>
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-4 text-xs text-black-800 font-normal">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d}>{d}</div>
                ))}
            </div>

            {/* Calendar */}
            <div className="grid grid-rows-5 text-center">{rows}</div>
        </div>
    );
};

export const TimeSlots = ({ selectedSlots, setSelectedSlotes }) => {
    const timeSlots = [
        "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00",
        "15:00", "16:00", "17:00"
    ]
    const toggleSlot = (slot) => {
        setSelectedSlotes((prev) => prev.includes(slot) ? prev.filter(s => s !== slot) : [...prev, slot]);
    }

    return (
        <div className="grid grid-cols-3 gap-2">
            {timeSlots.map(slot => (
                <button
                    key={slot}
                    className={`px-3 py-2 rounded-lg font-medium text-sm border transition ${selectedSlots.includes(slot) ? 'bg-gray-900 text-white border-gray-600' : 'hover:bg-accent'}`}
                    onClick={() => toggleSlot(slot)}
                >
                    {slot}
                </button>
            ))}
        </div>
    )
}