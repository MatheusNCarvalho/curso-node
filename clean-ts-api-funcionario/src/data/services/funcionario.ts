import { CrudFuncionario } from '@/domain/usecases/funcionarios'
import { FuncionarioRepository } from '@/data/contracts'
import { EmailExistenteError } from '@/domain/erros'
import { Funcionario, FuncionarioModel } from '@/domain/entities'

export class FuncionarioService implements CrudFuncionario {
  constructor (private readonly funcionarioRepository: FuncionarioRepository) {}

  async buscarPorId (id: string): Promise<FuncionarioModel | undefined> {
    return await this.funcionarioRepository.buscarPorId(id)
  }

  async buscarTodos (): Promise<FuncionarioModel[]> {
    return await this.funcionarioRepository.buscarTodos()
  }

  async adicionar (model: FuncionarioModel): Promise<void> {
    const existeEmail = await this.funcionarioRepository.existeEmail(model.email)

    if (existeEmail) {
      throw new EmailExistenteError()
    }
    const funcionario = new Funcionario(model.id, model.nome, model.cpf, model.rg, model.email, model.telefone)
    await this.funcionarioRepository.adicionar(funcionario)
  }

  async atualizar (id: string, model: FuncionarioModel): Promise<void> {
    const funcionario = await this.funcionarioRepository.buscarPorId(id)
    if (funcionario == null) {
      throw new Error('Funcionario não encontrado')
    }

    funcionario.setEmail(model.email)
    funcionario.setNome(model.nome)
    funcionario.setTelefone(model.telefone)

    await this.funcionarioRepository.atualizar(id, funcionario)
  }
}
