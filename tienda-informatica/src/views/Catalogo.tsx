import { useState } from "react";
import { ListaProductos } from "../componentes/ListaProductos";
import { productos } from "../data";
import type { Producto } from "../types/producto";

export const Catalogo = () => {
    // Estado para saber filtrar por categoria

    const [categoriaElegida, setCategoriaElegida] = useState<string | null>(null);

    // Logica filtrado

    let productoFiltrado:  Producto[];

    if (categoriaElegida !== null) {
        // Si hay categoria elegida, se filtra por ella

        productoFiltrado = productos.filter(p => p.categoria === categoriaElegida);

    } else {

        // Si no hay categoria, muestra todos los productos

        productoFiltrado = productos;
    }

    const categorias = ['Componente', 'Periferico', 'Equipo'];

    return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto px-5 py-10">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Catálogo de Productos
          </h1>
          
          {/* 3. Botones de Filtro */}
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <button 
              onClick={() => setCategoriaElegida(null)}
              className={`px-6 py-2 rounded-full transition-all ${!categoriaElegida ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Todos
            </button>
            {categorias.map(cat => (
              <button 
                key={cat}
                onClick={() => setCategoriaElegida(cat)}
                className={`px-6 py-2 rounded-full transition-all ${categoriaElegida === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>

        {/* 3. El error de 'items' debería desaparecer ahora */}
                {productoFiltrado.length > 0 ? (
                    <ListaProductos items={productoFiltrado} />
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl">Vaya, parece que no tenemos stock en esta categoría todavía.</p>
                    </div>
                )}
            </main>
    </div>
  );
};