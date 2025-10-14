let express =require('express')
let socketio=require('socket.io')

// app setup
let app=express()
// server setup 
let server=app.listen(4000,()=>{
    console.log('project is running on Localhost 4000');
    
})

app.get('/',(res,req)=>{
    req.sendFile(__dirname+'/public/index.html')
});

// socket setup 
let io=socketio(server)
io.on('connection', (socket) => {
   socket.on('chat',(data)=>{
    
    io.sockets.emit('chat',data);
   });

    socket.on('typing',(name)=>{
       socket.broadcast.emit('typing',name);
   });

    // socket.on('disconnect', () => {
    //     console.log('Socket disconnected:', socket.id);
    // });
});