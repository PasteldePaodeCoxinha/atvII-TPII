import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";
import ImpressorTelefone from "./ImpressorTelefone";

export default class ImpressorTelefones implements Impressor {
  private telefones: Telefone[];
  private impressor!: Impressor;

  constructor(tels: Telefone[]) {
    this.telefones = tels;
  }

  imprimir(): string {
    let impressao = ``;
    for (let index = 0; index < this.telefones.length; index++) {
      this.impressor = new ImpressorTelefone(this.telefones[index]);
      impressao = impressao + `${this.impressor.imprimir()}`;
    }
    return impressao;
  }
}
