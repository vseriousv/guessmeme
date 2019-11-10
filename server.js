const io = require('socket.io')();
  
const port = 8000;

users = [];
conection = [];
var coordsData = { Xcoords: 0, Ycoords: 0, isClick: false, isClear: false };

io.on('connection', (socket) => {
    conection.push(socket);
    console.log('Success connection', conection.length)

    socket.on('disconnect', function(data){
        conection.splice(conection.indexOf(socket), 1);
        console.log('Disconnection');
    });

    socket.on('pushCoords', (data) => {
        console.log("data",data);
        coordsData = data;
    });

    socket.on('subscribeToCoords', () => {     
        setInterval(() => {            
            socket.emit('returnCoords', coordsData);
        }, 10);
        
    });

});

io.listen(port);
console.log('listening on port ', port);