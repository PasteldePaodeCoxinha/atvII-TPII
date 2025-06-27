import Navegar from "../../abstracoes/navegar";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListarTodosClientesTitular from "./ListarTodosClientesTitular";

export default class TipoListagem extends Navegar{
    constructor(){
        super()
        this.opcao = 0
        this.menu = new MenuTipoListagemClientes()
    }

    navegar(): void {
        
        let loop = true
        while (loop) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero(`Digite sua opção: `)
            
            switch (this.opcao) {
                case 0:
                    loop = false
                    break;
                case 1:
                    new ListarTodosClientesTitular().listar()
                    break;
                case 2:
                    console.log("2");
                    break;
                case 3:
                    console.log("3");
                    break;
                case 4:
                    console.log("4");
                    break;
                default:
                    console.log("COMANDO NÃO RECONHECIDO!");
            }
        }
    }
}