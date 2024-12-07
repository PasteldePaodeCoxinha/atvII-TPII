import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import Cliente from "../../modelos/cliente";
import ListagemDependentesDeTitular from "./listagemDependentesDeTitular";
import ListagemTitulares from "./listagemTitulares";
import PegarUmDependente from "./pegarUmDependente";
import PegarUmTitular from "./pegarUmTitular";

export default class TipoListagemClientes extends Processo {

    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada: ')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;

            case 2:
                this.processo = new PegarUmTitular()
                this.processo.processar()
                break;

            case 3:
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

                this.processo = new ListagemDependentesDeTitular(clienteTitular)
                this.processo.processar()
                break
            
            case 4:
                let clienteTitular2: Cliente
                while (true) {
                    let nomeTitular = this.entrada.receberTexto(`Digite o nome do cliente titular (0 para sair): `)
                    if (nomeTitular === "0") {
                        return
                    }

                    let clienteTitularTemp = Armazem.InstanciaUnica.Clientes.find(c => c.Nome.toLowerCase() === nomeTitular.toLowerCase())
                    if (clienteTitularTemp) {
                        clienteTitular2 = clienteTitularTemp
                        break
                    } else {
                        console.log("Não existe cliente titular com esse nome!");
                    }
                }
                this.processo = new PegarUmDependente(clienteTitular2.Dependentes)
                this.processo.processar()
                break

            default:
                console.log('Opção não entendida... >:(')
        }
    }
}