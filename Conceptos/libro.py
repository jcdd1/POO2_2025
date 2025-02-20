class Libro:
    def __init__(self, titulo, autor, año, ubicacion):
        self.titulo = titulo
        self.autor = autor
        self.año = año
        self.ubicacion = ubicacion

    def mostrarUbicacion(self):
        print(f"El libro está ubicado en {self.ubicacion}")
    
    def mostrarInformacion(self):
        print(f"Libro titulado: {self.titulo} y  su autor es: {self.autor} del año {self.año}")