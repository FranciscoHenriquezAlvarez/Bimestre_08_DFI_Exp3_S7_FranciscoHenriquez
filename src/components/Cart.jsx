function Cart({
  carrito,
  aumentarCantidad,
  eliminarDelCarrito,
}) {
  // Calcula la cantidad total de productos del carrito.
  const totalProductos = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  )

  // Calcula el precio total del carrito usando el precio de oferta.
  const totalPrecio = carrito.reduce(
    (total, producto) =>
      total + producto.precioOferta * producto.cantidad,
    0
  )

  return (
    <section className="container pb-5">
      <h2 className="fw-bold mb-3">
        Carrito de compras
      </h2>

      {carrito.length === 0 ? (
        <div
          className="alert alert-info"
          role="alert"
        >
          Tu carrito está vacío.
        </div>
      ) : (
        <>
          <div className="list-group mb-3">
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="list-group-item"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>
                      {producto.nombre}
                    </strong>

                    <p className="mb-1">
                      Precio: $
                      {producto.precioOferta.toLocaleString(
                        'es-CL'
                      )}
                    </p>

                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span>
                        Cantidad:
                      </span>

                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          eliminarDelCarrito(producto.id)
                        }
                        aria-label={`Disminuir cantidad de ${producto.nombre}`}
                      >
                        −
                      </button>

                      <strong>
                        {producto.cantidad}
                      </strong>

                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() =>
                          aumentarCantidad(producto.id)
                        }
                        aria-label={`Aumentar cantidad de ${producto.nombre}`}
                      >
                        +
                      </button>
                    </div>

                    <strong>
                      Subtotal: $
                      {(
                        producto.precioOferta *
                        producto.cantidad
                      ).toLocaleString('es-CL')}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p>
            <strong>
              Total de productos:
            </strong>{' '}
            {totalProductos}
          </p>

          <p className="fs-5">
            <strong>
              Total:
            </strong>{' '}
            ${totalPrecio.toLocaleString('es-CL')}
          </p>
        </>
      )}
    </section>
  )
}

export default Cart