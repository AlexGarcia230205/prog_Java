import { useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { Inicio } from "./views/Inicio";
import { Catalogo } from "./views/Catalogo";
import { Pie } from "./componentes/Pie";

export function App() {
  // Este estado dice qué página se ve ahora mismo
  const [paginaActual, setPaginaActual] = useState("Inicio");

  return (
    <div className="App">
      {/* La cabecera SIEMPRE está visible y le pasamos la función para cambiar el estado */}
      <Cabecera onNavigate={setPaginaActual} />

      {/* Aquí decidimos qué cuerpo mostrar según el estado */}
      <main>
        {paginaActual === "Inicio" ? (
          <Inicio />
        ) : (
          <Catalogo />
        )}
      </main>

      {/* El Pie también puede ir aquí para que sea fijo */}
      <Pie />
    </div>
  );
}