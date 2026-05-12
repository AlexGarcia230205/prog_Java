export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: 'Componente' | 'Periferico' | 'Equipo';
    imagen: string;
    stock: number;
}