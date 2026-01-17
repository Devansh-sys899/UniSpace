import React from 'react';
import { useAuth } from '../../Hooks/useAuth';

const SignInPage = () => {
    const { register, login, me } = useAuth();

    return (
        <div> 
            <button
            onClick={() => {
                login({ email: 'manager@gmail.com', password: 'manager@1234' })
                me();
            }}
            >Login</button>
            
        </div>
    )
}

export default SignInPage