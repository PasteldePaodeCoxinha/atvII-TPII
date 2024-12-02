import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteTitular extends Processo {
    private static instancia: CadastroClienteTitular
    private constructor() {
        super()
    }

    public static obterCadastroClienteTitular(){
        if (!this.instancia) {
            this.instancia = new CadastroClienteTitular()
        }
        return this.instancia
    }
    
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente: ')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente: ')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento')
        let cliente = Cliente.obterCliente(nome, nomeSocial, dataNascimento)

        this.processo = CadastroEnderecoTitular.obterCadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = CadastrarDocumentosCliente.obterCadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}