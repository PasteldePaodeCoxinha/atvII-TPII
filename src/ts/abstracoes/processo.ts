import Menu from "../interfaces/menu";
import Entrada from "../io/entrada";

export default abstract class Processo {
    protected entrada = new Entrada()
    protected execucao = true
    protected opcao = 0
    protected funcao!: Processo
    protected menu!: Menu
}