import Processo from "../../abstracoes/processo";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";

export default class CadastroCpf extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = ""
        while (true) {
            numero = this.entrada.receberTexto('Digite apenas os números do CPF: ')
            if (numero.length !== 11 || isNaN(Number(numero).valueOf())) {
                console.log("Input inválido! Digite de novo");
            } else {
                break
            }
        }
        const dataExpedicao = this.entrada.receberData('Qual a data de expedição do CPF')
        let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
        this.cliente.Documentos.push(cpf)
    }
}