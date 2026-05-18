// Funcionalidad de búsqueda de productos
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const searchModal = document.getElementById("search-modal");
  const closeSearchBtn = document.getElementById("close-search");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (!searchBtn || !searchModal) return;

  // Abrir modal de búsqueda
  searchBtn.addEventListener("click", () => {
    searchModal.style.display = "flex";
    searchInput.focus();
  });

  // Cerrar modal de búsqueda
  closeSearchBtn.addEventListener("click", () => {
    searchModal.style.display = "none";
    searchInput.value = "";
    searchResults.innerHTML = "";
  });

  // Cerrar al presionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchModal.style.display !== "none") {
      searchModal.style.display = "none";
      searchInput.value = "";
      searchResults.innerHTML = "";
    }
  });

  // Cerrar al hacer click fuera del contenido
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) {
      searchModal.style.display = "none";
      searchInput.value = "";
      searchResults.innerHTML = "";
    }
  });

  // Función de búsqueda
  function performSearch(query) {
    if (!query.trim()) {
      searchResults.innerHTML = '<div class="search-no-results">Ingresa un término para buscar</div>';
      return;
    }

    const q = query.toLowerCase();
    const results = [];

    // Buscar en CATEGORIES si está disponible
    if (typeof CATEGORIES !== "undefined") {
      CATEGORIES.forEach((cat) => {
        if (cat.products) {
          cat.products.forEach((product) => {
            if (
              product.name.toLowerCase().includes(q) ||
              (product.description && product.description.toLowerCase().includes(q))
            ) {
              results.push({
                name: product.name,
                category: cat.name,
                categorySlug: cat.slug,
                productId: product.id,
                price: product.price,
                imagen: product.imagenes && product.imagenes[0] ? product.imagenes[0] : product.imagen,
              });
            }
          });
        }
      });
    }

    // Mostrar resultados
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No se encontraron productos</div>';
    } else {
      searchResults.innerHTML = results
        .map(
          (r) => `
        <a href="producto-detalle.html?cat=${r.categorySlug}&id=${r.productId}" class="search-result-item">
          <img src="${r.imagen}" alt="${r.name}" class="search-result-img">
          <div class="search-result-info">
            <h3>${r.name}</h3>
            <p>${r.category} • $${r.price.toFixed(0)}</p>
          </div>
        </a>
      `
        )
        .join("");
    }
  }

  // Búsqueda en tiempo real
  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  // Búsqueda al presionar Enter
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch(searchInput.value);
    }
  });
});
