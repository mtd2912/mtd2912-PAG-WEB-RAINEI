const FAKE_API = "https://fakestoreapi.com";
var productos = [];
window.productos = productos;

// ----------------------------
// OBTENER PRODUCTOS DESDE API 
// ----------------------------
async function obtenerProductosDesdeAPI() {
  try {
    const resp = await fetch(`${FAKE_API}/products`);
    if (!resp.ok) throw new Error("Error API FakeStore");
    await resp.json();  

    return misProductosRainei;

  } catch (err) {
    console.warn("API falló, cargando productos de RAINEI...");
    return misProductosRainei;
  }
}


const misProductosRainei = [
  // ====================
  // TOPS
  // ====================
  { id: 100, nombre: "Top Marrón", precio: 59.99, descripcion: "Top elegante color marrón, ideal para outfits casuales.", categoria: "tops", imagen: "https://i.ibb.co/JRC5s5wd/top-marron.jpg" },

  // ====================
  // PANTALONES
  // ====================
  { id: 101, nombre: "Pantalón Palo de Rosa", precio: 79.99, descripcion: "Pantalón suave en tono palo de rosa, cómodo y moderno.", categoria: "pantalones", imagen: "https://i.ibb.co/D0128vn/pantalon-palo-de-rosa.jpg" },

  { id: 102, nombre: "Pantalón Marrón", precio: 74.99, descripcion: "Pantalón marrón versátil para diferentes estilos.", categoria: "pantalones", imagen: "https://i.ibb.co/7tJCpWnL/pantalon-marron.jpg" },

  { id: 103, nombre: "Pantalón Negro", precio: 69.99, descripcion: "Pantalón negro clásico y combinable.", categoria: "pantalones", imagen: "https://i.ibb.co/B5vtByht/pantalon-negro.jpg" },

  { id: 104, nombre: "Pantalón Lila", precio: 72.99, descripcion: "Pantalón color lila, estilo moderno.", categoria: "pantalones", imagen: "https://i.ibb.co/dsHSm018/pantalon-lila.jpg" },

  { id: 105, nombre: "Pantalón Crema", precio: 75.99, descripcion: "Pantalón tono crema elegante y cómodo.", categoria: "pantalones", imagen: "https://i.ibb.co/RTY5RLb5/pantalon-crema.jpg" },

  { id: 106, nombre: "Pantalón Blanco", precio: 77.99, descripcion: "Pantalón blanco fresco para outfits limpios.", categoria: "pantalones", imagen: "https://i.ibb.co/Zz0rH6WR/pantalon-blanco.jpg" },

  // ====================
  // ACCESORIOS
  // ====================
  { id: 107, nombre: "Llaveros Mix", precio: 12.99, descripcion: "Llaveros variados con diseños únicos.", categoria: "accesorios", imagen: "https://i.ibb.co/pBnRMBdQ/llaveros.jpg" },

  { id: 108, nombre: "Llavero Modelo 7", precio: 9.99, descripcion: "Llavero artesanal modelo 7.", categoria: "accesorios", imagen: "https://i.ibb.co/dsyjspTR/llaveros-7.jpg" },

  { id: 109, nombre: "Llavero Modelo 6", precio: 9.99, descripcion: "Llavero artesanal modelo 6.", categoria: "accesorios", imagen: "https://i.ibb.co/9kxKdhjL/llaveros-6.jpg" },

  { id: 110, nombre: "Llavero Modelo 5", precio: 9.99, descripcion: "Llavero artesanal modelo 5.", categoria: "accesorios", imagen: "https://i.ibb.co/d0pqPqh9/llaveros-5.jpg" },

  { id: 111, nombre: "Llavero Modelo 4", precio: 9.99, descripcion: "Llavero artesanal modelo 4.", categoria: "accesorios", imagen: "https://i.ibb.co/VYGVjtrn/llaveros-4.jpg" },

  { id: 112, nombre: "Llavero Modelo 3", precio: 9.99, descripcion: "Llavero artesanal modelo 3.", categoria: "accesorios", imagen: "https://i.ibb.co/ycjPcHXY/llaveros-3.jpg" },

  { id: 113, nombre: "Llavero Modelo 2", precio: 9.99, descripcion: "Llavero artesanal modelo 2.", categoria: "accesorios", imagen: "https://i.ibb.co/9dj33bT/llaveros-2.jpg" },

  { id: 114, nombre: "Llavero Modelo 1", precio: 9.99, descripcion: "Llavero artesanal modelo 1.", categoria: "accesorios", imagen: "https://i.ibb.co/ymwvgGSV/llaveros-1.jpg" },

  // ====================
  // TOP DISEÑO
  // ====================
  { id: 115, nombre: "Blusa Marrón Diseño", precio: 64.99, descripcion: "Blusa marrón con diseño elegante.", categoria: "tops", imagen: "https://i.ibb.co/MxFC6Vcd/dise-o-blusa-marron.jpg" },

  // ====================
  // CARTERAS
  // ====================
  { id: 116, nombre: "Cartera Palo de Rosa", precio: 89.99, descripcion: "Cartera color palo de rosa elegante.", categoria: "bolsos", imagen: "https://i.ibb.co/DHhWqVrc/cartera-palo-de-rosa.jpg" },

  { id: 117, nombre: "Cartera Palo de Rosa Premium", precio: 92.99, descripcion: "Cartera con diseño premium.", categoria: "bolsos", imagen: "https://i.ibb.co/G4CrXv2z/cartera-palo-de-rosa-1.jpg" },

  { id: 118, nombre: "Cartera Negra", precio: 94.99, descripcion: "Cartera negra combinable con todo.", categoria: "bolsos", imagen: "https://i.ibb.co/cSHB2X5j/cartera-negra.jpg" },

  { id: 119, nombre: "Cartera Azul", precio: 89.99, descripcion: "Cartera azul elegante.", categoria: "bolsos", imagen: "https://i.ibb.co/8DdzPW10/cartera-azul.jpg" },

  { id: 120, nombre: "Cartera Azul Premium", precio: 95.99, descripcion: "Cartera azul con acabado fino.", categoria: "bolsos", imagen: "https://i.ibb.co/C3BcXQy6/cartera-azul-1.jpg" },

  // ====================
  // BOLSOS
  // ====================
  { id: 121, nombre: "Bolso Palo de Rosa", precio: 109.99, descripcion: "Bolso grande palo de rosa elegante.", categoria: "bolsos", imagen: "https://i.ibb.co/53Ljgqm/bolso-palo-de-rosa.jpg" },

  { id: 122, nombre: "Bolso Negro", precio: 104.99, descripcion: "Bolso negro espacioso.", categoria: "bolsos", imagen: "https://i.ibb.co/PZxYwfBZ/bolso-negro.jpg" },

  { id: 123, nombre: "Bolso Negro Tejido", precio: 119.99, descripcion: "Bolso tejido negro premium.", categoria: "bolsos", imagen: "https://i.ibb.co/8gdVMnpw/Bolso-negro-tejido-con-cierre-dorado.jpg" },

  { id: 124, nombre: "Bolso Blanco", precio: 112.99, descripcion: "Bolso blanco elegante.", categoria: "bolsos", imagen: "https://i.ibb.co/MykHwC4Z/bolso-blanco.jpg" },

  { id: 125, nombre: "Bolso Blanco Tejido", precio: 124.99, descripcion: "Bolso blanco tejido con detalles dorados.", categoria: "bolsos", imagen: "https://i.ibb.co/d4FWbNgz/bolso-blanco-tejido-blanco-con-cierre-dorado.jpg" },

  { id: 126, nombre: "Bolso Beige Claro", precio: 118.99, descripcion: "Bolso beige claro minimalista.", categoria: "bolsos", imagen: "https://i.ibb.co/9mvTJbVP/bolso-beige-claro.jpg" }
];

