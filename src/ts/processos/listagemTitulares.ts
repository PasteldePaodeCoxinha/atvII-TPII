import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitulares extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    private static instancia: ListagemTitulares
    private constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    public static obterListagemTitulares(){
        if (!this.instancia) {
            this.instancia = new ListagemTitulares()
        }
        return this.instancia
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes titulares...')
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = ImpressaorCliente.obterImpressorCliente(cliente)
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