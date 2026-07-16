export function Tipos() {
  return (
    <main className="min-h-screen flex flex-col bg-amber-100">
      
        <nav className="bg-red-600 p-5 flex items-center justify-between shadow-md">
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Pokédex
            </h1>
         
            <div className="flex gap-6">
            
             <button className="text-white font-medium hover:underline">Home</button>
             <button className="text-white font-medium hover:underline">Pokémons</button>
             <button className="text-white font-medium hover:underline">Tipos</button>
            </div>
        </nav>

        <div className="bg-red-300 h-34 m-10 flex flex-col items-center justify-center rounded-md shadow-md">
          <span className="text-5x5 font-bold tracking-wider">Tipos  de Pokémons</span>
          <span>Conheça Alguns tipos e suas Características.</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mt-4">

          <div className="w-full max-w-[250px] aspect-square bg-yellow-300 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Elétrico</span>
            <span className="">Pókemon rápidos que usam eletricidade</span>
              <button className="bg-yellow-500 text-black font-semibold  px-3 py-1 rounded-full text-xs">
                Pikachu
              </button>
          </div>

          <div className="w-full max-w-[250px] aspect-square bg-green-400 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Planta</span>
            <span className="">Usam energia da natureza,folhas,vinhas e sementes</span>
              <button className="bg-green-700 text-black font-semibold px-3 py-1 rounded-full text-xs">
                Bulbasaur
              </button>
          </div>

          <div className="w-full max-w-[250px] aspect-square bg-red-400 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Fogo</span>
            <span className="">Possuem ataques quentes intensos e explosivo</span>
            <button className="bg-red-700 text-white font-semibold px-3 py-1 rounded-full text-xs">
             Charmander
            </button>
          </div>

          <div className="w-full max-w-[250px] aspect-square bg-blue-300 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Água</span>
            <span className="">São versateis e usam jatos de água em batalhas</span>
            <button className="bg-blue-700 text-white font-semibold px-3 py-1 rounded-full text-xs">
                Squirtle
            </button>
          </div> 

          <div className="w-full max-w-[250px] aspect-square bg-blue-500 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Gelo</span>
            <span className="">Usam frio,neve e congelamento conta o seus oponente</span> 
            <button className="bg-blue-700 text-white font-semibold px-3 py-1 rounded-full text-xs">
              Lapras
            </button>
          </div>

          <div className="w-full max-w-[250px] aspect-square bg-gray-400 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Pedra</span>
            <span className="">São resistentes e possuem grande forca defensiva</span> 
            <button className="bg-orange-950 text-white font-semibold px-3 py-1 rounded-full text-xs">
             Onix
            </button>
          </div>

          <div className="w-full max-w-[250px] aspect-square bg-pink-300 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Psíquico</span>
            <span className="">Usam poderes mentais ,telecinese e energia psisica</span>
            <button className="bg-pink-500 text-white font-semibold px-3 py-1 rounded-full text-xs">
                Mewtwo
            </button>
          </div>

          <div className="w-full max-w-[250px] aspect-square bg-violet-400 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Fantasma</span>
            <span className="">Misterioso,assustador e deficil de atingir</span> 
            <button className="bg-violet-600 text-white font-semibold px-3 py-1 rounded-full text-xs">
               Gengar
            </button>
          </div>

        </div>
  
      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokédex, React + Tailwind</p>
      </footer>

    </main>
  );
}