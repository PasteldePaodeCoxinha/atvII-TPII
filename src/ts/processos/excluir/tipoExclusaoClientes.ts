import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuTipoExcluirCliente from "../../menus/menuTipoExcluirCliente";
import Cliente from "../../modelos/cliente";
import ExcluirDependente from "./excluirDependente";
import ExcluirTitular from "./excluirTitular";

export default class TipoExclusaoClientes extends Processo {

    constructor() {
        super()
        this.menu = new MenuTipoExcluirCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada: ')
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirTitular()
                this.processo.processar()
                break;

            case 2:
                let clienteTitular: Cliente
                while (true) {
                    let nomeTitular = this.entrada.receberTexto(`Digite o nome do cliente titular (0 para sair): `)
                    if (nomeTitular === "0") {
                        return
                    }

                    let clienteTitularTemp = Armazem.InstanciaUnica.Clientes.find(c => c.Nome.toLowerCase() === nomeTitular.toLowerCase())
                    if (clienteTitularTemp) {
                        clienteTitular = clienteTitularTemp
                        break
                    } else {
                        console.log("Não existe cliente titular com esse nome!");
                    }
                }
                this.processo = new ExcluirDependente(clienteTitular)
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida... >:(')
        }
    }
}