export class EmailExistenteError extends Error {
  constructor () {
    super('O e-mail recebido já está em uso')
    this.name = 'EmailExistenteError'
  }
}
