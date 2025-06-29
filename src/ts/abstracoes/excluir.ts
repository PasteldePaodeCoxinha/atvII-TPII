import Entrada from "../io/entrada"
import Cliente from "../modelos/cliente"

export default abstract class Excluir{
    protected entrada: Entrada
    protected clientes!: Cliente[]
    constructor(){
        this.entrada = new Entrada()
    }

    abstract excluir(): void
}