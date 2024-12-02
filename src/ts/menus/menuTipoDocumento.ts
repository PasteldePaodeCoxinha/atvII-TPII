import Menu from "../interfaces/menu";

export default class MenuTipoDocumento implements Menu {
    private static instancia: MenuTipoDocumento
    private constructor() { }
    public static obterMenuTipoDocumento() {
        if (!this.instancia) {
            this.instancia = new MenuTipoDocumento()
        }
        return this.instancia
    }

    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo do documento para cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastro de Pessoa Física`)
        console.log(`| 2 - Registro Geral`)
        console.log(`| 3 - Passaporte`)
        console.log(`| 0 - Finalizar cadastro de documentos`)
        console.log(`----------------------`)
    }
}