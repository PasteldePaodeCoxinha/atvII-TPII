import { TipoDocumento } from "../enumeracoes/TipoDocumento"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public set Nome(nome: string) { this.nome = nome }
    public set NomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }
    public set AddTelefone(telefone: Telefone) { this.telefones.push(telefone) }
    public set AddDocumento(documento: Documento) { this.documentos.push(documento) }
    public set Endereco(endereco: Endereco) { this.endereco = endereco }

    public EdiTelefones(numero: string, novoNumero: string, novoDdd: string) {
        let telefone = this.telefones.filter(t => t.Numero == numero)[0]
        if (telefone) {
            if (novoNumero) { telefone.Numero = novoNumero }
            if (novoDdd) { telefone.Ddd = novoDdd }
        }
    }
    public EdiEndereco(rua: string, bairro: string, cidade: string, estado: string, pais: string, codigoPostal: string) {
        if (this.endereco.Rua) { this.endereco.Rua = rua }
        if (this.endereco.Bairro) { this.endereco.Bairro = bairro }
        if (this.endereco.Cidade) { this.endereco.Cidade = cidade }
        if (this.endereco.Estado) { this.endereco.Estado = estado }
        if (this.endereco.Pais) { this.endereco.Pais = pais }
        if (this.endereco.CodigoPostal) { this.endereco.CodigoPostal = codigoPostal }
    }
}