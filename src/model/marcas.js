const marcas = new Array ("Coca-Cola", "Pepsi", "Nike", "Adidas", "Apple", "Samsung");

class Modelmarcas {

    PegaUm(index){
        return marcas [index]
    }

    PegaTodos(){
        return marcas
    }

    Adicionar(marcas){
        marcas.push(marcas)
    }

    Alterar(index, marcas){
        marcas[index] = marcas
    }

    Deletar(index){
        marcas.splice(index,1)
    }
}

