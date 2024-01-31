// pages/index.tsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Chat from './chat';
import Register from './register';
import Login from './login';
const socket = io('http://localhost:3001');
const Home: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [isRegistering, setRegistering] = useState<boolean>(false);


  useEffect(() => {

    socket.on('connect', () => {
      console.log('Conectado al servidor WebSocket');
    });

    // Manejar evento de nuevo mensaje desde el servidor
    socket.on('mensaje', (data: string) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Enviar el mensaje al servidor
    socket.emit('mensaje', newMessage);
    setNewMessage('');
  };

  const handleLogin = (enteredUsername: string, enteredPassword: string) => {
    // Lógica de autenticación (simulada)
    setLoggedIn(true);
    setUsername(enteredUsername);
  };

  const handleRegister = (enteredUsername: string, enteredPassword: string) => {
    // Lógica de registro (simulada)
    setLoggedIn(true);
    setUsername(enteredUsername);
  };

  const toggleRegister = () => {
    setRegistering(!isRegistering);
  };


return (
  <div>
    {loggedIn ? (
      <>
        <h1 className='text-2x1 font-bold'>Chat Online</h1>
        <Chat messages={messages} onSendMessage={sendMessage} />
        <div>
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
      </>) : (
      <div>
        <h1 className='text-2xl font-bold'>Chat Online</h1>
        {isRegistering ? (
          <Register onRegister={handleRegister} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
        <div>
          <button onClick={toggleRegister}>
            {isRegistering ? 'Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>
    )}



  </div>
);
};

export default Home;
