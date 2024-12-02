import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class PegarUmTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    private static instancia: PegarUmTitular
    private constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    public static obterPegarUmTitular(){
        if (!this.instancia) {
            this.instancia = new PegarUmTitular()
        }
        return this.instancia
    }

    processar(): void {
        let cliNome = this.entrada.receberTexto("Digite o nome do cliente: ")
        let cliente = this.clientes.filter(c => c.Nome == cliNome)[0]

        if (cliente) {
            this.impressor = ImpressaorCliente.obterImpressorCliente(cliente)
            console.log(this.impressor.imprimir());
            
        }
    }

}