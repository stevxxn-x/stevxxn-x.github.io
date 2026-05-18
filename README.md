# 🚲 NovaBMX — Tienda de Piezas y Accesorios BMX

Sitio web de comercio electrónico especializado en piezas y accesorios para bicicletas BMX.

## 📁 Estructura del Proyecto

```
NovaBMX/
├── pages/
│   ├── index.html          # Página de inicio
│   ├── productos.html      # Catálogo de productos
│   ├── carrito.html        # Carrito de compras
│   ├── contacto.html       # Formulario de contacto
│   └── nosotros.html       # Página sobre la tienda
├── css/
│   ├── variables.css       # Variables de diseño (colores, tipografía, espaciado)
│   ├── reset.css           # Estilos de reset
│   ├── global.css          # Estilos globales y componentes reutilizables
│   ├── navbar.css          # Estilos de la barra de navegación
│   ├── home.css            # Estilos de la página de inicio
│   ├── productos.css       # Estilos de página de productos
│   ├── carrito.css         # Estilos del carrito
│   └── footer.css          # Estilos del footer
├── js/
│   ├── main.js             # Lógica principal (navegación, carrito)
│   ├── navbar.js           # Funcionalidades de la navbar
│   ├── productos.js        # Lógica de productos
│   └── carrito.js          # Lógica del carrito
├── data/
│   └── productos.json      # Base de datos de productos
├── assets/
│   ├── images/
│   │   ├── productos/      # Imágenes de productos
│   │   └── icons/          # Iconos
│   └── icons/              # Más iconos
└── README.md               # Este archivo
```

## 🎨 Diseño

### Colores Principales
- **Naranja BMX**: `#ff6b00` (color de marca)
- **Negro**: `#0a0a0a` (fondo)
- **Blanco roto**: `#f5f5f5` (texto principal)
- **Grises**: Para jerarquía de texto

### Tipografía
- **Títulos**: Bebas Neue
- **Condensada**: Barlow Condensed (menús, botones)
- **Body**: Barlow (texto general)

### Espaciado
- `--espacio-xs`: 0.5rem
- `--espacio-sm`: 1rem
- `--espacio-md`: 2rem
- `--espacio-lg`: 4rem
- `--espacio-xl`: 6rem

## 🚀 Características

✅ **Navbar responsivo** con menú hamburguesa  
✅ **Hero section** con animaciones  
✅ **Catálogo de piezas BMX** expandible  
✅ **Carrito de compras** con localStorage  
✅ **Formulario de contacto**  
✅ **Footer con enlaces**  
✅ **Diseño mobile-first**  
✅ **Modo oscuro por defecto**  

## 📱 Responsive

El sitio se adapta a:
- 📱 Móviles (< 600px)
- 📱 Tablets (600px - 860px)
- 🖥️ Desktop (> 860px)

## 🛠️ Tecnologías

- **HTML5** semántico
- **CSS3** moderno con Grid y Flexbox
- **Vanilla JavaScript** (sin dependencias)
- **localStorage** para carrito persistente
- **JSON** para datos de productos

## 🔧 Instalación

1. Clonar o descargar el proyecto
2. Abrir `pages/index.html` en el navegador
3. ¡Listo! No requiere servidor ni instalación

## 📝 Notas

- El proyecto usa valores reales de piezas BMX
- Las imágenes de productos deben colocarse en `assets/images/productos/`
- Los precios pueden actualizarse en `data/productos.json`
- Todo es vanilla JS, sin frameworks

## 📄 Licencia

© 2025 NovaBMX — Todos los derechos reservados
