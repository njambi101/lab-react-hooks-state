import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
    const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  function handleToggleDarkMode() {
    setIsDarkMode(prev => !prev)
  }

  function handleAddToCart(product) {
    setCart(prev => {
      if (prev.find(item => item.id === product.id)) return prev
      return [...prev, product]
    })
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />
      <label>Filter by Category: </label>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      <ProductList selectedCategory={selectedCategory} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  )
}

export default App
