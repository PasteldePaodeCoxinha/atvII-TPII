import Entrada from "../io/entrada";

export default abstract class Processo {
    protected entrada = new Entrada()
    protected execucao = true
    protected opcao!: number
    protected funcao!: Processo
}