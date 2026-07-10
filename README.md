# 🛍️ Tienda de Productos Nacionales

Aplicación web desarrollada en **React** como proyecto final, que simula un sitio de comercio electrónico dedicado a la venta de productos nacionales argentinos.

La aplicación permite navegar por el catálogo de productos, consultar información detallada, agregar productos al carrito, realizar búsquedas y finalizar una compra mediante un formulario cuyos datos se almacenan en Firebase.

---

# 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Firebase Firestore
- Context API
- CSS Modules
- React Icons

---

# ✨ Funcionalidades

## Catálogo de productos

- Visualización de todos los productos.
- Tarjetas con imagen, nombre y precio.
- Navegación mediante paginación.
- Productos obtenidos desde Firebase Firestore.

---

## Categorías

Los productos pueden filtrarse por categorías.

Ejemplo:

- Tecnologia
- Desarrollo web

---

## Buscador

Incluye una barra de búsqueda que permite encontrar productos por nombre en tiempo real.

---

## Detalle del producto

Cada producto posee una página individual donde se muestra:

- Imagen ampliada.
- Nombre.
- Descripción.
- Precio.
- Stock disponible.
- Referencias y opiniones.
- Botón para agregar al carrito.

---

## Carrito de compras

El carrito permite:

- Agregar productos.
- Eliminar productos.
- Vaciar el carrito.
- Modificar cantidades.
- Calcular automáticamente:

  - Subtotal
  - Total de productos
  - Precio final

Los datos del carrito son administrados mediante **Context API**.

---

## Checkout

El usuario puede completar un formulario con:

- Nombre
- Apellido
- Email

---

## Firebase

Se utiliza Firestore para almacenar:

### Colección Productos

Cada documento contiene:

- nombre
- categoría
- precio
- imagen
- descripción
- stock

### Colección Opiniones

Cada documento contiene:

- idProducto
- usuario
- comentario
- puntuación

### Colección Órdenes

Se almacena:

- comprador
- productos
- cantidades
- total
- fecha

---

# 📁 Estructura del proyecto

```
src/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Item/
│   ├── ItemDetail/
│   ├── Cart/
│   ├── Checkout/
│   ├── BarraBusqueda/
│   ├── Paginacion/
│   └── Layout/
│
├── context/
│   ├── CartContext.jsx
│   └── BusquedaContext.jsx
│
├── firebase/
│   └── config.js
│
├── pages/
│   ├── Home.jsx
│   ├── Carrito.jsx
│   ├── ItemDetail.jsx
│   └── Checkout.jsx
│
└── App.jsx
```

---

# 💾 Instalación

Clonar el repositorio

```bash
git clone https://github.com/SilviaBouza/mi-proyecto-react-v2.git
```

Ingresar al proyecto

```bash
cd TU-REPOSITORIO
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

# 🔥 Base de datos

El proyecto utiliza **Firebase Firestore** como base de datos NoSQL.

La información de productos, opiniones y órdenes se obtiene de forma dinámica desde Firestore.

---

# 🎨 Diseño

La interfaz fue desarrollada utilizando:

- CSS Modules
- Diseño responsive
- Componentes reutilizables
- Navegación mediante React Router
- Iconografía con React Icons

---

# 📚 Conceptos aplicados

Durante el desarrollo se utilizaron conceptos de:

- Componentes funcionales
- Hooks
- useState
- useEffect
- useContext
- Context API
- React Router
- Renderizado condicional
- Props
- Eventos
- Manejo de formularios
- Firebase Firestore
- Async / Await
- Fetch de datos
- CSS Modules

---

# 📸 Características principales

✔ Catálogo dinámico

✔ Detalle de productos

✔ Carrito persistente mediante Context

✔ Checkout

✔ Firebase Firestore

✔ Gestión de stock

✔ Opiniones por producto

✔ Buscador

✔ Paginación

✔ Diseño responsive

---

# 👩‍💻 Autora

Proyecto desarrollado por **Silvia** como práctica integral de React y Firebase.

---

# 📄 Licencia

Proyecto con fines educativos.