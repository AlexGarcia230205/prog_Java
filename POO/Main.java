package POO;

public class Main {
    public static void main(String[] args) {
        
        // Instanciamos la clase alumno

        Alumno alumno1 = new Alumno(1, "Alex", "García");

        // Mostramos el apellido del alumno

        System.out.println("El apellido del alumno es: " + alumno1.getApellido());

        // Usamos el metodo para mostrar el nombre del alumno

        alumno1.mostrarNombre();
    }
}
