import Processo from "../abstracoes/processo";
import MenuPrincipal from "../menus/menuPricipal";

export default class Principal extends Processo {
  constructor() {
    super();
    this.menu = new MenuPrincipal();
  }

  public processar() {
    while (this.execucao) {
      this.menu.mostrar();
      this.opcao = this.entrada.receberNumero(`Digite a opção: `);
      switch (this.opcao) {
        case 0:
          this.execucao = false;
          break;
      }
    }
  }
}
