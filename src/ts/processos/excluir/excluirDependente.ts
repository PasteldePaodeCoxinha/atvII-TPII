import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class ExcluirDependente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        while (true) {
            let cliNome = this.entrada.receberTexto("Digite o nome do cliente: ")
            let dependente = this.cliente.Dependentes.find(c => c.Nome == cliNome)

            if (dependente) {
                this.cliente.Dependentes = this.cliente.Dependentes.filter(d => d.Nome !== dependente?.Nome)
                break
            } else {
                console.log("Esse dependente não existe!");
            }
        }
    }
}