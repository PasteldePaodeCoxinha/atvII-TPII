import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroPassaporte extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let letras = ""
        let numero = ""
        while (true) {
            letras = this.entrada.receberTexto('Digite as letras do passaporte: ')
            numero = this.entrada.receberTexto('Digite os números do passaporte: ')
            
            if (letras.length !== 2 || numero.length !== 6 || isNaN(Number(numero).valueOf()) || !/^[a-zA-Z]+$/.test(letras)) {
                console.log("Input inválido! Digite de novo");
            } else {
                break
            }
        }
        const dataExpedicao = this.entrada.receberData('Qual a data de expedição do passaporte')
        let cpf = new Documento((letras + numero), TipoDocumento.Passaporte, dataExpedicao)
        this.cliente.Documentos.push(cpf)
    }
}