import Entrada from "../io/entrada"

export default abstract class Cadastro<S>{
    protected entrada: Entrada
    public cadastrando!: S
    constructor(){
        this.entrada = new Entrada()
    }

    abstract cadastrar(): S
}