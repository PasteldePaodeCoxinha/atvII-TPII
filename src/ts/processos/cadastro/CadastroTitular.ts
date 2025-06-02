import Cadastro from "../../abstracoes/cadastro";
import Cliente from "../../modelos/cliente";

export default class CadastroTitular extends Cadastro<Cliente>{
    constructor(){
        super()
    }

    cadastrar(): Cliente {
        const nome = this.entrada.receberTexto("Digite o nome: ")

        const nomeSocial = this.entrada.receberTexto("Digite o nome social: ")

        const dia = this.entrada.receberTexto("Digite o dia do nascimento: ")
        
        const mes = this.entrada.receberTexto("Digite o mês do nascimento: ")

        const ano = this.entrada.receberTexto("Digite o ano do nascimento: ")

        const dataNasc = (dia + "-" + mes + "-" +ano)
        return new Cliente(nome, nomeSocial, new Date(dataNasc))
    }
}