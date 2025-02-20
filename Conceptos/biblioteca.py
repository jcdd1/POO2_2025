from libro import Libro

class Biblioteca:

    def __init__(self):
            self.libros = {}

    def agregarLibros(self, codigo, libro):

        if codigo not in self.libros:
            self.libros[codigo] = libro
            print("Se agrega el libro")
        else:
            print("Ya existe el código")

    def buscarLibro(self, codigo):
        libro = self.libros.get(codigo)
        if libro:
            libro.mostrarUbicacion()
        else:
            print("libro no se encuentra en la biblioteca")

    def imprimirLibros(self):
        for codigo, libro in self.libros.items():
            print (f"Código {codigo}")
            libro.mostrarInformacion()


