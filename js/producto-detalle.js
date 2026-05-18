document.addEventListener("DOMContentLoaded", () => {
  const cat = getQueryParam("cat");
  const id = getQueryParam("id");
  const c = getCategory(cat);
  const p = getProduct(cat, id);
  const root = document.getElementById("product-root");
  if (!c || !p) { root.innerHTML = "<p style='padding:4rem;text-align:center'>Producto no encontrado</p>"; return; }

  document.title = `${p.name} — NovaBMX`;
  document.getElementById("breadcrumb").innerHTML = `
    <a href="productos.html">Catálogo</a> / 
    <a href="productos.html?cat=${c.slug}">${c.name}</a>
  `;

  root.innerHTML = `
    <div>
      <div class="image-placeholder product-main-image" id="main-img">
        <img src="${p.imagenes && p.imagenes[0] ? p.imagenes[0] : '../assets/images/placeholder.jpg'}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="thumbnails">
        ${(p.imagenes && p.imagenes.length > 0 ? p.imagenes : [p.imagen]).map((img, i) => `
          <div class="thumb image-placeholder ${i===0?'active':''}" data-i="${i}" data-src="${img}" style="background-image: url('${img}'); background-size: cover; background-position: center; cursor: pointer;">
          </div>
        `).join("")}
      </div>
    </div>
    <div class="product-info">
      <span class="category">${c.name}</span>
      <h1>${p.name}</h1>
      <div class="price">$${p.price.toFixed(2)}</div>
      <p class="description">${p.description}</p>
      <div class="product-actions">
        <button class="btn btn-primary" id="add-cart">Añadir al carrito</button>
        <button class="btn btn-outline">Comprar ya</button>
      </div>
      <div class="product-extras">
        <p>· Envío disponible</p>
        <p>· Garantía del fabricante</p>
        <p>· Soporte para riders</p>
      </div>
    </div>
  `;

  // Cambiar imagen activa
  document.querySelectorAll(".thumb").forEach(t => {
    t.addEventListener("click", () => {
      document.querySelectorAll(".thumb").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      const mainImg = document.getElementById("main-img");
      mainImg.innerHTML = `<img src="${t.dataset.src}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    });
  });

  // Añadir al carrito (localStorage)
  document.getElementById("add-cart").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("novabmx:cart") || "[]");
    cart.push({ cat: c.slug, id: p.id, name: p.name, price: p.price });
    localStorage.setItem("novabmx:cart", JSON.stringify(cart));
    alert("¡Añadido al carrito!");
  });
});
