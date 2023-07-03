import Image from 'next/image';

export default function Indications() {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">

          <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image className="w-full" src="/limao.jpg" alt="Capa do album" width={120} height={120} />
          <strong className="font-semibold">Limão com Mel</strong>
          <span className="text-sm text-zinc-400">Paixão e Paixão</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image className="w-full" src="/valesca.jpg" alt="Capa do album" width={120} height={120} />
          <strong className="font-semibold">Valesca Pop</strong>
          <span className="text-sm text-zinc-400">Sou dessas</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image className="w-full" src="/calcinha.jpg" alt="Capa do album" width={120} height={120} />
          <strong className="font-semibold">Calcinha Preta</strong>
          <span className="text-sm text-zinc-400">Paulinha</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image className="w-full" src="/pericles.jpg" alt="Capa do album" width={120} height={120} />
          <strong className="font-semibold">Péricles</strong>
          <span className="text-sm text-zinc-400">Pagode do Pericão</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
          <Image className="w-full" src="/gustavo.jpg" alt="Capa do album" width={120} height={120} />
          <strong className="font-semibold">Gustavo Mioto</strong>
          <span className="text-sm text-zinc-400">Ao vivo em SP</span>
          </a>

          </div>
  )
}

