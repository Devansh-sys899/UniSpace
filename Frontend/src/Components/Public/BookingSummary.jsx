export const BookingSummary = ({ date, slots }) => {
    const hours = slots.length;
    const price = hours * 200;

    if(!date || !hours) return null

    return (
        <div className="border rounded-xl p-4 space-y-2 bg-gray-100/25">
            <p className="text-lg text-surface_dark font-semibold">Booking Summary</p>

        <div className="text-base">
            <p><b>Date:</b> {date.toDateString()}</p>
            <p><b>Hours:</b> {hours}</p>
            <p><b>Total:</b> {price}</p>
        </div>
        </div>
    )
}

