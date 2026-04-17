export function Welcome() {
  return (
    <main className="min-h-screen flex flex-col justify-between from-orange-300 bg-pink-100 ">
      
      <nav className="bg-red-600 to-orange-300 p-7 flex items-center justify-between shadow-md">
        <h1 className="text-white text-2xl font-bold">
          Pokédex
        </h1>

        <div className="flex gap-4">
          <button className="text-white hover:underline">Home</button>
          <button className="text-white hover:underline">Pokémons</button>
          <button className="text-white hover:underline">Tipos</button>
        </div>

      </nav>


        <div className="flex gap-2 mt-10">
          <input
            type="text"
            placeholder=""
            className="w-full p-3 rounded-lg border  border-gray-300 shadow-sm focus:outline-none"
          />
          <button className="bg-red-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
            Buscar
          </button>
        </div> 

      <div className="flex gap-5 p-2 justify-center">
      <div className="h-45 w-70 aspect-square bg-yellow-300 text-white text-xs flex items-center justify-center rounded-md">
        Pikachu
    </div>

    <div className="h-45 w-70 aspect-square bg-green-500 text-white text-xs flex items-center justify-center rounded-md">
        Bulbasaur
    </div>

    <div className="h-45 w-70 aspect-square bg-red-400 text-white text-xs flex items-center justify-center rounded-md">
        Charmander
    </div>

    <div className="h-45 w-70 aspect-square bg-blue-300 text-white text-xs flex items-center justify-center rounded-md">
        Squirtle
    </div>
      </div>
      

      <div className="grow">

      </div>

      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokédex, React + Tailwind</p>
      </footer>
    </main>
  );
}
