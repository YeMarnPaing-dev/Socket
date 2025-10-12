let express =require('express')

// app setup
let app=express()
// server setup 
let server=app.listen(4000,()=>{
    console.log('project is running on Localhost 4000');
    
})

app.get('/',(res,req)=>{
    req.sendFile(__dirname+'/public/index.html')
})