export class EmailExistenteError extends Error {
  constructor () {
    super('O e-mail utilizado já está em uso')
    this.name = 'EmailExistenteError'
  }
}
