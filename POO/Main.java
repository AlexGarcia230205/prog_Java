package POO;

public class Main {
    public static void main(String[] args) {
        // Creo mi concesionario (Instanciación)

        Concesionario tienda = new Concesionario("Java Motors");

        // Voy a crear mi coche por defecto

        Coche coche = new Coche();

        // Guardo el coche en el concesionario

        tienda.recibirCoche(coche);

        // Luego lo vendemos

        tienda.venderCoche();
    }
    
}
