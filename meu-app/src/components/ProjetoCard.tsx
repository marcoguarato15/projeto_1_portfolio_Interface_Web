type ProjetoCardProps = {
  nome: string
  descricao: string
  status: 'Em andamento' | 'Concluído'
  link?: string
}

export function ProjetoCard({
  nome,
  descricao,
  status,
  link,
}: ProjetoCardProps) {
  return (
    <article
      className="
      rounded-xl
      bg-white
      p-4
      shadow-md
      transition
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
      <h3 className="text-lg font-bold">
        {nome}
      </h3>

      <p className="mt-2 text-slate-600">
        {descricao}
      </p>

      {status === 'Em andamento' && (
        <p className="mt-2 font-semibold text-orange-600">
          Em andamento
        </p>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          className="mt-3 block text-emerald-700"
        >
          Ver projeto
        </a>
      )}
    </article>
  )
}