import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class CadastroEnderecoTitular extends Processo {
    private cliente: Cliente
    private static instancia: CadastroEnderecoTitular

    private constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    public static obterCadastroEnderecoTitular(cliente: Cliente) {
        if (!this.instancia) {
            this.instancia = new CadastroEnderecoTitular(cliente)
        }
        return this.instancia
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        let rua = this.entrada.receberTexto('Qual a rua: ')
        let bairro = this.entrada.receberTexto('Qual o bairro: ')
        let cidade = this.entrada.receberTexto('Qual a cidade: ')
        let estado = this.entrada.receberTexto('Qual o estado: ')
        let pais = this.entrada.receberTexto('Qual o país: ')
        let codigoPostal = this.entrada.receberTexto('Qual o código postal (Se não tiver deixe vazio): ')
        let endereco = Endereco.obterEndereco(rua, bairro, cidade, estado, pais, codigoPostal)
        this.cliente.Endereco = endereco
    }

}