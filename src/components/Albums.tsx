import { Play } from "lucide-react"
import Image from 'next/image';

export default function Albums() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">

            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
             <Image src="/marilia.png" alt="Capa do album" width={80} height={80} />
            <strong>Marília Mendonça</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>

            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
            <Image src="/anitta.jpg" alt="Capa do album" width={80} height={80} />
            <strong>Anitta</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button> 
            </a>

            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10">
            <Image src="/gloria.jpg" alt="Capa do album" width={80} height={80} />
            <strong>Gloria Groove</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>

            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
            <Image src="/luan.jpg" alt="Capa do album" width={80} height={80} />
            <strong>Luan City 2.0</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>

            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
            <Image src="/pabllo.jpg" alt="Capa do album" width={80} height={80} />
            <strong>Pabllo Vittar</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>

            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
            <Image src="/blackclover.jpg" alt="Capa do album" width={80} height={80} />
            <strong>Black Clover</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
            </a>

          </div>
  )
}

