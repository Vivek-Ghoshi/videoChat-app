const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

app.use('view engine', 'ejs');
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.send('webrtc')
    console.log('webrtc')
});

server.listen( process.env.PORT || 3000);



