import React from 'react';
import AuthForm from '../../components/AuthForm';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <AuthForm mode="register" />
        </div>
    );
};

export default Register;