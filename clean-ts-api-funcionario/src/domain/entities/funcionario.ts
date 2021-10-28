export class Funcionario {
  id: string
  nome: string
  cpf: string
  rg: string
  email: string
  telefone: string
  ativo: boolean

  constructor (id: string, nome: string, cpf: string, rg: string, email: string, telefone: string) {
    this.id = id
    this.nome = nome
    this.cpf = cpf
    this.rg = rg
    this.email = email
    this.telefone = telefone
    this.ativo = true
  }

  setEmail (email: string): void {
    this.email = email
  }

  setNome (nome: string): void {
    this.nome = nome
  }

  setTelefone (telefone: string): void {
    this.telefone = telefone
  }

  habilitar (): void {
    this.ativo = true
  }

  desabilitar (): void {
    this.ativo = true
  }
}
