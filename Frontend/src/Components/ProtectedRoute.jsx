import { useAuth } from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading, authChecked } = useAuth();

    if(loading || !authChecked) {
        return <p>Check Authentication...</p>
    }

    if(!isAuthenticated) {
        return <Navigate to='/sign-in' replace />
    }

    return children;
}

export default ProtectedRoute;



