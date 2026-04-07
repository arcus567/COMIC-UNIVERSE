# 🦸 COMIC UNIVERSE — Tienda Online de Cómics

> Proyecto educativo desarrollado como parte de la asignatura de Desarrollo de Aplicaciones.  
> Una tienda web completa de cómics Marvel y DC con carrito de compras y autenticación de usuarios.

---

## 📋 Descripción del Proyecto

**COMIC UNIVERSE** es una tienda online de cómics que permite a los usuarios explorar, seleccionar y comprar cómics de los universos **Marvel** y **DC**. El proyecto fue construido con tecnologías web fundamentales (HTML, CSS y JavaScript puro) sin frameworks externos, aplicando buenas prácticas de arquitectura frontend.

---

## 🗂️ Estructura del Proyecto

```
COMIC-UNIVERSE/
│
├── index.html        → Página principal con hero, cómics destacados y beneficios
├── marvel.html       → Catálogo completo del universo Marvel (12 títulos)
├── dc.html           → Catálogo completo del universo DC (6 títulos)
├── carrito.html      → Carrito de compras con resumen y confirmación de pedido
├── login.html        → Página de autenticación (Google / Demo)
│
├── css/
│   └── estilos.css   → Hoja de estilos principal con variables CSS y diseño responsive
│
└── js/
    └── script.js     → Lógica completa: catálogo, carrito, login, navbar, toasts
```

---

## ⚙️ Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de las páginas |
| **CSS3** | Estilos, variables, diseño responsive, animaciones |
| **JavaScript (ES6+)** | Lógica del carrito, catálogo, autenticación, DOM |
| **localStorage** | Persistencia del carrito y sesión del usuario |
| **Firebase Auth** *(opcional)* | Login real con Google (configuración pendiente) |
| **Git + GitHub** | Control de versiones y repositorio remoto |

---

## 🚀 Funcionalidades Principales

### 🏠 Página de Inicio (`index.html`)
- Hero section con llamadas a la acción
- Sección de beneficios (envío gratis, compra segura, devoluciones)
- Grid de cómics destacados (3 Marvel + 3 DC)
- Banner promocional de registro

### 🔴 Catálogo Marvel (`marvel.html`)
- 12 títulos del universo Marvel
- Cards con portada, autor, año, precio y descripción
- Botón de añadir al carrito (requiere sesión)
- Borde temático rojo

### 🔵 Catálogo DC (`dc.html`)
- 6 títulos del universo DC
- Misma estructura de cards que Marvel
- Borde temático azul

### 🛒 Carrito de Compras (`carrito.html`)
- Lista de productos añadidos
- Control de cantidad por producto
- Eliminación de productos
- Resumen del pedido con total
- Envío gratis en todos los pedidos
- Alerta si el usuario no está autenticado

### 🔑 Login (`login.html`)
- Inicio de sesión simulado con cuenta Demo
- Integración preparada para Firebase (Google Login real)
- Vista de perfil si el usuario ya está autenticado
- Cierre de sesión

---

## 🧱 Arquitectura del Código

El archivo `script.js` está organizado en módulos funcionales:

1. **Datos del catálogo** — Array de objetos con todos los cómics
2. **localStorage** — Funciones para guardar/leer carrito y usuario
3. **Navbar** — Renderizado dinámico de la zona de usuario y contador del carrito
4. **Cards de cómics** — Función `crearCardComic()` reutilizable
5. **Catálogo** — `renderizarCatalogo()` filtra por universo (marvel/dc)
6. **Carrito** — `renderizarCarrito()` con controles de cantidad y totales
7. **Toasts** — Sistema de notificaciones visuales
8. **Login** — `initLoginPage()` con lógica de sesión

---

## 📐 Diseño y UI

- Tema oscuro (`#0d0d0d`) con acentos **rojo Marvel** (`#e23636`) y **azul DC** (`#0476D0`)
- Variables CSS para consistencia de colores y tipografía
- Diseño **responsive** con `clamp()` y media queries
- Navbar con menú hamburguesa para móviles
- Componentes accesibles con atributos `aria-label` y roles semánticos

---

## 🗃️ Control de Versiones

| Commit | Descripción |
|---|---|
| `Initial commit` | Creación del repositorio con README |
| `Comic Store - proyecto completo` | Subida de todos los archivos del proyecto |

---

## 👤 Autor

**Andres_penagos** 
**Sebastian_Davil**
**Daniela_molano**
Proyecto educativo — 2026  
Institución: TEINCO  

---

## ⚠️ Aviso Legal

Marvel y DC son marcas registradas de sus respectivos dueños.  
Este proyecto es únicamente con fines educativos y no tiene ningún uso comercial.
