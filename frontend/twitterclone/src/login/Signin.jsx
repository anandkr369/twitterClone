import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            setMessage('Login successful!');
            localStorage.setItem('token', response.data.token);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Error logging in');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-1/3 bg-black rounded-lg shadow-lg p-8">
                <div className="text-4xl text-center text-white mb-8">Sign in to Twitter</div>
                {message && <p className="text-red-500 text-center">{message}</p>}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="w-full bg-blue-500 text-white font-bold px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                    <div className="text-center text-white text-sm">
                        <a href="#" className="underline">Forgot password?</a>
                    </div>
                </form>
                <div className="text-center text-sm text-gray-300 mt-4">
                    Not on Twitter yet? <a href="#" className="underline">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Signin;
