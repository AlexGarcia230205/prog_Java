package POO;
public class Concesionario {

    // Atributos

    private String nombreEmpresa;
    private Coche cocheExposicion;

    // Constructor con parámetros

    public Concesionario(String nombreEmpresa){
        this.nombreEmpresa = nombreEmpresa;
    }

    // Métodos

    public void recibirCoche(Coche nuevoCoche){
        this.cocheExposicion = nuevoCoche;
    }

    public Coche venderCoche(){
        System.out.println("El coche " + cocheExposicion.getMarca() +  " " + cocheExposicion.getModelo() + " ha sido vendido por " + cocheExposicion.getPrecio());
        return cocheExposicion;
    }

    // Getters

    public String getNombreEmpresa() {
        return nombreEmpresa;
    }
}
