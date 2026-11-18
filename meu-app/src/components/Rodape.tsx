type RodapeProps = {
  ano: number
}

export function Rodape({ ano }: RodapeProps) {
  return (
    <footer className="mt-6 text-center text-sm text-slate-500">
      © {ano} - Meu Portfólio
    </footer>
  )
}
