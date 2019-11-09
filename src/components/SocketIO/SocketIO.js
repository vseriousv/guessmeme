import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function socketIO(cb) {
  socket.on('timers', timestamp => cb(null, timestamp));
  socket.emit('chat', 1000);
}

export { socketIO };