export function Welcome() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-pink-100">
      
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

      <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col gap-8">
        
        <div className="flex gap-2 max-w-md w-full mx-auto shadow-sm">
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            className="w-full p-3 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-gray-800"
          />
          <button className="bg-red-600 text-white px-14 py-5 rounded-r-lg font-bold hover:bg-red-700 transition-colors">
            Buscar
          </button>
        </div> 

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mt-4">

          <div className="w-full max-w-[200px] aspect-square bg-yellow-300 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Pikachu</span>
            <span className="bg-yellow-500/30 text-yellow-900 font-semibold px-3 py-1 rounded-full text-xs">
              Elétrico
            </span> 
          </div>

          <div className="w-full max-w-[200px] aspect-square bg-green-400 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Bulbasaur</span>
            <span className="bg-green-700/30 text-green-950 font-semibold px-3 py-1 rounded-full text-xs">
              Planta
            </span>
          </div>

          <div className="w-full max-w-[200px] aspect-square bg-red-400 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Charmander</span>
            <span className="bg-red-700/30 text-red-950 font-semibold px-3 py-1 rounded-full text-xs">
              Fogo
            </span>
          </div>

          <div className="w-full max-w-[200px] aspect-square bg-blue-300 text-black flex flex-col items-center justify-center gap-3 rounded-xl shadow-md transform hover:scale-105 transition-transform p-4">
            <span className="font-bold text-base">Squirtle</span>
            <span className="bg-blue-700/30 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">
              Água
            </span>
          </div> 
          
        </div>
      </div>
  
      <footer className="bg-blue-950 p-4 mt-auto">
        <p className="text-white text-center text-sm font-medium">
          Pokédex &copy; {new Date().getFullYear()} - React + Tailwind
        </p>
      </footer>

    </main>
  );
}