import Menu from "../interfaces/menu";

export default class MenuTipoAtualizarCliente implements Menu {
    private static instancia: MenuTipoAtualizarCliente
    private constructor() { }
    public static obterMenuTipoAtualizarCliente() {
        if (!this.instancia) {
            this.instancia = new MenuTipoAtualizarCliente()
        }
        return this.instancia
    }

    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo você deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titular`)
        console.log(`| 2 - Dependente`)
        console.log(`----------------------`)
    }
}