import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/app/Layout'
import { BrandProvider } from '@/engine/BrandProvider'
import { CartProvider } from '@/engine/CartProvider'
import { OverlayProvider } from '@/engine/OverlayProvider'
import { AboutPage } from '@/pages/AboutPage'
import { CollectionPage } from '@/pages/CollectionPage'
import { FoundationPage } from '@/pages/FoundationPage'
import { HomePage } from '@/pages/HomePage'
import { ProductPage } from '@/pages/ProductPage'

export default function App() {
  return (
    <BrandProvider>
      <OverlayProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/system" element={<FoundationPage />} />
                <Route path="/collections/:slug" element={<CollectionPage />} />
                <Route path="/products/:slug" element={<ProductPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </OverlayProvider>
    </BrandProvider>
  )
}
