# Bimestre_08_DFI_Exp3_S7_FranciscoHenriquez
Mortal Store
Mortal Store es una aplicación web de eCommerce de videojuegos desarrollada con React y Vite como parte de la actividad de la Semana 7 de la asignatura Desarrollo Frontend I (PFY2201).

El proyecto implementa componentes funcionales, manejo de estado, propiedades (props), eventos, renderizado condicional y Hooks de React para entregar una experiencia de compra interactiva.

Funcionalidades
La aplicación incluye las siguientes funcionalidades:

Visualización de un catálogo de videojuegos.
Nombre, imagen y descripción de cada producto.
Precio normal y precio de oferta.
Carrusel de promociones destacadas.
Búsqueda de productos por nombre.
Filtro de productos por categoría.
Navegación directa por categorías desde el menú.
Mensaje condicional cuando una búsqueda no encuentra productos.
Agregar productos al carrito de compras.
Aumentar la cantidad de un producto en el carrito.
Disminuir la cantidad de un producto.
Eliminación automática del producto cuando su cantidad llega a cero.
Cálculo del subtotal de cada producto.
Cálculo de la cantidad total de productos.
Cálculo del precio total del carrito.
Contador dinámico de productos en la barra de navegación.
Mensaje condicional cuando el carrito está vacío.
Persistencia del carrito utilizando localStorage.
Formulario de contacto interactivo.
Mensaje de confirmación mediante renderizado condicional.
Diseño responsive para escritorio, tablet y dispositivos móviles.
Tecnologías utilizadas
React
Vite
JavaScript
JSX
HTML5
CSS3
Bootstrap
ESLint
Git
GitHub
Conceptos de React implementados
Componentes funcionales
La interfaz se encuentra dividida en componentes funcionales independientes para mantener una estructura modular y facilitar la reutilización del código.

Los principales componentes del proyecto son:

Header
Navbar
HeroCarousel
ProductFilter
ProductCard
Cart
InfoSection
ContactForm
Footer
Props
Se utilizan propiedades (props) para comunicar información y funciones entre los componentes.

Por ejemplo, cada producto es enviado al componente ProductCard, mientras que el carrito y las funciones para modificar las cantidades son enviados al componente Cart.

El componente Navbar también recibe la cantidad total de productos para actualizar dinámicamente el contador del carrito.

useState
El Hook useState se utiliza para administrar distintos estados de la aplicación, entre ellos:

Productos agregados al carrito.
Cantidades de productos.
Texto ingresado en el buscador.
Categoría seleccionada.
Datos ingresados en el formulario de contacto.
Estado del mensaje de confirmación del formulario.
useEffect
El Hook useEffect se utiliza para guardar automáticamente el contenido del carrito en localStorage cada vez que este cambia.

De esta manera, los productos y sus cantidades permanecen disponibles después de recargar la página.

Eventos
La aplicación utiliza distintos eventos para permitir la interacción del usuario:

onClick para agregar productos al carrito y modificar sus cantidades.
onChange para actualizar la búsqueda, categoría seleccionada y campos del formulario.
onSubmit para procesar el formulario de contacto.
Renderizado condicional
Se utiliza renderizado condicional para modificar la interfaz según el estado de la aplicación.

Algunos ejemplos implementados son:

Mostrar un mensaje cuando el carrito está vacío.
Mostrar un mensaje cuando los filtros no encuentran productos.
Mostrar el contenido del carrito cuando existen productos agregados.
Mostrar un mensaje de confirmación después de enviar el formulario de contacto.
Persistencia de datos
El carrito se almacena utilizando localStorage.

Cuando la aplicación se inicia, recupera el carrito previamente almacenado. Posteriormente, useEffect actualiza el almacenamiento cada vez que cambia el estado del carrito.

Esto permite conservar los productos y cantidades incluso después de actualizar la página.

