import React from 'react';
import { useAuth } from '../../Hooks/useAuth';

const SignInPage = () => {
    const { register, login, me } = useAuth();

    return (
        <div> 
            <button
            onClick={() => {
                login({ email: 'dishanahar791@gmail.com', password: 'dev@75211' })
                me();
            }}
            >Login</button>
            
        </div>
    )
}

export default SignInPage