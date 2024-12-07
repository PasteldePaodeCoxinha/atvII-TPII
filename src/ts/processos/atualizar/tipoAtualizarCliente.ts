import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuTipoAtualizarCliente from "../../menus/menuTipoAtualizarCliente";
import Cliente from "../../modelos/cliente";
import AtualizarClienteDependente from "./atualizarClienteDependente";
import AtualizarClienteTitular from "./atualizarClienteTitular";

export default class TipoAtualizarCliente extends Processo {

    constructor() {
        super()
        this.menu = new MenuTipoAtualizarCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada: ')

        switch (this.opcao) {
            case 1:
                this.processo = new AtualizarClienteTitular()
                this.processo.processar()
                break
            
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
                this.processo = new AtualizarClienteDependente(clienteTitular.Dependentes)
                this.processo.processar()
                break

            default:
                console.log('Opção não entendida >:(')
        }

    }
}