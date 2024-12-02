import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/endereco";

export default class ImpressorEndereco implements Impressor {
    private endereco: Endereco
    private static instancia: ImpressorEndereco

    private constructor(endereco: Endereco) {
        this.endereco = endereco
    }

    public static obterImpressorEndereco(endereco: Endereco) {
        if (!this.instancia) {
            this.instancia = new ImpressorEndereco(endereco)
        }
        return this.instancia
    }

    imprimir(): string {
        let impressao = `| Endereco:\n`
            + `| rua: ${this.endereco.Rua}\n`
            + `| bairro: ${this.endereco.Bairro}\n`
            + `| cidade: ${this.endereco.Cidade}\n`
            + `| estado: ${this.endereco.Estado}\n`
            + `| país: ${this.endereco.Pais}\n`
            + `| código postal: ${this.endereco.Pais}`
        return impressao
    }
}