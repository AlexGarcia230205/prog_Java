# 🚗 Proyecto Java: Aprendiendo POO

Este repositorio lo usaré de aprendizaje. Aquí documento cómo voy aprendiendo Java.

## 📌 Conceptos Clave Aplicados
* **Instanciación:** Uso de la palabra clave `new` para crear objetos reales en memoria.
* **Composición:** La clase `Concesionario` contiene una referencia a un objeto de tipo `Coche`.
* **Interacción entre Objetos:** El `Main` actúa como orquestador, enviando un coche al concesionario y ejecutando la venta.
* **Encapsulamiento:** Uso de *Getters* (`getMarca()`, `getPrecio()`) para acceder a la información protegida de los objetos.

---

## 🛠️ Evolución del Código

### [21/04/2026] - Sistema de Gestión de Ventas
He implementado la lógica completa de interacción entre clases.

**Cambios principales:**
1. **Clase Concesionario:** - Añadido el método `recibirCoche(Coche nuevoCoche)` que recibe un objeto como parámetro.
   - Añadido el método `venderCoche()` que utiliza los datos del coche para confirmar la transacción y devuelve el objeto.
2. **Clase Main (El punto de entrada):**
   - Realizada la **instanciación** de `tienda` y `coche`.
   - Ejecución del flujo: `tienda.recibirCoche(coche)` -> `tienda.venderCoche()`.