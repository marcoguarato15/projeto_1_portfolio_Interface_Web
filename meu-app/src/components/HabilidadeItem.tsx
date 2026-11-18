type HabilidadeItemProps = {
  nome: string
  nivel: 'Básico' | 'Intermediário' | 'Avançado'
}

export function HabilidadeItem({
  nome,
  nivel,
}: HabilidadeItemProps) {
  return (
    <li className="rounded-lg bg-slate-100 p-3">
      {nome} - {nivel}
    </li>
  )
}