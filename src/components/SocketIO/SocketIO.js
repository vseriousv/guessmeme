import openSocket from 'socket.io-client';
const socket = openSocket.connect('http://localhost:8000')

function subscribeToCoords(callback) {
  socket.on('returnCoords', data => callback(null, data));
  socket.emit('subscribeToCoords');
}

function pushToCoords(coords) {
  socket.emit('pushCoords', coords);
}

export { subscribeToCoords, pushToCoords};