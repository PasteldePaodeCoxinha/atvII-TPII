import Processo from "../abstracoes/processo";
import MenuTipoAtualizarCliente from "../menus/menuTipoAtualizarCliente";
import AtualizarClienteTitular from "./atualizarClienteTitular";

export default class TipoAtualizarCliente extends Processo {
    private static instancia: TipoAtualizarCliente 
    private constructor() {
        super()
        this.menu = MenuTipoAtualizarCliente.obterMenuTipoAtualizarCliente()
    }

    public static obterTipoAtualizarCliente(){
        if (!this.instancia) {
            this.instancia = new TipoAtualizarCliente()
        }
        return this.instancia
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada: ')

        switch (this.opcao) {
            case 1:
                this.processo = AtualizarClienteTitular.obterAtualizarClienteTitular()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida >:(')
        }

    }
}