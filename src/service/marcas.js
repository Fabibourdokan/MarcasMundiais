import Modelmarcas from"../model/marcas.js";

const model = new Modelmarcas()

class Controllermarcas {

    Buscar(req, res) {
        try {
            const marcas = Servicemarcas.Buscar()            
            res.send({ mensagem: marcas })

        } catch (e) {
            res.send({ message: e.message })
        }
    }
}