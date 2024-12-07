import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class PegarUmDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor

    constructor(clientes: Cliente[]) {
        super()
        this.clientes = clientes
    }

    processar(): void {
        let cliNome = this.entrada.receberTexto("Digite o nome do dependente: ")
        let cliente = this.clientes.filter(c => c.Nome == cliNome)[0]

        if (cliente) {
            this.impressor = new ImpressorCliente(cliente)
            console.log(this.impressor.imprimir());

        }
    }

}