import { useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form);
        if(user.role === 'User') {
            navigate('/user-dashboard');
        } else {
            navigate('/manager-dashboard');
        }
    }

    return (
        <div className='bg-gray-100 w-full min-h-screen flex justify-center pt-10'>
            <form onSubmit={handleSubmit} className="bg-white flex flex-col gap-2 w-[428px] p-10 rounded-2xl">
                <div className="bg-blue-100 rounded-xl p-3 mx-auto">
                    <div className="w-6 h-6 bg-blue-700 rounded-lg"></div>
                </div>
                <h2 className="text-2xl font-medium text-black mt-2 text-center">UniSpace</h2>
                <p className="text-sm text-center text-gray-600 font-[300]">Smart resource booking for modern enterprises</p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 mt-4">
                        <label className="text-black font-[450] text-sm">Email</label>
                        <i className="bx bx-envelope text-base font-normal"></i>
                    </div>
                    <input type="text" name='email' value={form.email} onChange={handleChange} placeholder='you@example.com' className='border pl-4 py-2 text-sm bg-gray-100/50 text-gray-900 rounded-xl mt-1 relative right-2' />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 mt-4">
                        <label className="text-black font-[450] text-sm">Password</label>
                        <i className="bx bx-lock-alt text-base font-[550]"></i>
                    </div>
                    <input type="password" name='password' value={form.password} onChange={handleChange} placeholder='.........' className='border pl-4 py-2 text-base bg-gray-100/50 text-gray-900 rounded-xl mt-1 relative right-2' />
                </div>
                <div className="w-full flex items-center justify-between mt-6">
                    <div className="flex items-center gap-1">
                    <input type="radio" className='bg-primary border border-primary text-xl' />
                    <p className="text-sm text-gray-700">Remember Me</p>
                    </div>
                    <p className="text-blue-600 text-sm">Forgot Password?</p>
                </div>
                <button type='submit' className="w-full bg-primary flex items-center justify-center text-base text-white py-2 rounded-xl mt-4">Sign In</button>
            </form>
        </div>
    )
}

export default SignInPage