import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class AtualizarClienteTitular extends Processo{
    private clientes: Cliente[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    atualizar(cliente: Cliente): Cliente {
        

        return cliente
    }

    processar(): void {
        console.clear()

        let cliNome = this.entrada.receberTexto("Digite o nome do cliente: ")
        let cliente = this.clientes.filter(c => c.Nome == cliNome)[0]

        this.atualizar(cliente)
    }
}