const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello world");
})

app.get('/test', (req, res)=>{
    const name='Fathima';
    res.send('Hello '+ name);
})

const port = process.env.port || 8080;
const host= process.env.host || 'http://localhost';

app.listen(port, ()=> console.log(`Application is running on ${host}:${port}`));