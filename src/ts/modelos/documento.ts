import { TipoDocumento } from "../enumeracoes/TipoDocumento"

export default class Documento {
    private numero: string
    private tipo: TipoDocumento
    private dataExpedicao: Date
    private static instancia: Documento

    private constructor(numero: string, tipo: TipoDocumento, dataExpedicao: Date) {
        this.numero = numero
        this.tipo = tipo
        this.dataExpedicao = dataExpedicao
    }

    public static obterDocumento(numero: string, tipo: TipoDocumento, dataExpedicao: Date){
        if (!this.instancia) {
            this.instancia = new Documento(numero, tipo, dataExpedicao)
        }
        return this.instancia
    }

    public get Numero(){ return this.numero }
    public get Tipo(){ return this.tipo }
    public get DataExpedicao(){ return this.dataExpedicao }
    
    public set Numero(numero: string) { this.Numero = numero }
    public set DataExpedicao(dataExpedicao: Date) { this.DataExpedicao = dataExpedicao } 
}