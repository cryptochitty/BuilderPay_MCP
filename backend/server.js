const express = require('express');
const cors = require('cors');
const builderRoutes = require('./routes/builders');

const app = express();
app.use(cors());
app.use('/api/builders', builderRoutes);

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));