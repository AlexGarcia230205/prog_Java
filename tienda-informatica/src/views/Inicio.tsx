import { Hero } from "../componentes/inicio/Hero";
import { Servicios } from "../componentes/inicio/Servicios";
import { TarjetasCategorias } from "../componentes/inicio/TarjetasCategorias";
import { ServicioTecnico } from "../componentes/inicio/ServicioTecnico";

export const Inicio = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">

      {/* 1. INTRODUCCIÓN (Hero) */}
      <Hero />

      {/* 2. BARRA DE CONFIANZA (Trust Badges) */}
      <Servicios />

      {/* 3. CATEGORÍAS DESTACADAS (Tiled Images) */}
      <TarjetasCategorias />

      {/* 4. SECCIÓN DE SERVICIO TÉCNICO (Highlighted Service) */}
      <ServicioTecnico />

    </div>
  );
};