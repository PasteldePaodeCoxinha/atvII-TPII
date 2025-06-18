import Entrada from "../io/entrada"

export default abstract class CadastroSuplementar<S, T>{
    protected entrada: Entrada
    public responsavel: T
    constructor(responsavel: T){
        this.entrada = new Entrada()
        this.responsavel = responsavel
    }

    abstract cadastrar(): S
}