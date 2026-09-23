import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CartDrawer } from '@/components/commerce/CartDrawer'
import { SearchInterface } from '@/components/commerce/SearchInterface'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { applyTheme } from '@/engine/applyTheme'
import { useBrand } from '@/engine/BrandProvider'
import { useOverlay } from '@/engine/OverlayProvider'

export function Layout() {
  const brand = useBrand()
  const { close } = useOverlay()
  const location = useLocation()

  useEffect(() => {
    applyTheme(brand)
  }, [brand])

  useEffect(() => {
    close()
    window.scrollTo(0, 0)
  }, [location.pathname, close])

  return (
    <div className="min-h-dvh">
      <AnnouncementBar />
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
      <MobileMenu />
      <SearchInterface />
    </div>
  )
}
