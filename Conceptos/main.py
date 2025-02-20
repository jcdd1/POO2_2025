from biblioteca import Biblioteca
from libro import Libro

#titulo, autor, año, ubicación)
def main():
    biblioteca = Biblioteca()

    libro1 = Libro("Cien años de soledad", "Gabo", 1967, "Pasillo 3")
    libro2 = Libro("María", "Jorge Isaac", 1867, "Pasillo 1")
    libro3 = Libro("Satanás", "Mario Mendoza", 2002, "Pasillo 12 + 1")

    biblioteca.agregarLibros("ISBN9789510445365", libro1)
    biblioteca.agregarLibros("ISBN9788471432704", libro2)
    biblioteca.agregarLibros("ISBN9786287650510", libro3)
    #biblioteca.agregarLibros("ISBN9786287650510", libro3)

    biblioteca.buscarLibro("ISBN9789510445365")

    biblioteca.imprimirLibros()

if __name__ == "__main__":
    main()