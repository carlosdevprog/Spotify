import { ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Albums from "@/components/Albums";
import Indications from "@/components/Indications";

export default function Home() {
  return (

    <div className="h-screen flex flex-col">

      <div className="flex flex-1">

         <Sidebar/>

        <main className="flex-1 p-6">

          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft/>
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Boa tarde</h1>
          <Albums/>

          <h2 className="font-semibold text-2xl mt-10">Feito para Carlos Eduardo Lima</h2>
          <Indications/>

        </main>
      </div>

      <Footer/>
    </div>

  )
}
