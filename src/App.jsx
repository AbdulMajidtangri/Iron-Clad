import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Solutions from './pages/Solutions'
import About from './pages/About'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

function App() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}
    >
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
