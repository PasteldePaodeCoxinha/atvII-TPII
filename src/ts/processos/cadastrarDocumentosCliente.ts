import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import CadastroCpf from "./cadastroCpf";
import CadastroPassaporte from "./cadastroPassaporte";
import CadastroRg from "./cadastroRg";

export default class CadastrarDocumentosCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada: ')
            switch (this.opcao) {
                case 1:
                    if (!this.cliente.Documentos.map(d => d.Tipo).includes(TipoDocumento.CPF)) {
                        this.processo = new CadastroCpf(this.cliente)
                        this.processo.processar()
                    } else {
                        console.log("CPF já cadastrado!");
                    }
                    break
                case 2:
                    if (!this.cliente.Documentos.map(d => d.Tipo).includes(TipoDocumento.RG)) {
                        this.processo = new CadastroRg(this.cliente)
                        this.processo.processar()
                    } else {
                        console.log("RG já cadastrado!");
                    }
                    break
                case 3:
                    if (!this.cliente.Documentos.map(d => d.Tipo).includes(TipoDocumento.Passaporte)) {
                        this.processo = new CadastroPassaporte(this.cliente)
                        this.processo.processar()
                    } else {
                        console.log("Passaporte já cadastrado!");
                    }
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida >:(')
            }
        }
    }
}