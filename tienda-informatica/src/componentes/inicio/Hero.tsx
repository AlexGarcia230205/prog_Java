export const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                {/* Imagen del Hero */}

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img 
                        className="object-cover object-center rounded-lg shadow-xl" 
                        alt="Expert Computer Setup" 
                        src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop"
                    />
                </div>

                {/* Contenido de texto */}

                <div className="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
                        Potencia tu Setup con
                        <br className="hidden lg:inline-block"/> Tecnología de Vanguardia
                    </h1>
                <p className="mb-8 leading-relaxed text-lg">
                    Desde los procesadores más rápidos del mercado hasta periféricos diseñados para ganar. En <strong>TechStore</strong>, seleccionamos cada componente para garantizarte el máximo rendimiento, ya seas un gamer entusiasta o un profesional creativo.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg transition-colors duration-200">
                        Explorar Catálogo
                    </button>
                    <button className="inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded text-lg transition-colors duration-200">
                        Montaje a Medida
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
};