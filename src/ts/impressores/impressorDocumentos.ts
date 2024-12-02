import Impressor from "../interfaces/impressor"
import Documento from "../modelos/documento"
import ImpressorDocumento from "./impressorDocumento"

export default class ImpressorDocumentos implements Impressor {
    private documentos: Documento[]
    private impressor!: Impressor
    private static instancia: ImpressorDocumentos

    private constructor(documentos: Documento[]) {
        this.documentos = documentos
    }

    public static obterImpressorDocumentos(documentos: Documento[]) {
        if (!this.instancia) {
            this.instancia = new ImpressorDocumentos(documentos)
        }
        return this.instancia
    }

    imprimir(): string {
        let impressao = ``
        for (let index = 0; index < this.documentos.length; index++) {
            this.impressor = ImpressorDocumento.obterImpressorDocumento(this.documentos[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }

        }
        return impressao
    }
}