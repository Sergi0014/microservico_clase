const express = require('express'); 
const axios = require('axios'); 
const app = express(); 

app.use(express.json()); 

// Rutas del gateway 
app.get('/api/hello', async (req, res) => { 
  try { 
    const response = await axios.get('http://localhost:3001/api/service1/hello'); 
    res.json(response.data); 
  } catch (error) { 
    res.status(500).json({ error: 'Service 1 is down' }); 
  } 
}); 

app.get('/api/goodbye', async (req, res) => { 
  try { 
    const response = await axios.get('http://localhost:3002/api/service2/goodbye'); 
    res.json(response.data); 
  } catch (error) { 
    res.status(500).json({ error: 'Service 2 is down' }); 
  } 
}); 

const PORT = 3000; 
app.listen(PORT, () => { 
  console.log(`Gateway listening on port ${PORT}`); 
}); 