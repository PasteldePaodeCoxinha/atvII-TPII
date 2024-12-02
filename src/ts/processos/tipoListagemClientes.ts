import Processo from "../abstracoes/processo";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemTitulares from "./listagemTitulares";
import PegarUmTitular from "./pegarUmTitular";

export default class TipoListagemClientes extends Processo {
    private static instancia: TipoListagemClientes
    private constructor() {
        super()
        this.menu = MenuTipoListagemClientes.obterMenuTipoListagemClientes()
    }

    public static obterTipoListagemClientes(){
        if (!this.instancia) {
            this.instancia = new TipoListagemClientes()
        }
        return this.instancia
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada: ')
        switch (this.opcao) {
            case 1:
                this.processo = ListagemTitulares.obterListagemTitulares()
                this.processo.processar()
                break;

            case 2:
                this.processo = PegarUmTitular.obterPegarUmTitular()
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida... >:(')
        }
    }
}