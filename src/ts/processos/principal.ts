import Navegar from "../abstracoes/navegar";
import MenuPrincipal from "../menus/menuPricipal";
import TipoAtualizar from "./atualizar/TipoAtualizar";
import TipoCadastro from "./cadastro/TipoCadastro";
import TipoListagem from "./listagem/TipoListagem";

export default class Principal extends Navegar {
    constructor(){
        super()
        this.opcao = 0
        this.menu = new MenuPrincipal()
    }

    navegar(): void {
        let loop = true
        while (loop) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero(`Digite sua opção:`)
            
            switch (this.opcao) {
                case 0:
                    loop = false
                    break;
                case 1:
                    new TipoCadastro().navegar()
                    break;
                case 2:
                    new TipoListagem().navegar()
                    break;
                case 3:
                    new TipoAtualizar().navegar()
                    break;
                case 4:
                    console.log("4");
                    break;
                default:
                    console.log("COMANDO NÃO RECONHECIDO!");
                    break
            }
        }
    }
}