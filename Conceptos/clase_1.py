from carrito import Carrito
class Producto:

    def __init__(self, nombre: str, precio: float):
        self.nombre = nombre
        self.precio = precio

    def mostrar(self):
        return print("El nombre del producto es", self.nombre,
                    "y el precio es:", self.precio)
    



productos_dispo = [
    Producto("guaro", 70000)


]