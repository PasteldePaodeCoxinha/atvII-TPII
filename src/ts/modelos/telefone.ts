export default class Telefone {
    private ddd: string
    private numero: string
    private static instancia: Telefone

    private constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    public static obterTelefone(ddd: string, numero: string){
        if (!this.instancia) {
            this.instancia = new Telefone(ddd, numero)
        }
        return this.instancia
    }

    public get Ddd() { return this.ddd }
    public get Numero() { return this.numero }

    public set Ddd(ddd: string) { this.ddd = ddd }
    public set Numero(numero: string) { this.numero = numero }
}