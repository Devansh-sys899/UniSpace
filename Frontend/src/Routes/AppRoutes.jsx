import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../Components/ProtectedRoute';
import RoleGuard from '../Components/RoleGuard';
import PublicLayout from '../Layout/PublicLayout';
import UserLayout from '../Layout/UserLayout';
import OwnerLayout from '../Layout/OwnerLayout';
import SignInPage from '../Pages/Auth/SignInPage';
import SignUpPage from '../Pages/Auth/SignUpPage';
import ResourceList from '../Pages/Resources/ResourceList';
import CreateResource from '../Pages/Resources/CreateResource';
import CreateBooking from '../Pages/Bookings/CreateBooking';
import ResourceDetails from '../Pages/Resources/ResourceDetails';
import UserDashboard from '../Pages/User/UserDashboard';
import UserBookings from '../Pages/User/UserBookings';
import OwnerDashboard from '../Pages/Owner/OwnerDashboard';
import OwnerResources from '../Pages/Owner/OwnerResources';
import HomePage from '../Pages/Public/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/resources' element={<ResourceList />} />  
            <Route path='/resources/create' element={<CreateResource />} />
            <Route path= '/resources/:id' element={<ResourceDetails />} />
            <Route path= '/:id/create-booking' element={<CreateBooking />} />
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
            {/* Owner Routes */}
            <Route element={
                <ProtectedRoute>
                    <RoleGuard roles={["Manager"]}>
                        <OwnerLayout />
                    </RoleGuard>  
                </ProtectedRoute>
        }>
            <Route path='/owner-dashboard' element={<OwnerDashboard />} />
            <Route path='/owner-dashboard/resources' element={<ResourceList />} />            
        </Route>
        
        </Routes>
    )
}

export default AppRoutes;
