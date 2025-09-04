# Ejercicio Práctico - Clase `Libro` y `Biblioteca`

### Objetivo
Modelar una biblioteca utilizando **Programación Orientada a Objetos (POO)** en JavaScript.

---

### Parte 1: Clase `Libro`
1. Crear una clase `Libro` con las siguientes propiedades:
   - `titulo`
   - `autor`
   - `disponible` (booleano, por defecto `true`)

2. Métodos:
   - `info()`: devuelve un texto con el título, autor y si el libro está disponible o prestado.
   - `prestar()`: cambia `disponible` a `false` si está disponible.  
   - `devolver()`: cambia `disponible` a `true`.  
   - `transferir(bibliotecaDestino)`: agrega el libro a otra biblioteca.

---

### Parte 2: Clase `Biblioteca`
1. Crear una clase `Biblioteca` con:
   - Propiedad `nombre`
   - Propiedad `libros` (un array vacío al inicio)

2. Métodos:
   - `agregarLibro(libro)`: agrega un objeto `Libro` al array de la biblioteca.  
   - `listarLibros()`: muestra en consola todos los títulos de los libros de la biblioteca.

---

### Ejemplo de uso esperado
- Crear dos libros.  
- Crear dos bibliotecas distintas.  
- Agregar los libros a una biblioteca.  
- Prestar un libro y verificar que ya no está disponible.  
- Transferir un libro de una biblioteca a otra.  
- Listar los libros de cada biblioteca para ver los cambios.  
