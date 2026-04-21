package POO;

public class Coche {

    // Atributos

    private String marca;
    private String modelo;
    private String color;
    private String tipo;
    private double precio;
    private int numeroPuertas;
    private String tipoCombustible;
    private int potencia;

    // Constructor con parámetros

    public Coche(String marca, String modelo, String color, String tipo, double precio, int numeroPuertas, String tipoCombustible, int potencia){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.tipo = tipo;
        this.precio = precio;
        this.numeroPuertas = numeroPuertas;
        this.tipoCombustible = tipoCombustible;
        this.potencia = potencia;
    }

    // Constructor por defecto

    public Coche(){
        this.marca = "BMW";
        this.modelo = "E46";
        this.color = "Azul marino";
        this.tipo = "Berlina";
        this.precio = 2600.00;
        this.numeroPuertas = 4;
        this.tipoCombustible = "Gasoil";
        this.potencia = 150;
    }

    // Getters

    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }

    public String getColor() {
        return color;
    }

    public String getTipo() {
        return tipo;
    }

    public double getPrecio() {
        return precio;
    }

    public int getNumeroPuertas() {
        return numeroPuertas;
    }

    public String getTipoCombustible() {
        return tipoCombustible;
    }

    public int getPotencia() {
        return potencia;
    }
}