Estructura principal del proyecto
Francisco_PFY2201_React_Semana7/
├── public/
│   ├── capturas/
│   │   ├── 01-catalogo.png
│   │   ├── 02-carrito.png
│   │   ├── 03-filtros.png
│   │   ├── 04-sin-resultados.png
│   │   ├── 05-contacto.png
│   │   └── 06-responsive.png
│   ├── img/
│   │   ├── fc26.jpg
│   │   ├── minecraft.jpg
│   │   └── mortal-kombat.jpg
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroCarousel.jsx
│   │   ├── InfoSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductFilter.jsx
│   ├── data/
│   │   └── productos.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── eslint.config.js
├── vite.config.js
└── README.md

Instalación
Para ejecutar el proyecto localmente es necesario tener Node.js y npm instalados.

1. Clonar el repositorio
git clone URL_DEL_REPOSITORIO

2. Ingresar a la carpeta del proyecto
cd Francisco_PFY2201_React_Semana7

3. Instalar las dependencias
npm install

Ejecución en desarrollo
Para iniciar el servidor de desarrollo:

npm run dev

Vite mostrará en la terminal la dirección local donde se encuentra disponible la aplicación.

Por defecto:

http://localhost:5173/

Verificación del código
Para comprobar el proyecto mediante ESLint:

npm run lint

El proyecto fue verificado correctamente sin errores de ESLint.

Compilación de producción
Para generar la versión optimizada de producción:

npm run build

Este comando genera automáticamente la carpeta dist.

El proyecto fue compilado correctamente con Vite antes de su publicación.

Capturas de funcionamiento
Las siguientes capturas evidencian las principales funcionalidades implementadas en Mortal Store.

Catálogo de productos
El catálogo presenta los videojuegos disponibles junto con su imagen, descripción, precio normal, precio de oferta y opción para agregarlos al carrito.

Catálogo de productos de Mortal Store

Carrito de compras
El carrito permite administrar las cantidades de los productos y calcula automáticamente subtotales, cantidad total de productos y precio total de la compra.

Carrito de compras de Mortal Store

Búsqueda y filtros
Los productos pueden filtrarse por categoría. En el siguiente ejemplo se seleccionó la categoría Lucha y se muestra solamente el producto correspondiente.

Filtro de productos por categoría

Renderizado condicional
Cuando no existen productos que coincidan con la búsqueda o los filtros seleccionados, la aplicación muestra un mensaje informativo mediante renderizado condicional.

Mensaje cuando no existen productos

Formulario de contacto
El formulario administra los datos ingresados mediante estado y muestra un mensaje de confirmación después de realizar el envío.

Formulario de contacto y mensaje de confirmación

Diseño responsive
La interfaz se adapta a diferentes tamaños de pantalla. La siguiente captura evidencia el funcionamiento de la aplicación en una vista móvil de 375 × 667 píxeles.

Vista responsive de Mortal Store

Pruebas realizadas
Antes de finalizar el proyecto se comprobaron las siguientes funcionalidades:

Funcionamiento automático y manual del carrusel.
Navegación entre las distintas secciones.
Búsqueda de productos por nombre.
Filtro de productos por categoría.
Navegación directa a categorías desde el menú.
Agregar productos al carrito.
Aumentar y disminuir cantidades.
Eliminación de productos al llegar a cantidad cero.
Cálculo de subtotales.
Cálculo de cantidad total de productos.
Cálculo del precio total del carrito.
Actualización del contador del carrito.
Persistencia del carrito después de recargar la página.
Mensaje de carrito vacío.
Mensaje cuando una búsqueda no encuentra resultados.
Envío del formulario de contacto.
Mensaje de confirmación del formulario.
Visualización responsive.
Revisión de la consola del navegador.
Verificación mediante ESLint.
Compilación de producción mediante Vite.
Sitio publicado
La aplicación será publicada mediante GitHub Pages.

URL: pendiente de publicación.

Repositorio
El código fuente del proyecto será almacenado en un repositorio público de GitHub.

GitHub: pendiente de publicación.

Estado del proyecto
Proyecto funcional, responsive y verificado mediante ESLint y compilación de producción con Vite.
