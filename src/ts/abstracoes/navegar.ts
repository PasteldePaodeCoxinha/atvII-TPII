import Menu from "../interfaces/menu";
import Entrada from "../io/entrada";

export default abstract class Navegar {
    public entrada: Entrada
    public opcao!: number
    public menu!: Menu

    constructor(){
        this.entrada = new Entrada()
    }
    
    abstract navegar(): void
}