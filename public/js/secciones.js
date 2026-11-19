const header = document.querySelector("header");
const footer = document.querySelector("footer");

const paginas = [
    { texto: "Página Principal", destino: "index.html" },
    { texto: "Tienda", destino: "tienda.html" },
    { texto: "Menu", destino: "menu.html" },
    { texto: "Reservar", destino: "reserva.html" }
];

let archivoActual = window.location.pathname.split("/").pop();
if (archivoActual === "") {
    archivoActual = "index.html";
}

const linkVisibles = paginas.filter(pagina => pagina.destino !== archivoActual);

const itemsNav = linkVisibles.map(pagina => `<li><a href="${pagina.destino}">${pagina.texto}</a></li>`).join("");

header.innerHTML = `
    <div class="marca">
            <img src="images/pistacho.png" alt="Logo Pistacho Coffee Store" class="logo">
            <h1>Pistacho Coffee Store</h1>
        </div>
        <nav>
            <ul>${itemsNav}</ul>
        </nav>
`;

footer.innerHTML = `
    <p>Datos de contacto</p>

        <address>
            <ul>
                <li>+54 9 299 123-4567</li>
                <li>cafeteriapistacho@gmail.com</li>
                <li>Buenos Aires 1400, Neuquén Capital</li>
            </ul>
        </address>
`;