package POO;

public class Alumno {
    
    // Atributos

    int id;
    String nombre;
    String apellido;


    // Métodos

    public void mostrarNombre() {
        System.out.println("Nombre: ");
    }

    public void aprobadoOSuspenso(double nota) {
        if (nota >= 5) {
            System.out.println("He aprobado.");
        } else {
            System.out.println("No he aprobado.");
        }
    }
}
