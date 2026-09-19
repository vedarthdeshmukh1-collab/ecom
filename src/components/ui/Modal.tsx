import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  align?: 'center' | 'top'
}

export function Modal({ open, onClose, title, children, align = 'top' }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center bg-[var(--color-ink)]/40 px-4 py-6 md:py-16"
          style={{ alignItems: align === 'center' ? 'center' : 'flex-start' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal
            className="relative w-full max-w-2xl bg-[var(--color-bg)] p-6 md:p-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              {title ? (
                <h2 className="font-display text-2xl tracking-tight md:text-3xl">{title}</h2>
              ) : (
                <span />
              )}
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="text-[var(--color-ink)]"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
