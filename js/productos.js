// Si hay ?cat=xxx muestra productos; si no, lista categorías
document.addEventListener("DOMContentLoaded", () => {
  const cat = getQueryParam("cat");
  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const grid = document.getElementById("main-grid");

  if (cat) {
    const c = getCategory(cat);
    if (!c) { grid.innerHTML = "<p>Categoría no encontrada</p>"; return; }
    trackView(c.slug);
    titleEl.textContent = c.name;
    subtitleEl.textContent = c.description;
    grid.className = "products-grid";
    grid.innerHTML = c.products.map(p => `
      <a href="producto-detalle.html?cat=${c.slug}&id=${p.id}" class="product-card">
        <img src="${p.imagenes && p.imagenes[0] ? p.imagenes[0] : p.imagen}" alt="${p.name}" style="width: 100%; aspect-ratio: 1; object-fit: cover; display: block;">
        <div class="product-card-body">
          <h3>${p.name}</h3>
          <div class="product-card-footer">
            <span class="product-price">$${p.price.toFixed(2)}</span>
            <span class="text-muted" style="font-size:.75rem">VER →</span>
          </div>
        </div>
      </a>
    `).join("");
  } else {
    titleEl.textContent = "Piezas BMX";
    subtitleEl.textContent = "Selecciona una categoría para ver los productos.";
    grid.className = "categories-grid";
    grid.innerHTML = CATEGORIES.map(c => `
      <a href="productos.html?cat=${c.slug}" class="category-card">
        ${c.imagen ? `<img src="${c.imagen}" alt="${c.name}" style="width: 100%; aspect-ratio: 1; object-fit: cover; display: block;">` : '<div class="image-placeholder">Imagen</div>'}
        <div class="category-card-body">
          <h3>${c.name}</h3>
          ${c.description ? `<p>${c.description}</p>` : ''}
        </div>
      </a>
    `).join("");
  }

  const trackHistory = window.trackView || (() => {});
});

// trackView/getViewed definidos en main.js — si productos.html no incluye main.js, define un fallback:
if (typeof trackView === "undefined") {
  window.trackView = function(slug) {
    try {
      const prev = JSON.parse(localStorage.getItem("novabmx:viewed") || "[]");
      const next = [slug, ...prev.filter(s => s !== slug)].slice(0, 12);
      localStorage.setItem("novabmx:viewed", JSON.stringify(next));
    } catch {}
  };

  const track = document.getElementById('verticalSlider');
const imagenes = track.getElementsByTagName('img');
let indiceActual = 0;

// --- MODIFICA AQUÍ EL TIEMPO DE ESPERA ENTRE IMÁGENES (en milisegundos) ---
const tiempoEspera = 7000; // 7000ms = 7 segundos

function deslizarArriba() {
    indiceActual++;
    
    if (indiceActual >= imagenes.length) {
        indiceActual = 0; // Regresa a la primera imagen
    }
    
    // Obtiene el alto de la primera imagen para calcular el desplazamiento
    const altoImagen = imagenes[0].clientHeight;
    const desplazamiento = indiceActual * -altoImagen;
    
    track.style.transform = `translateY(${desplazamiento}px)`;
}

// Ejecuta la función automáticamente en el intervalo de tiempo definido
setInterval(deslizarArriba, tiempoEspera);
}
