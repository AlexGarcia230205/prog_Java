package POO;

import java.util.ArrayList;

public class Tienda {

    // Atributos

    private String nombre;
    private ArrayList<Producto> productos;

    // Constructor

    public Tienda(String nombre){
        setNombre(nombre);
        this.productos = new ArrayList<>();
    }

    // Getters and Setters

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // registrarProducto

    public void registrarProducto(Producto p){
        this.productos.add(p);
        System.out.println("Producto añadido correctamente.");
    }

    // listarProductos

    public void listarProductos(){
        // foreach para recorrer todos los productos que haya en la tienda

        for (Producto p : productos) {
            p.mostrarInfo();
        }
    }

    // buscarProducto

    public Producto buscarProducto(String nombre){
        for (Producto p : productos) {
            if (p.getNombre().equalsIgnoreCase(nombre)) {
                return p;
            }
        }
        return null;
    }
}
