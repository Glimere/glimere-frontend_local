import { io, Socket } from 'socket.io-client';
import useApparelStore from '@/store/apparelStore';

let socket: Socket | null = null;
let isWebSocketConnected = false;

export const connectWebSocket = () => {
  if (isWebSocketConnected || socket) {
    console.log('WebSocket is already connected.');
    return;
  }

  socket = io(process.env.NEXT_PUBLIC_BASE_URL || '', {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
  });

  socket.on('connect', () => {
    console.log('Connected to WebSocket');
    isWebSocketConnected = true;
  });

  socket.on('connect_error', (error) => {
    console.error('WebSocket connect error:', error);
  });

  socket.on('reconnect_attempt', () => {
    console.log('WebSocket reconnecting...');
  });

  socket.on('apparel_update', (data) => {
    console.log('Received apparel update:', data);
    const { updateApparel } = useApparelStore.getState();
    updateApparel(data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket');
    isWebSocketConnected = false;
  });
};

export const disconnectWebSocket = () => {
  if (socket && socket.connected) {
    socket.disconnect();
    console.log('Disconnected from WebSocket');
    isWebSocketConnected = false;
  } else {
    console.log('WebSocket was not connected, skipping disconnect.');
  }
};
