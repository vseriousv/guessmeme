const io = require('socket.io')();
  
const port = 8000;

var stateData = {
    Xcoords: 0, 
    Ycoords: 0, 
    isClick: false, 
    isClear: false
};
var users = [];
var conection = [];

io.on('connection', (socket) => {
    conection.push(socket);
    console.log('Add connection ', conection.length, "id:", socket.id);

    socket.on('login', function(user){
        // if()
        users.push({id: socket.id, userName: user.userName});
        console.log('Add users ', users.length, "id:", socket.id, "name:", user.userName);

    });

    socket.on('subscribeToMembers', () => {
        setInterval(() => {            
            socket.emit('users', users);
        }, 10);        
    });

    socket.on('disconnect', function(data){
        conection.splice(conection.indexOf(socket), 1);
        users.splice(conection.indexOf(socket), 1);
        console.log('Disconnection',"id:", socket.id);
    });

    socket.on('pushCoords', (data) => {
        console.log("data",data);
        stateData = data;
    });

    socket.on('subscribeToStateData', () => {     
        setInterval(() => {            
            socket.emit('stateData', stateData);
        }, 10);        
    });

});

io.listen(port);
console.log('listening on port ', port);