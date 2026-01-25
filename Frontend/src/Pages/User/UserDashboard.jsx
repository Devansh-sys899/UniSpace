import React from 'react'
import Sidebar from '../../Layout/Sidebar'
import BookingHero from '../../Components/Booking/BookingHero'
import QuickStats from '../../Components/Resources/QuickStats'

const UserDashboard = () => {
    return (
        <div>
            <Sidebar />
            <QuickStats />
            <BookingHero />
        </div>
    )
}

export default UserDashboard