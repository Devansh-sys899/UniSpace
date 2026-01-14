import { useAuth } from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RoleGuard = ({ roles = [], children }) => {
    const { user, loading } = useAuth();

    if(loading) {
        return <p>Loading...</p>
    }
    console.log('User role:', user.role);
    if(!user || !roles.includes(user.role)) {
        return <Navigate to='/' replace />
    }

    return children;
}

export default RoleGuard;