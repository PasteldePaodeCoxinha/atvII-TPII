import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroRg extends Processo {
    private cliente: Cliente
    private static instancia: CadastroRg 
    private constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }
    public static obterCadastroRg(cliente: Cliente): CadastroRg {
        if (!CadastroRg.instancia) {
            this.instancia = new CadastroRg(cliente)
        }
        return this.instancia
    }

    processar(): void {
        let numero = ""
        while (true) {
            numero = this.entrada.receberTexto('Digite apenas os números do RG: ')
            if (numero.length !== 9 || isNaN(Number(numero).valueOf())) {
                console.log("Input inválido! Digite de novo");
            } else {
                break
            }
        }
        const dataExpedicao = this.entrada.receberData('Qual a data de expedição do RG: ')
        let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao)
        this.cliente.Documentos.push(rg)
    }
}