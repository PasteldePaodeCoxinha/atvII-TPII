import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";

export default class ExcluirTitular extends Processo {
    private armazem: Armazem

    constructor() {
        super()
        this.armazem = Armazem.InstanciaUnica
    }

    processar(): void {
        while (true) {
            let cliNome = this.entrada.receberTexto("Digite o nome do cliente: ")
            let cliente = this.armazem.Clientes.find(c => c.Nome == cliNome)

            if (cliente) {
                this.armazem.DelClientes(cliente.Nome)
                break
            } else {
                console.log("Esse titular não existe!");
            }
        }
    }
}