import Listagem from "../../abstracoes/listagem";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";

export default class ListarTodosClientesTitular extends Listagem {
  constructor() {
    super();
  }

  listar(): void {
    while (true) {
      Armazem.InstanciaUnica.Clientes.forEach((c) => {
        console.log(new ImpressorCliente(c).imprimir());
      });

      const continuarListagemTodosClientes =
        this.entrada.receberTexto("Digite qualquer botão para sair da listagem:");

      break;
    }
  }
}
