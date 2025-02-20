class automovil:
    def __init__(self, marca,modelo,color,año):

        self.marca=marca
        self.modelo=modelo
        self.color=color
        self.año=año 
        self.__galones_consumidos= self.__calculate_galones(modelo)
        self.velocidad_maxima= velocidad_maxima


    def get_galones_consumidos(self):
        return self.__galones_consumidos
    def __calculate_galones(self,modelo):
        if (modelo=="hibrido"):
            return 25
        else:
            return 50
    def andar (self,velocidad):
        if velocidad > self.velocidad_maxima:
            return 40 
    

auto= automovil("KIA","gasolina","gris",2021)  

print(auto.get_galones_consumidos()) 
