const productos = require('../data/productos');
const { validarProducto, validarActualizacion } = require('../validators/productos.validator');

const obtenerProductos = (req, res) => {
    const cantidad = parseInt(req.query.cantidad) || 10;
    const from = parseInt(req.query.from) || 0;

    if (cantidad <= 0 || from < 0) {
        return res.status(400).json({ error: 'Los parametros de paginacion son invalidos' });
    }
    
    const productosPaginados = productos.slice(from, from + cantidad);
    res.status(200).json(productosPaginados);
};

const obtenerProducto = (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
};

const crearProducto = (req, res) => {
    const nuevoProducto = req.body;

    const error = validarProducto(nuevoProducto);
    if (error) {
        return res.status(400).json({error});
    }

    const existe = productos.some(p => p.id === nuevoProducto.id);

    if (existe) {
        return res.status(400).json({ error: 'Ya existe un producto con ese ID'});
    }

    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
};

const actualizarProducto = (req, res) => {
    const id = parseInt(req.params.id);
    
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }

    const error = validarActualizacion(req.body);

    if (error) {
        return res.status(400).json({ error });
    }

    Object.assign(producto, req.body);
    res.status(200).json(producto);
};

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto
};