import { Home as HomeIcon, Search, Library } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400">
              <HomeIcon />
              Home
            </a>

            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400">
              <Search />
              Procurar
            </a>

            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400">
              <Library />
              Sua biblioteca
            </a>

          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">

            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Hot Hits Brasil</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">A verdadeira MPB</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Ouvir a qualquer hora</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Rock dos anos 2000</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Indie Rock</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">O melhor do Ragae</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">KPOP moderno</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">As mais tocadas</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Carnaval</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Festas Juninas</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Lollapalooza</a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-200">Tomorrowland</a>

          </nav>

        </aside>
  )
}

