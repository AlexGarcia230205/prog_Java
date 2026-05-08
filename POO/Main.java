package POO;

import java.util.Scanner;

public class Main {

    public static Scanner sc = new Scanner(System.in);
    public static Tienda miTienda = new Tienda("TecShop");
    public static void main(String[] args){

        int opcion;

        do {
            System.out.println("1. Añadir");
            System.out.println("2. Listar");
            System.out.println("3. Buscar");
            System.out.println("4. Salir");

            opcion = sc.nextInt();
            sc.nextLine();

            switch (opcion) {
                case 1:
                    insertarProducto();
                    break;
                
                case 2:
                    listarTodo();
                    break;
                
                case 3:
                    buscar();
                    break;

                default:
                    break;
            }

        } while (opcion != 4);
    }

    // Uso de registrarProducto

    public static void insertarProducto(){

        System.out.println("Introduzca el nombre del producto: ");
        String nombre = sc.nextLine();

        System.out.println("Introduzca el precio del producto: ");
        Double precio = sc.nextDouble();

        System.out.println("Cantidad de productos: ");
        int cantidad = sc.nextInt();
        sc.nextLine();

        Producto nuevoProducto = new Producto(nombre, precio, cantidad);
        miTienda.registrarProducto(nuevoProducto);
    }

    // Uso de listarProductos

    public static void listarTodo(){
        System.out.println("--- Inventario de la tienda ---");

        miTienda.listarProductos();

        System.out.println("--- Inventario de la tienda ---");
    }

    // Uso de buscarProducto

    public static void buscar(){
        System.out.println("Introduce el nombre del producto a buscar: ");
        String nombre = sc.nextLine();

        Producto resProducto = miTienda.buscarProducto(nombre);

        if (resProducto != null) {
            System.out.println("--- Producto encontrado ---");
            resProducto.mostrarInfo();
        } else {
            System.out.println("ERROR: No se ha encontrado ningún producto llamado " + nombre + ".");
        }

    }
}
