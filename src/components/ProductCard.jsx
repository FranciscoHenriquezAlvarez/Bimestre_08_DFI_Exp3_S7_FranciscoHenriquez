function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <article className="card product-card h-100">
      {/* Imagen correspondiente al producto. */}
      <div className="product-image-container">
        <img
          src={producto.imagen}
          className="card-img-top product-image"
          alt={producto.nombre}
        />
      </div>

      <div className="card-body">
        {/* Información principal del producto. */}
        <h2 className="card-title h5">
          {producto.nombre}
        </h2>

        <p className="card-text product-description">
          {producto.descripcion}
        </p>

        {/* Muestra el precio normal y el precio de oferta. */}
        <div className="product-prices">
          <span className="precio-normal">
            ${producto.precioNormal.toLocaleString('es-CL')}
          </span>

          <span className="precio-oferta">
            ${producto.precioOferta.toLocaleString('es-CL')}
          </span>
        </div>

        {/* Envía el producto seleccionado al carrito. */}
        <button
          type="button"
          className="btn btn-primary mt-auto"
          onClick={() => agregarAlCarrito(producto)}
          aria-label={`Agregar ${producto.nombre} al carrito`}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default ProductCard