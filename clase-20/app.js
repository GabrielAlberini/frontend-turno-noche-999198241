class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
    this.disponible = true
  }

  info() {
    // Cien años de Soledad de Gabriel Garcia Márquez se encuentra disponible o no disponible.
    return `${this.titulo} de ${this.autor} se encuentra ${this.disponible === true ? "disponible" : "no disponible"}.`
  }

  prestar() {
    if (this.disponible) {
      this.disponible = false
      return `El libro ${this.titulo} se prestó.`
    } else {
      return `El libro ${this.titulo} ha sido prestado.`
    }
  }

  devolver() {
    if (this.disponible === false) {
      this.disponible = true
      return `El libro ${this.titulo} ha sido devuelto.`
    } else {
      return `El libro ${this.titulo} está disponible.`
    }
  }

  transferir(bibliotecaDestino) {
    bibliotecaDestino.agregarLibro(this)
    return `El libro ${this.titulo} fue transferido a la biblioteca ${bibliotecaDestino.nombre}`
  }
}


class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre
    this.libros = []
  }

  agregarLibro(libro) {
    this.libros.push(libro)
  }

  listarLibros() {
    if (this.libros.length > 0) {
      this.libros.forEach((libro, indice) => {
        console.log(`El ${indice + 1}° libro es: ${libro.titulo} y ${libro.disponible ? "esta disponible" : "no esta disponible"}.`)
      })
    } else {
      console.log(`${this.nombre} no tiene libros aún.`)
    }
  }
}

const libro1 = new Libro("Don Quijote", "Miguel de Cervantes")
const libro2 = new Libro("El hobbit", "J. R. R. Tolkien")

const biblioteca1 = new Biblioteca("Biblioteca de Shanghái")
const biblioteca2 = new Biblioteca("Biblioteca del Estado Ruso")

biblioteca1.agregarLibro(libro1)
biblioteca1.agregarLibro(libro2)

libro2.prestar()
biblioteca1.listarLibros()

libro2.transferir(biblioteca2)

biblioteca2.listarLibros()

// Resolver que al transferir un libro de una biblioteca a otra, este se elimine de la biblioteca original.