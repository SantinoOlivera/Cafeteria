const express = require('express');
const app = express();
app.use(express.json());
const productosRoutes = require('./routes/productos.routes');

app.use(express.static('public'));
app.use('/api/productos', productosRoutes);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

