const lista = document.querySelector(".grilla-productos");

fetch('/api/productos?cantidad=10&from=0')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudieron obtener los productos');
        }
        return response.json();
    })
    .then(productos => {
        lista.innerHTML = productos
            .map(producto => `
                <a href="detalle.html?id=${producto.id}" class="producto-vinculo">
                    <article class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <p class="precio">$${producto.precio}</p>
                    </article>
                </a>`)
            .join("");
    })
    .catch(() => {
        lista.innerHTML = '<p>No se pudieron cargar los productos.</p>';
    });

/*lista.innerHTML = productos
    .map(producto => `
        <a href="detalle.html?id=${producto.id}" class="producto-vinculo">
            <article class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
            </article>
        </a>`)
    .join("");
*/