package POO;

public class Alumno {
    
    // Atributos

    int id;
    String nombre;
    String apellido;

    // Constructor por defecto

    public Alumno(){}

    // Constructor con parámetros

    public Alumno(int id, String nombre, String apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Getters y Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    // Métodos

    public void mostrarNombre() {
        System.out.println("Nombre: " + getNombre());
    }

    public void aprobadoOSuspenso(double nota) {
        if (nota >= 5) {
            System.out.println("He aprobado.");
        } else {
            System.out.println("No he aprobado.");
        }
    }
}
