export function CollectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <header className="mx-auto max-w-[720px] px-4 py-12 text-center md:py-16">
      <h1 className="font-display text-4xl tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] md:text-[15px]">{description}</p>
    </header>
  )
}
