// ----------------------------------------
// Escape (por seguridad en nombres/desc)
// ----------------------------------------
function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ----------------------------------------
// RENDER CARRUSEL
// ----------------------------------------
function renderCarrusel(idContenedor, cantidad = 6) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (typeof productos === "undefined" || productos.length === 0) {
        contenedor.innerHTML = "<p>Cargando productos...</p>";
        return;
    }

    productos.slice(0, cantidad).forEach(prod => {
        const div = document.createElement("div");
        div.className = "producto";
        div.dataset.id = prod.id;

        div.innerHTML = `
            <img src="${prod.imagen}" alt="${escapeHtml(prod.nombre)}">
            <h3>${escapeHtml(prod.nombre)}</h3>
            <p>$${Number(prod.precio).toLocaleString()}</p>
            <button class="btn-agregar" data-id="${prod.id}">+</button>
            <button class="btn-ver" onclick="verProducto(${prod.id})">Ver</button>
        `;

        contenedor.appendChild(div);
    });

    activarBotones();
}

// ----------------------------------------
// CLICK EN PRODUCTO PARA ABRIR detalle.html
// ----------------------------------------
function verProducto(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    localStorage.setItem("productoDetalle", JSON.stringify(prod));
    location.href = "detalle.html";
}

// ----------------------------------------
// BOTONES + RENDER DE EVENTOS
// ----------------------------------------
function activarBotones() {
    document.querySelectorAll(".btn-agregar").forEach(btn => {
        if (btn.__ok) return;
        btn.__ok = true;

        btn.addEventListener("click", e => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            agregarAlCarrito(id);
        });
    });
}

// ----------------------------------------
// AGREGAR AL CARRITO
// ----------------------------------------
function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...prod, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContadorCarrito();
    renderCarrito();
}

// ----------------------------------------
// CONTADOR DEL ICONO
// ----------------------------------------
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document.querySelectorAll(".contador-carrito").forEach(el => {
        el.textContent = carrito.length;
    });
}

// ----------------------------------------
// RENDER PANEL DEL CARRITO (index/catalogo/detalle)
// ----------------------------------------
function renderCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const cont = document.querySelector(".carrito-items");

    if (!cont) return;

    cont.innerHTML = "";

    if (carrito.length === 0) {
        cont.innerHTML = "<p>Tu carrito está vacío.</p>";
        document.getElementById("subtotalCarrito").textContent = "$0";
        return;
    }

    let subtotal = 0;

    carrito.forEach(item => {
        subtotal += item.precio * item.cantidad;

        const div = document.createElement("div");
        div.className = "item-carrito";

        div.innerHTML = `
            <img src="${item.imagen}" alt="">
            
            <div class="item-info">
                <h4>${item.nombre}</h4>
                <p>$${item.precio}</p>

                <div class="controles-cantidad">
                    <button onclick="disminuirProductoDesdeCatalogo(${item.id})">−</button>
                    <span>${item.cantidad}</span>
                    <button onclick="agregarAlCarrito(${item.id})">+</button>
                </div>
            </div>

            <button class="eliminar-item" onclick="eliminarDelCarrito(${item.id})">×</button>
        `;

        cont.appendChild(div);
    });

    document.getElementById("subtotalCarrito").textContent = "$" + subtotal;
}


// ----------------------------------------
// DISMINUIR PRODUCTO (BOTÓN - EN EL CARRITO)
// ----------------------------------------
function disminuirProductoDesdeCatalogo(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const existe = carrito.find(p => p.id === id);

    if (!existe) return;

    existe.cantidad--;

    if (existe.cantidad <= 0) {
        carrito = carrito.filter(p => p.id !== id);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContadorCarrito();
    renderCarrito();
}



// ----------------------------------------
// ELIMINAR PRODUCTO COMPLETO
// ----------------------------------------
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // eliminar TODO el producto
    carrito = carrito.filter(item => item.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContadorCarrito();
    renderCarrito();
}


// ----------------------------------------
// GUARDAR CARRITO
// ----------------------------------------
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
    renderCarrito();
}

// ----------------------------------------
// PANEL CARRITO (ABRIR/CERRAR)
// ----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const icono = document.getElementById("carritoIcono");
    const panel = document.getElementById("panelCarrito");
    const cerrar = document.getElementById("btnCerrarCarrito");

    if (icono && panel) {
        icono.addEventListener("click", () => {
            panel.classList.add("abierto");
            renderCarrito();
        });
    }

    if (cerrar) {
        cerrar.addEventListener("click", () => {
            panel.classList.remove("abierto");
        });
    }

    actualizarContadorCarrito();
    renderCarrito();
});

// ----------------------------------------
// CUANDO LOS PRODUCTOS ESTÁN LISTOS
// ----------------------------------------
window.onProductosReady = function () {
    renderCarrusel("relacionados", 8);
    renderCarrusel("recomendados", 8);

    activarBotones();
    actualizarContadorCarrito();
    renderCarrito();
};


// =========================================================
// SISTEMA DE CARRUSELES (funciona con cualquier carrusel)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionar TODOS los carruseles del sitio
    const carruseles = document.querySelectorAll(".carrusel");

    carruseles.forEach(carrusel => {
        const lista = carrusel.querySelector(".carrusel-lista");
        const btnPrev = carrusel.querySelector(".btn-prev");
        const btnNext = carrusel.querySelector(".btn-next");

        if (!lista || !btnPrev || !btnNext) return;

        let desplazamiento = 0;

        function moverCarrusel(direccion) {
            const cardWidth = lista.querySelector(".producto")
                ? lista.querySelector(".producto").offsetWidth
                : 300;

            const visibleWidth = lista.parentElement.offsetWidth;
            const totalWidth = lista.scrollWidth;

            if (direccion === "next") {
                desplazamiento -= cardWidth;
                if (Math.abs(desplazamiento) + visibleWidth > totalWidth) {
                    desplazamiento = -(totalWidth - visibleWidth);
                }
            } else {
                desplazamiento += cardWidth;
                if (desplazamiento > 0) desplazamiento = 0;
            }

            lista.style.transform = `translateX(${desplazamiento}px)`;
        }

        btnNext.addEventListener("click", () => moverCarrusel("next"));
        btnPrev.addEventListener("click", () => moverCarrusel("prev"));
    });
});




// EXPONER FUNCIONES
window.agregarAlCarrito = agregarAlCarrito;
window.renderCarrito = renderCarrito;
window.actualizarContadorCarrito = actualizarContadorCarrito;
window.verProducto = verProducto;

