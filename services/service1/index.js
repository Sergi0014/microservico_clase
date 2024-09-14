const express = require('express'); 
const app = express(); 
const routes = require('./routes'); 
app.use(express.json()); 
app.use('/api/service1', routes); 
const PORT = 3001; 
app.listen(PORT, () => { 
console.log(`Service 1 listening on port ${PORT}`); 
});