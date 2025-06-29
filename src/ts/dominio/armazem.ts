import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instancia: Armazem
    private clientes: Cliente[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        if (!this.instancia) {
            this.instancia = new Armazem()
        }
        return this.instancia
    }
    public get Clientes() {
        return this.clientes
    }

    public DelClientes(nome: string){
        this.clientes = this.clientes.filter(c => c.Nome !== nome)
    }
}