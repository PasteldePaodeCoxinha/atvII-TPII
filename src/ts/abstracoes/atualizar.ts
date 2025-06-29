import Entrada from "../io/entrada"
import Cliente from "../modelos/cliente"

export default abstract class Atualizar{
    protected entrada: Entrada
    public atualizando!: Cliente
    constructor(){
        this.entrada = new Entrada()
    }

    abstract atualizar(): void
}