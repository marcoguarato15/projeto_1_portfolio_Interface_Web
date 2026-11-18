import type { ReactNode } from 'react'

type PainelProps = {
  titulo: string
  children: ReactNode
}

export function Painel({ titulo, children }: PainelProps) {
  return (
    <section className="rounded-xl border border-slate-200 p-4">
      <h2 className="mb-3 text-xl font-semibold text-emerald-700">
        {titulo}
      </h2>

      {children}
    </section>
  )
}