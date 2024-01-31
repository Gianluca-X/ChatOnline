// server/index.ts
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Manejo de rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación!');
});

// Configuración de middleware (opcional)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de WebSockets
io.on('connection', (socket) => {
  console.log('Usuario conectado');

  // Manejar evento de nuevo mensaje desde el cliente
  socket.on('mensaje', (data) => {
    console.log('Nuevo mensaje recibido:', data);

    // Enviar el mensaje a todos los clientes conectados
    io.emit('mensaje', data);
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Servidor WebSocket escuchando en el puerto ${PORT}`);
});
