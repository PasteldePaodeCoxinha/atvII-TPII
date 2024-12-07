import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentesDeTitular extends Processo {
    private cliente: Cliente
    private impressor!: Impressor
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos dependentes...')

        const clientes = this.cliente.Dependentes

        clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressorCliente(cliente)
                console.log(this.impressor.imprimir())
            }
        })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}