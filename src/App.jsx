import { useEffect, useState } from 'react'
import productos from './data/productos.json'

import Header from './components/Header'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import ProductCard from './components/ProductCard'
import ProductFilter from './components/ProductFilter'
import Cart from './components/Cart'
import InfoSection from './components/InfoSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import './App.css'

function App() {
  // Recupera el carrito guardado en el navegador.
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem(
      'carritoMortalStore'
    )

    if (carritoGuardado) {
      return JSON.parse(carritoGuardado)
    }

    return []
  })

  // Estados utilizados para filtrar el catálogo.
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  // Guarda automáticamente el carrito cada vez que cambia.
  useEffect(() => {
    localStorage.setItem(
      'carritoMortalStore',
      JSON.stringify(carrito)
    )
  }, [carrito])

  // Agrega un producto al carrito.
  // Si ya existe, aumenta su cantidad.
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExiste = carritoActual.find(
        (item) => item.id === producto.id
      )

      if (productoExiste) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        )
      }

      return [
        ...carritoActual,
        {
          ...producto,
          cantidad: 1,
        },
      ]
    })
  }

  // Aumenta en una unidad la cantidad de un producto.
  const aumentarCantidad = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      )
    )
  }

  // Disminuye la cantidad de un producto.
  // Si llega a cero, lo elimina del carrito.
  const eliminarDelCarrito = (id) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.id === id
            ? {
                ...item,
                cantidad: item.cantidad - 1,
              }
            : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }

  // Calcula la cantidad total de unidades del carrito.
  const totalProductos = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  )

  // Filtra los productos según el texto ingresado
  // y la categoría seleccionada.
  const productosFiltrados = productos.filter(
    (producto) => {
      const coincideBusqueda = producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase())

      const coincideCategoria =
        categoria === 'Todas' ||
        producto.categoria === categoria

      return coincideBusqueda && coincideCategoria
    }
  )

  return (
    <>
      <Header />

      <Navbar
        totalProductos={totalProductos}
        setCategoria={setCategoria}
      />

      <HeroCarousel />

      <main className="contenedor contenido-principal">
        <section
          id="catalogo"
          className="seccion-productos"
          aria-labelledby="titulo-productos"
        >
          <h2 id="titulo-productos">
            Productos destacados
          </h2>

          <ProductFilter
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            categoria={categoria}
            setCategoria={setCategoria}
          />

          {productosFiltrados.length > 0 ? (
            <div className="row g-4">
              {productosFiltrados.map((producto) => (
                <div
                  className="col-12 col-sm-6 col-lg-4"
                  key={producto.id}
                >
                  <ProductCard
                    producto={producto}
                    agregarAlCarrito={agregarAlCarrito}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="alert alert-warning mensaje-sin-productos"
              role="alert"
            >
              No se encontraron productos con los filtros
              seleccionados.
            </div>
          )}
        </section>

        <section
          id="carrito"
          className="seccion-carrito"
        >
          <Cart
            carrito={carrito}
            aumentarCantidad={aumentarCantidad}
            eliminarDelCarrito={eliminarDelCarrito}
          />
        </section>

        <InfoSection />

        <ContactForm />
      </main>

      <Footer />
    </>
  )
}

export default App