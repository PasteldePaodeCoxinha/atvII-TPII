import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoAtualizarCliente from "./tipoAtualizarCliente"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    private static instancia: Principal
    private constructor() {
        super()
        this.execucao = true
        this.menu = MenuPrincipal.obterMenuPrincipal()
    }
    public static obterPrincipal(){
        if (!this.instancia) {
            this.instancia = new Principal()
        }
        return this.instancia
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada: ')
        switch (this.opcao) {
            case 1:
                this.processo = TipoCadastroCliente.obterTipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = TipoAtualizarCliente.obterTipoAtualizarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = TipoListagemClientes.obterTipoListagemClientes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida >:(')
        }
    }
}