import { useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Painel } from './components/Painel'
import { HabilidadeItem } from './components/HabilidadeItem'
import { ProjetoCard } from './components/ProjetoCard'
import { Rodape } from './components/Rodape'

import foto from './assets/perfil.jpg'

type Habilidade = {
  id: number
  nome: string
  nivel: 'Básico' | 'Intermediário' | 'Avançado'
}

type Projeto = {
  id: number
  nome: string
  descricao: string
  status: 'Em andamento' | 'Concluído'
  link?: string
}

const habilidades: Habilidade[] = [
  {
    id: 1,
    nome: 'CSS',
    nivel: 'Básico',
  },
  {
    id: 2,
    nome: 'Angular',
    nivel: 'Intermediário',
  },
  {
    id: 3,
    nome: 'HTML5',
    nivel: 'Avançado',
  },
]

const projetos: Projeto[] = [
  {
    id: 1,
    nome: 'Portfólio Pessoal',
    descricao: 'Projeto de portfolio - Gustavo Guanabara.',
    status: 'Em andamento',
    link: "https://github.com/marcoguarato15/projeto-portfolio",
  },
  {
    id: 2,
    nome: 'Projeto de redes sociais',
    descricao: 'Projeto de redes sociais - Gustavo Guanabara.',
    status: 'Concluído',
    link: 'https://github.com/marcoguarato15/projeto-social',
  },
]

function App() {
  return (
    <main className="p-4">
      <Cabecalho
        nome="Marco Antonio Guarato Alves"
        curso="Análise e Desenvolvimento de Sistemas"
        foto={foto}
      />

      <Painel titulo="Sobre Mim">
        <p>
          Atualmente estudo Análise e Desenvolvimento de Sistemas e tenho interesse em
          desenvolvimento web utilizando React, TypeScript e Tailwind CSS.
        </p>
      </Painel>

      <section className="mt-6">
        <h2 className="mb-4 text-xl font-bold">
          Habilidades
        </h2>

        <ul className="space-y-2">
          {habilidades.map((d) => (
            <HabilidadeItem
              key={d.id}
              nome={d.nome}
              nivel={d.nivel}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App