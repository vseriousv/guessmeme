import openSocket from 'socket.io-client';
const socket = openSocket.connect('http://localhost:8000')

function subscribeToStateData(callback) {
  socket.on('stateData', data => callback(null, data));
  socket.emit('subscribeToStateData');
}

function subscribeToMembers(callback) {
  socket.on('users', data => callback(null, data));
  socket.emit('subscribeToMembers');
}

function pushToCoords(coords) {
  socket.emit('pushCoords', coords);
}

function pushImage(image) {
  socket.emit('pushImage', image);
}

function login(user) {
  socket.emit('login', user);
}

export { subscribeToStateData, pushToCoords, pushImage, login, subscribeToMembers};