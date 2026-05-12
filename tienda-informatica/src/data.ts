// src/data.ts
import type { Producto } from './types/producto'; // Asegúrate de que la interfaz esté exportada en un archivo types.ts o definida aquí
 // Asegúrate de que la interfaz esté exportada en un archivo types.ts o definida aquí

export const productos: Producto[] = [
    {
        id: 1,
        nombre: "Procesador Intel Core i9-14900K",
        descripcion: "Procesador de alto rendimiento con 24 núcleos y 32 hilos, ideal para gaming extremo y diseño profesional.",
        precio: 589.99,
        categoria: 'Componente',
        imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop",
        stock: 15
    },
    {
        id: 2,
        nombre: "Logitech G Pro X Superlight 2",
        descripcion: "Ratón inalámbrico ultra ligero para eSports con sensor HERO 2 de 32,000 DPI.",
        precio: 159.00,
        categoria: 'Periferico',
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
        stock: 42
    },
    {
        id: 3,
        nombre: "Laptop ASUS ROG Zephyrus G14",
        descripcion: "Potente equipo portátil con RTX 4070 y pantalla OLED de 120Hz. Potencia en formato compacto.",
        precio: 1850.50,
        categoria: 'Equipo',
        imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop",
        stock: 5
    },
    {
        id: 4,
        nombre: "Teclado Mecánico Keychron Q1 V2",
        descripcion: "Teclado premium con cuerpo de aluminio, switches intercambiables y retroiluminación RGB.",
        precio: 199.99,
        categoria: 'Periferico',
        imagen: "https://images.unsplash.com/photo-1618384881928-3488f0d05c44?q=80&w=800&auto=format&fit=crop",
        stock: 12
    },
    {
        id: 5,
        nombre: "Tarjeta Gráfica NVIDIA RTX 4080 Super",
        descripcion: "Gráfica de última generación con 16GB VRAM, soporte para Ray Tracing y DLSS 3.5.",
        precio: 1120.00,
        categoria: 'Componente',
        imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
        stock: 8
    },
    {
        id: 6,
        nombre: "Monitor Gaming Samsung Odyssey G7",
        descripcion: "Monitor curvo de 32 pulgadas, 240Hz y resolución QHD para una inmersión total.",
        precio: 549.00,
        categoria: 'Periferico',
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
        stock: 20
    }
];