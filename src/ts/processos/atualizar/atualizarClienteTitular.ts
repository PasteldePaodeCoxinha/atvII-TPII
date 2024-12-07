import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "../cadastro/cadastrarDocumentosCliente";

export default class AtualizarClienteTitular extends Processo {
    private clientes: Cliente[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    atualizar(cliente: Cliente): Cliente {
        console.log("Digite os novos dados (Se você não quiser atualizar algum dado deixe vazio)")
        console.log("-------------------------------------------------------");

        let nome = this.entrada.receberTexto("Digite o novo nome: ")
        let nomeSocial = this.entrada.receberTexto("Digite o novo nome social: ")
        cliente.Nome = nome
        cliente.NomeSocial = nomeSocial
        let res = this.entrada.receberTexto("Você deseja adicionar um telefone (S/N): ").toUpperCase()
        if (res == "S") {
            let ddd = this.entrada.receberTexto("Digite o ddd: ")
            let numero = this.entrada.receberTexto("Digite o número: ")
            let telefone = new Telefone(ddd, numero)
            cliente.AddTelefone = telefone
        }
        res = this.entrada.receberTexto("Você deseja alterar um telefone (S/N): ").toUpperCase()
        while (res == "S") {
            let numero = this.entrada.receberTexto("Digite o número do telefone que você desejar mudar: ")
            let novoNumero = this.entrada.receberTexto("Digite o novo número: ")
            let novoDdd = this.entrada.receberTexto("Digite o novo DDD: ")

            cliente.EdiTelefones(numero, novoNumero, novoDdd)
            res = this.entrada.receberTexto("Deseja mudar mais algum telefone (S/N): ").toUpperCase()
        }
        res = this.entrada.receberTexto("Você deseja adicionar um documento (S/N): ").toUpperCase()
        if (res == "S") {
            this.processo = new CadastrarDocumentosCliente(cliente)
            this.processo.processar()
            res
        }
        res = this.entrada.receberTexto("Você quer editar seu endereco (S/N): ")
        while (res.toUpperCase() == "S") {
            let rua = this.entrada.receberTexto("Digite a nova rua: ")
            let bairro = this.entrada.receberTexto("Digite o novo bairro: ")
            let cidade = this.entrada.receberTexto("Digite a nova cidade: ")
            let estado = this.entrada.receberTexto("Digite o novo estado: ")
            let pais = this.entrada.receberTexto("Digite o novo pais: ")
            let codigoPostal = this.entrada.receberTexto("Digite o novo código postal: ")
            cliente.EdiEndereco(rua, bairro, cidade, estado, pais, codigoPostal)

            res = this.entrada.receberTexto("Deseja refazer as mudanças no endereço (S/N): ")
        }

        return cliente
    }

    processar(): void {
        console.clear()

        let cliNome = this.entrada.receberTexto("Digite o nome do cliente: ")
        let cliente = this.clientes.filter(c => c.Nome == cliNome)[0]

        this.atualizar(cliente)
    }
}