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
    private dependentes: Cliente[]
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
        this.dependentes = []
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
    public set Telefone(telefones: Telefone[]) { this.telefones = telefones }
    public set Documento(documentos: Documento[]) { this.documentos = documentos }
    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set AddDependente(cliente: Cliente) { this.dependentes.push(cliente) }

    public AddTelefone(telefone: Telefone) { this.telefones.push(telefone) }
    public AddDocumento(documento: Documento) { this.documentos.push(documento) }

    public EdiTelefones(numero: string, novoNumero: string, novoDdd: string) {
        let telefone = this.telefones.find(t => t.Numero == numero)
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