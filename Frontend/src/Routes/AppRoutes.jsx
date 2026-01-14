import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../Components/ProtectedRoute';
import RoleGuard from '../Components/RoleGuard';
import PublicLayout from '../Layout/PublicLayout';
import UserLayout from '../Layout/UserLayout';
import OwnerLayout from '../Layout/OwnerLayout';
import SignInPage from '../Pages/Auth/SignInPage';
import SignUpPage from '../Pages/Auth/SignUpPage';
import UserDashboard from '../Pages/User/UserDashboard';
import UserBookings from '../Pages/User/UserBookings';
import OwnerDashboard from '../Pages/Owner/OwnerDashboard';
import OwnerResources from '../Pages/Owner/OwnerResources';
import HomePage from '../Pages/Public/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            //Public Routes
            <Route element={<PublicLayout />} />
            <Route path='sign-in' element={<SignInPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
            //User Routes
            <Route element={
                <ProtectedRoute>
                    <RoleGuard roles={["User"]}>
                        <UserLayout />
                    </RoleGuard>  
                </ProtectedRoute>
        }>
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/user-dashboard/bookings' element={<UserBookings />} />
        </Route>
            //Owner Routes
            <Route element={
                <ProtectedRoute>
                    <RoleGuard roles={["Owner"]}>
                        <OwnerLayout />
                    </RoleGuard>  
                </ProtectedRoute>
        }>
            <Route path='/owner-dashboard' element={<OwnerDashboard />} />
            <Route path='/owner-dashboard/resources' element={<OwnerResources />} />            
        </Route>
        <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes;
