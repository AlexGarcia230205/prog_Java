export const Servicios = () => {
    return (
    <section className="bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">🚀</span>
              <h3 className="font-bold text-slate-800">Envío Express</h3>
              <p className="text-sm text-slate-500">Recibe tus componentes en 24h en toda Almería.</p>
            </div>
            <div className="flex flex-col items-center border-x border-slate-100">
              <span className="text-3xl mb-2">🛡️</span>
              <h3 className="font-bold text-slate-800">Garantía Premium</h3>
              <p className="text-sm text-slate-500">3 años de protección técnica oficial.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">🛠️</span>
              <h3 className="font-bold text-slate-800">Soporte Real</h3>
              <p className="text-sm text-slate-500">Técnicos expertos a tu disposición, sin bots.</p>
            </div>
          </div>
        </div>
      </section>
    );
};