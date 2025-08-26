import { useState } from 'react';
import { AuthForm } from '../../components/AuthForm';

const LoginPage = () => {
  const [error, setError] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      // Implement login logic here
      // For example, call an API to authenticate the user
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;