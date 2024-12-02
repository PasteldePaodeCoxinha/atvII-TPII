import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor
    private static instancia: ImpressorCliente

    private constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    public static obterImpressorCliente(cliente: Cliente) {
        if (!this.instancia) {
            this.instancia = new ImpressorCliente(cliente)
        }
        return this.instancia
    }

    imprimir(): string {
        let impressao = `****************************\n****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        this.impressor = ImpressorEndereco.obterImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = ImpressorDocumentos.obterImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n****************************`
        return impressao
    }

}