import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../Components/ProtectedRoute';
import RoleGuard from '../Components/RoleGuard';
import UserLayout from '../Layout/UserLayout';
import ManagerLayout from '../Layout/ManagerLayout';
import SignInPage from '../Pages/Auth/SignInPage';
import SignUpPage from '../Pages/Auth/SignUpPage';
import UserResourcesPage from '../Pages/Resources/UserResourcesPage';
import ManagerResourcesPage from '../Pages/Resources/ManagerResourcesPage';
import CreateResource from '../Pages/Resources/CreateResource';
import CreateBooking from '../Pages/Bookings/CreateBooking';
import CheckoutWrapper from '../Pages/Bookings/CheckoutWrapper';
import PaymentSuccess from '../Pages/Bookings/PaymentSuccess';
import ResourceDetails from '../Pages/Resources/ResourceDetails';
import UserDashboard from '../Pages/User/UserDashboard';
import UserBookings from '../Pages/User/UserBookings';
import ManagerDashboard from '../Pages/Manager/ManagerDashboard';
import HomePage from '../Pages/Public/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/resources/create' element={<CreateResource />} />
            
            <Route path= '/:id/create-booking' element={<CreateBooking />} />
            <Route path= '/:id/checkout' element={<CheckoutWrapper />} />
            <Route path= '/payment-success' element={<PaymentSuccess />} />
            //User Routes
            <Route element={
                <ProtectedRoute>
                    <RoleGuard roles={["User"]}>
                        <UserLayout />
                    </RoleGuard>  
                </ProtectedRoute>
        }>
            <Route path='/user-dashboard/bookings' element={<UserBookings />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/user-dashboard/resources/' element={<UserResourcesPage />} />
            <Route path='/user-dashboard/resources/:id' element={<ResourceDetails />} />
        </Route>
            {/* Owner Routes */}
            <Route element={
                <ProtectedRoute>
                    <RoleGuard roles={["Manager"]}>
                        <ManagerLayout />
                    </RoleGuard>  
                </ProtectedRoute>
        }>
            <Route path='/manager-dashboard' element={<ManagerDashboard />} />
            <Route path='/manager-dashboard/create-resources' element={<CreateResource />} />
            <Route path='/manager-dashboard/resources' element={<ManagerResourcesPage />} />            
        </Route>
        
        </Routes>
    )
}

export default AppRoutes;
