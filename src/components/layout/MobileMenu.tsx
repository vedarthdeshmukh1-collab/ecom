import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Heading } from '@/components/system/Heading'
import { TextLink } from '@/components/system/Link'
import { useBrand } from '@/engine/BrandProvider'
import { useOverlay } from '@/engine/OverlayProvider'

export function MobileMenu() {
  const brand = useBrand()
  const { overlay, close } = useOverlay()
  const open = overlay === 'menu'

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-50 bg-[var(--color-ink)]/30 md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="fixed inset-y-0 left-0 z-50 flex w-full max-w-md flex-col bg-[var(--color-bg)]"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-4" style={{ height: 'var(--header-height)' }}>
              <span className="type-logo">{brand.logoText}</span>
              <button type="button" aria-label="Close menu" onClick={close} className="flex h-10 w-10 items-center justify-center">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 pt-8">
              {brand.navigation.map((link, i) => (
                <motion.div
                  key={link.href + link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                >
                  <Link to={link.href} onClick={close} className="type-h1 block py-3">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {brand.secondaryNav.map((link) => (
                <TextLink key={link.href + link.label} href={link.href} onClick={close} className="type-nav py-2">
                  {link.label}
                </TextLink>
              ))}
            </nav>
            <Heading variant="body-sm" as="p" className="px-6 py-8">
              {brand.tagline}
            </Heading>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
