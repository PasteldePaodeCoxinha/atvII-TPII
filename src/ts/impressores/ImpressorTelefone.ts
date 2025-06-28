import Impressor from "../interfaces/impressor"
import Telefone from "../modelos/telefone"

export default class ImpressorTelefone implements Impressor {
    private telefone: Telefone 

    constructor(tel: Telefone) {
        this.telefone = tel
    }

    imprimir(): string {
        let impressao = `| Telefone: +${this.telefone.Ddd} ${this.telefone.Numero}\n`
        return impressao
    }
}