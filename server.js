const io = require('socket.io')();
  
const port = 8000;


users = [];
conection = [];

io.on('connection', (socket) => {

    console.log('Success connection')
    conection.push(socket);
    console.log(conection.length)

    socket.on('disconnect', function(data){
        conection.splice(conection.indexOf(socket), 1);
        console.log('Disconnection');
    });

    var coordsData = [];
    socket.on('pushCoords', (data) => {
        console.log(data);
        socket.emit('returnCoords', data);        
    });

    socket.on('subscribeToTimer', () => {
        console.log('client is subscribing to timer with interval ', 1000);
        setInterval(() => {
            socket.emit('timer', new Date());
        }, 1000);
    });

});

io.listen(port);
console.log('listening on port ', port);