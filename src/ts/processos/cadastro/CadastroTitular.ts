import Cadastro from "../../abstracoes/cadastro";
import Armazem from "../../dominio/armazem";
import MenuTipoDocumento from "../../menus/menuTipoDocumento";
import Cliente from "../../modelos/cliente";
import CadastroDocumento from "./CadastroDocumento";

export default class CadastroTitular extends Cadastro<Cliente>{
    constructor(){
        super()
    }

    cadastrar(): Cliente {
        let nome = this.entrada.receberTexto("Digite o nome:")
        while (nome === "" || Armazem.InstanciaUnica.Clientes.filter(c => c.Nome === nome).length > 0) {
            let msgNome = ""
            if (nome === "") {
                msgNome = "Digite um nome:"
            }
            if (Armazem.InstanciaUnica.Clientes.filter(c => c.Nome === nome).length > 0) {
                msgNome = "Esse nome já está cadastrado, digite outro:"
            }

            nome = this.entrada.receberTexto(msgNome)
        }

        const nomeSocial = this.entrada.receberTexto("Digite o nome social:")

        const dataNasc = this.entrada.receberData("Digite a data de nascimento")
        
        this.cadastrando = new Cliente(nome, nomeSocial, new Date(dataNasc))

        const menuCadastroDocumento = new MenuTipoDocumento()
        const documentoCadastrar = new CadastroDocumento(this.cadastrando)
        while (true) {
            menuCadastroDocumento.mostrar()
            this.cadastrando.AddDocumento = documentoCadastrar.cadastrar()
            const continuarCadastroDocumento = this.entrada.receberTexto("Continuar cadastro de documento (S/N):")
            if (continuarCadastroDocumento.toLocaleLowerCase() === "n" || this.cadastrando.Documentos.length >= 3) {
                break
            }
        }

        return this.cadastrando
    }
}