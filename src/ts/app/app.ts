import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Principal from "../processos/principal";

const principal = new Principal();

const cliente1 = new Cliente("João Silva", "Joãozinho", new Date("1990-05-10"))
cliente1.AddTelefone = new Telefone("11", "999999999")
cliente1.AddDocumento = new Documento("123456789", TipoDocumento.CPF, new Date("2010-03-20"))
cliente1.Endereco = new Endereco("Rua A", "Centro", "São Paulo", "SP", "Brasil", "01000-000")

const dependente1 = new Cliente("Pedro Silva", "Pedrinho", new Date("2012-11-05"))
cliente1.AddDependente = dependente1

const cliente2 = new Cliente("Maria Oliveira", "Mari", new Date("1985-09-20"))
cliente2.AddTelefone = new Telefone("21", "988888888")
cliente2.AddDocumento = new Documento("987654321", TipoDocumento.RG, new Date("2005-06-15"))
cliente2.Endereco = new Endereco("Av. Brasil", "Copacabana", "Rio de Janeiro", "RJ", "Brasil", "22000-000")

const cliente3 = new Cliente("Carlos Souza", "Carlão", new Date("1978-01-01"))
cliente3.AddTelefone = new Telefone("31", "977777777")
cliente3.AddDocumento = new Documento("111222333", TipoDocumento.Passaporte, new Date("2012-08-01"))
cliente3.Endereco = new Endereco("Rua das Flores", "Savassi", "Belo Horizonte", "MG", "Brasil", "30130-000")

const cliente4 = new Cliente("Ana Lima", "Aninha", new Date("1995-03-30"))
cliente4.AddTelefone = new Telefone("41", "966666666")
cliente4.AddDocumento = new Documento("444555666", TipoDocumento.CPF, new Date("2014-11-22"))
cliente4.Endereco = new Endereco("Rua Paraná", "Centro", "Curitiba", "PR", "Brasil", "80010-000")

const cliente5 = new Cliente("Lucas Martins", "Luquinhas", new Date("2000-12-12"))
cliente5.AddTelefone = new Telefone("51", "955555555")
cliente5.AddDocumento = new Documento("777888999", TipoDocumento.RG, new Date("2018-01-01"))
cliente5.Endereco = new Endereco("Av. Ipiranga", "Centro Histórico", "Porto Alegre", "RS", "Brasil", "90010-000")

Armazem.InstanciaUnica.Clientes.push(cliente1)
Armazem.InstanciaUnica.Clientes.push(cliente2)
Armazem.InstanciaUnica.Clientes.push(cliente3)
Armazem.InstanciaUnica.Clientes.push(cliente4)
Armazem.InstanciaUnica.Clientes.push(cliente5)

principal.navegar();

console.log("Até mais!");
