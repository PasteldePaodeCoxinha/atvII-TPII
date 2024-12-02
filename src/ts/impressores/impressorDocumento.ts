import Impressor from "../interfaces/impressor";
import Documento from "../modelos/documento";

export default class ImpressorDocumento implements Impressor {
    private documento: Documento
    private static instancia: ImpressorDocumento

    private constructor(documento: Documento) {
        this.documento = documento
    }

    public static obterImpressorDocumento(documento: Documento){
        if (!this.instancia) {
            this.instancia = new ImpressorDocumento(documento)
        }
        return this.instancia
    }

    imprimir(): string {
        let impressao = `| Documento:\n`
            + `| Tipo: ${this.documento.Tipo}\n`
            + `| Data expedição: ${this.documento.DataExpedicao.toLocaleDateString()}\n`
            + `| Número: ${this.documento.Numero}`
        return impressao
    }

}