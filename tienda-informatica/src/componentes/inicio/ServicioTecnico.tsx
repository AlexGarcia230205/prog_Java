import { images } from "../imagenes/images";

export const ServicioTecnico = () => {
    return (
    <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-blue-400 font-bold mb-2">Servicio Post-Venta</h2>
            <h1 className="text-4xl font-bold mb-6">¿Tu equipo necesita un ajuste?</h1>
            <p className="text-slate-400 mb-8 leading-relaxed">
              No solo vendemos hardware, también somos el servicio técnico de referencia en la provincia. 
              Realizamos limpieza de componentes, cambio de pasta térmica, optimización de software 
              y montajes de refrigeración líquida personalizada.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Solicitar Cita</button>
              <button className="border border-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">Saber más</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={images.service} alt="Técnico" className="rounded-3xl shadow-2xl border border-slate-800" />
          </div>
        </div>
      </section>
    );
};