// -------------------------------------------
// TARJETAS HTML
// -------------------------------------------
function crearTarjetaHTML(p) {
  return `
    <div class="producto" data-id="${p.id}">
      <img src="${p.imagen}" alt="${escapeHtml(p.nombre)}">
      <h3>${escapeHtml(p.nombre)}</h3>
      <p class="precio">$${p.precio}</p>

      <div class="botones-producto">
        <button class="btn-ver" data-id="${p.id}">Ver</button>
        <button class="btn-agregar" data-id="${p.id}">Agregar</button>
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  return text ? String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;") : '';
}

// -------------------------------------------
// RENDER CARRUSELES
// -------------------------------------------
function renderizarProductos() {
  const rel = document.getElementById("relacionados");
  const rec = document.getElementById("recomendados");

  if (!rel || !rec) return;

  rel.innerHTML = "";
  rec.innerHTML = "";

  productos.forEach(p => {
    const html = crearTarjetaHTML(p);
    rel.insertAdjacentHTML("beforeend", html);
    rec.insertAdjacentHTML("beforeend", html);
  });

  attachDelegatedHandlers(rel);
  attachDelegatedHandlers(rec);
}

// -------------------------------------------
// EVENTOS BOTONES
// -------------------------------------------
function attachDelegatedHandlers(container) {
  if (!container || container.__handlersAttached) return;
  container.__handlersAttached = true;

  container.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const id = Number(btn.dataset.id);

    if (btn.classList.contains("btn-ver")) {
      verProducto(id);

    } else if (btn.classList.contains("btn-agregar")) {
      window.agregarAlCarrito(id);
      window.renderCarrito();
    }
  });
}

// -------------------------------------------
// VER PRODUCTO (Detalle)
// -------------------------------------------
window.verProducto = function (id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return alert("Producto no encontrado");

  localStorage.setItem("productoDetalle", JSON.stringify(producto));
  window.location.href = "detalle.html";
};

// -------------------------------------------
// INICIALIZACIÓN
// -------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  productos = await obtenerProductosDesdeAPI();
  window.productos = productos;

  renderizarProductos();
  llenarGridsCatalogo();
  window.actualizarContadorCarrito?.();
});

// -------------------------------------------
// GRIDS DEL CATÁLOGO
// -------------------------------------------
function llenarGridsCatalogo() {
  const g1 = document.getElementById("grid-1");
  const g2 = document.getElementById("grid-2");
  const g3 = document.getElementById("grid-3");
  if (!g1 || !g2 || !g3) return;

  g1.innerHTML = "";
  g2.innerHTML = "";
  g3.innerHTML = "";

  const primeros10 = productos.slice(0, 10);
  const siguientes10 = productos.slice(10, 20);
  const otros25 = productos.slice(20);

  primeros10.forEach(p => g1.insertAdjacentHTML("beforeend", crearTarjetaHTML(p)));
  siguientes10.forEach(p => g2.insertAdjacentHTML("beforeend", crearTarjetaHTML(p)));
  otros25.forEach(p => g3.insertAdjacentHTML("beforeend", crearTarjetaHTML(p)));

  attachDelegatedHandlers(g1);
  attachDelegatedHandlers(g2);
  attachDelegatedHandlers(g3);
}
