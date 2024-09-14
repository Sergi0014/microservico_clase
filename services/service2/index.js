const express = require('express'); 
const app = express(); 
const routes = require('./routes'); 
app.use(express.json()); 
app.use('/api/service2', routes); 
const PORT = 3002; 
app.listen(PORT, () => { 
console.log(`Service 2 listening on port ${PORT}`); 
}); 