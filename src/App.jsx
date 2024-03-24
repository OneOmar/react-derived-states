import { useState } from 'react'
import './styles.css'

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, title: 'product 1', quantity: 1 },
    { id: 2, title: 'product 2', quantity: 2 },
    { id: 3, title: 'product 3', quantity: 3 }
  ])

  const [selectedId, setSelectedId] = useState(null)

  const selectedProduct = products.find((p) => p.id === selectedId)

  const handleChoose = (id) => {
    setSelectedId(id)
  }

  const incrementDecrement = (id, amount) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + amount) }
          : product
      )
    )
  }

  return (
    <div className='container'>
      <h4>All Products</h4>
      {products.map((product) => (
        <div className='product' key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)}>Choose</button>
          </span>
          <div>
            <button onClick={() => incrementDecrement(product.id, -1)}>
              -
            </button>
            <span>{product.quantity}</span>
            <button onClick={() => incrementDecrement(product.id, 1)}>+</button>
          </div>
        </div>
      ))}
      <h4>Selected Product</h4>
      {selectedProduct && (
        <div className='selected-product'>
          <span>{selectedProduct.title}</span>
          <br />
          <span>{selectedProduct.quantity}</span>
        </div>
      )}
    </div>
  )
}
