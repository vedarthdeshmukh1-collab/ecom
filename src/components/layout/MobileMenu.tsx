import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBrand } from '@/engine/BrandProvider'
import { useOverlay } from '@/engine/OverlayProvider'

export function MobileMenu() {
  const brand = useBrand()
  const { overlay, close } = useOverlay()
  const open = overlay === 'menu'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-[var(--color-bg)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <div className="flex h-14 items-center justify-between px-4">
            <span className="font-display text-lg tracking-[0.4em]">{brand.logoText}</span>
            <button type="button" aria-label="Close menu" onClick={close} className="flex h-10 w-10 items-center justify-center">
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-10">
            {brand.navigation.map((link, i) => (
              <motion.div
                key={link.href + link.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.35 }}
              >
                <Link
                  to={link.href}
                  onClick={close}
                  className="font-display block py-3 text-4xl tracking-tight"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <p className="absolute bottom-8 left-6 max-w-xs text-sm text-[var(--color-muted)]">{brand.tagline}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
