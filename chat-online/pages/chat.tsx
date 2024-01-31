// src/components/Chat.tsx
import React, { FC } from 'react';

const Chat: FC<{ messages: string[]; onSendMessage: (message: string) => void }> = ({ messages, onSendMessage }) => {
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        const messageInput = e.currentTarget.querySelector('[name="message"]');
        if (messageInput && messageInput instanceof HTMLInputElement) {
            onSendMessage(messageInput.value);
            messageInput.value = '';
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
            <div className="mb-4">
                <h2 className="text-2xl font-bold">Chat en línea</h2>
            </div>
            <div className="mb-4 max-h-60 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                        {msg}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
                <input
                    type="text"
                    name="message"
                    className="flex-grow p-2 mr-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Escribe tu mensaje..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Chat;
