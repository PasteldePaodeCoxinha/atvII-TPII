import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";

export default abstract class Excluir {
  protected entrada: Entrada;
  protected clientes!: Cliente[];
  constructor(clientes?: Cliente[]) {
    this.entrada = new Entrada();
    if (clientes) {
      this.clientes = clientes;
    }
  }

  abstract excluir(): void;
}
