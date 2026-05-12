import type { Producto } from "../types/producto"; // Importa la interfaz que creamos al principio

// 1. Definimos que este componente ahora espera recibir una lista llamada 'items'
interface Props {
  items: Producto[];
}

// 2. Quitamos el import de 'productos' de arriba y usamos 'items' que viene por props
export const ListaProductos = ({ items }: Props) => { 
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          
          {/* 3. Ahora recorremos 'items' (los que vienen filtrados o todos) */}
          {items.map((producto) => (
            <div key={producto.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img 
                  alt={producto.nombre} 
                  className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110" 
                  src={producto.imagen} 
                />
                </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                  {producto.categoria}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {producto.nombre}
                </h2>
                <p className="mt-1 font-bold text-blue-600">
                  {producto.precio}€
                </p>
                <button className="mt-2 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};