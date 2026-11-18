type CabecalhoProps = {
  nome: string
  curso: string
  foto: string
}

export function Cabecalho({ nome, curso, foto }: CabecalhoProps) {
  return (
    <header className="rounded-xl bg-white p-6 shadow">
      <img
        src={foto}
        alt={`Foto de ${nome}`}
        className="mx-auto size-24 rounded-full"
      />

      <h1 className="mt-4 text-2xl font-bold">
        {nome}
      </h1>

      <p className="text-slate-600">
        {curso}
      </p>
    </header>
  )
}