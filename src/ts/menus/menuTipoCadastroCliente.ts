import Menu from "../interfaces/menu";

export default class MenuTipoCadastroCliente implements Menu {
    private static instancia: MenuTipoCadastroCliente
    private constructor() { }
    public static obterMenuTipoCadastroCliente() {
        if (!this.instancia) {
            this.instancia = new MenuTipoCadastroCliente()
        }
        return this.instancia
    }

    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo do cliente para cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(`----------------------`)
    }
}