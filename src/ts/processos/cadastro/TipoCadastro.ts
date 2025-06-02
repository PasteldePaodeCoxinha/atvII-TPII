import Navegar from "../../abstracoes/navegar";
import Armazem from "../../dominio/armazem";
import MenuTipoCadastroCliente from "../../menus/menuTipoCadastroCliente";
import CadastroTitular from "./CadastroTitular";

export default class TipoCadastro extends Navegar{
    constructor(){
        super()
        this.opcao = 0
        this.menu = new MenuTipoCadastroCliente()
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
                    const cadastro = new CadastroTitular()
                    Armazem.InstanciaUnica.Clientes.push(cadastro.cadastrar())
                    console.log(Armazem.InstanciaUnica.Clientes);
                    break;
                case 2:
                    console.log("2");
                    break;
                default:
                    console.log("COMANDO NÃO RECONHECIDO!");
            }
        }
    }
}