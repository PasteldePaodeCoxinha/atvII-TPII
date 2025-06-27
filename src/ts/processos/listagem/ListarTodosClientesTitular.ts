import Listagem from "../../abstracoes/listagem";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";

export default class ListarTodosClientesTitular extends Listagem{
    constructor(){
        super()
    }

    listar(): void {
        Armazem.InstanciaUnica.Clientes.forEach(c => {
            new ImpressorCliente(c).imprimir()
        })
    }
}