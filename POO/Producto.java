package POO;

public class Producto {

    // Atributos

    private String nombre;
    private float precio;
    private int cantidad;

    // Constructor

    public Producto(String nombre, float precio, int cantidad){
        setNombre(nombre);
        setPrecio(precio);
        setCantidad(cantidad);
    }

    // Getters and Setters

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    // mostrarInfo

    public void mostrarInfo(){
        System.out.println("Nombre del producto: " + getNombre() + ", " +
                            "precio: " + getPrecio() + ", " +
                            "cantidad: " + getCantidad()
        );
    }
}
