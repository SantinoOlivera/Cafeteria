const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const main = document.querySelector("main");
//const producto = productos.find(p => p.id === id);

fetch(`/api/productos/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Producto no encontrado');
        }
        return response.json();
    })
    .then(producto => {
        document.title = `${producto.nombre} - Pistacho Coffee Store`;

    main.innerHTML = `
        <a href="tienda.html" class="volver">← Volver a la tienda</a>

        <article class="detalle-producto">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="detalle-imagen">

            <div class="detalle-info">
                <h2>${producto.nombre}</h2>
                <p class="detalle-descripcion">${producto.descripcionlarga}</p>

                <div class="selector-cantidad">
                    <label for="cantidad">Cantidad</label>
                    <input type="number" id="cantidad" name="cantidad" value="1" min="1" max="5">
                </div>

                <button type="button" class="boton-carrito">Añadir al carrito</button>
            </div>
        </article>

        <hr class="detalle-separador">

        <p class="detalle-precio">$${producto.precio}</p>`;
    })
    .catch(() => {
        main.innerHTML = `
            <a href="tienda.html" class="volver">← Volver a la tienda</a>
            <p>No encontramos ese producto.</p>`;
    });
