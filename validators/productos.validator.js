//Si encontro un error devuelve el texto con el error correspondiente, si no contiene errores devuelve null
const validarProducto = (producto) => {

    if (typeof producto.nombre !== 'string' || producto.nombre.trim() === '') {
        return 'Nombre invalido, es obligatorio';
    }

    if (typeof producto.precio !== 'number' || producto.precio <= 0) {
        return 'Precio invalido, debe ser un numero mayor que cero';
    }

    if (typeof producto.descripcion !== 'string' || producto.descripcion.trim() === '') {
        return 'Descripcion invalida, es obligatoria';
    }

    if (typeof producto.descripcionlarga !== 'string') {
        return 'Descripcion larga invalida, debe ser tipo texto';
    }

    if (typeof producto.imagen !== 'string' || producto.imagen.trim() === '') {
        return 'Imagen invalida, la ruta debe existir y ser texto';
    }

    return null;
};

const validarActualizacion = (producto) => {
    
    if (Object.keys(producto).length === 0) {
        return 'Debe enviar al menos un campo para actualizar';
    }

    if ('id' in producto) {
        return 'No se permite modificar el ID';
    }

    if ('nombre' in producto && (typeof producto.nombre !== 'string' || producto.nombre.trim() === '')) {
        return 'Nombre invalido, es obligatorio';
    }

    if ('precio' in producto && (typeof producto.precio !== 'number' || producto.precio <= 0)) {
        return 'Precio invalido, debe ser un numero mayor que cero';
    }

    if ('descripcion' in producto && (typeof producto.descripcion !== 'string' || producto.descripcion.trim() === '')) {
        return 'Descripcion invalida, es obligatoria';
    }

    if ('descripcionlarga' in producto && typeof producto.descripcionlarga !== 'string') {
        return 'Descripcion larga invalida, debe ser texto';
    }

    if ('imagen' in producto && (typeof producto.imagen !== 'string' || producto.imagen.trim() === '')) {
        return 'Imagen invalida, la ruta debe existir y ser texto';
    }

    return null;
};

module.exports = {
    validarProducto,
    validarActualizacion
};