import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    private static instancia: MenuTipoListagemClientes
    private constructor() { }
    public static obterMenuTipoListagemClientes() {
        if (!this.instancia) {
            this.instancia = new MenuTipoListagemClientes()
        }
        return this.instancia
    }

    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todos os titulares`)
        console.log(`| 2 - Pegar um titular`)
        console.log(`| 3 - Todos os dependentes de um titular específico`)
        console.log(`----------------------`)
    }
}