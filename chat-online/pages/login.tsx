// src/components/Login.tsx
import React, { useState } from 'react';
interface LoginProps {
          onLogin: (username: string, password: string) => void;
}
const Login: React.FC<LoginProps> = ({onLogin}) => {
        const [username, setUsername] = useState<string>('');
        const [password, setPassword] = useState<string>('');

        const handleLogin = () => {
                onLogin(username, password);
                // Aquí puedes agregar la lógica de autenticación, por ahora, simplemente imprime en la consola
                console.log(`Intento de inicio de sesión - Usuario: ${username}, Contraseña: ${password}`);
        };

        return (
                <div className="min-h-screen flex items-center justify-center">
                        <div className="bg-white p-8 rounded shadow-md">
                                <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
                                <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Usuario
                                        </label>
                                        <input
                                                type="text"
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                className="w-full p-2 border rounded-md"
                                        />
                                </div>
                                <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                Contraseña
                                        </label>
                                        <input
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full p-2 border rounded-md"
                                        />
                                </div>
                                <button
                                        onClick={handleLogin}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                >
                                        Iniciar Sesión
                                </button>
                        </div>
                </div>
        );
};

export default Login;
