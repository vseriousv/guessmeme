const io = require('socket.io')();
  
const port = 8000;


users = [];
conection = [];

io.on('connection', (socket) => {

    console.log('Success connection')
    conection.push(socket);

    socket.on('disconnect', function(data){
        conections.splice(conections.indexOf(socket), 1);
        console.log('Disconnection');
    });

    socket.on('chat', (interval) => {

        console.log('client is subscribing to timer with interval ', interval);

        setInterval(() => {
            socket.emit('timers', new Date());
        }, interval);

    });
});

io.listen(port);
console.log('listening on port ', port);