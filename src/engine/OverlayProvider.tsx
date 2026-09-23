import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Overlay = 'cart' | 'search' | 'menu' | null

type OverlayContextValue = {
  overlay: Overlay
  open: (next: Exclude<Overlay, null>) => void
  close: () => void
}

const OverlayContext = createContext<OverlayContextValue | null>(null)

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] = useState<Overlay>(null)
  const open = useCallback((next: Exclude<Overlay, null>) => setOverlay(next), [])
  const close = useCallback(() => setOverlay(null), [])
  const value = useMemo(() => ({ overlay, open, close }), [overlay, open, close])
  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
}

export function useOverlay() {
  const ctx = useContext(OverlayContext)
  if (!ctx) throw new Error('useOverlay must be used within OverlayProvider')
  return ctx
}
