import { images } from "../imagenes/images";

export const TarjetasCategorias = () => {
    return(
        <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-xs text-blue-600 tracking-widest font-medium title-font mb-1 uppercase">Especialistas en Hardware</h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-slate-900">Nuestras Líneas de Producto</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Categoría Gaming */}
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
              <img src={images.gaming} alt="Gaming" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">Mundo Gaming</h3>
                <p className="text-slate-200 text-sm mb-4">PCs ensamblados para ganar.</p>
                <button className="text-white bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium self-start hover:bg-blue-700 transition-colors">Ver ahora</button>
              </div>
            </div>

            {/* Categoría Componentes */}
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
              <img src={images.components} alt="Componentes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">Hardware & Piezas</h3>
                <p className="text-slate-200 text-sm mb-4">Lo último en CPUs y GPUs.</p>
                <button className="text-white bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium self-start hover:bg-blue-700 transition-colors">Explorar</button>
              </div>
            </div>

            {/* Categoría Periféricos */}
            <div className="relative overflow-hidden rounded-2xl group h-80 shadow-lg">
              <img src={images.peripherals} alt="Periféricos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">Periféricos Top</h3>
                <p className="text-slate-200 text-sm mb-4">Teclados, ratones y monitores.</p>
                <button className="text-white bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium self-start hover:bg-blue-700 transition-colors">Descubrir</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
};