import { PgRepository } from '@/infra/repos/postgres/repository'
import { FuncionarioRepository } from '@/data/contracts'
import { Funcionario } from '@/domain/entities'
import { PgFuncionario } from '@/infra/repos/postgres/entities'

export class PgFuncionarioRepository extends PgRepository implements FuncionarioRepository {
  async existeEmail (email: string): Promise<boolean> {
    const repositorio = this.getRepository(PgFuncionario)
    const funcionario = await repositorio.findOne({ email })
    return funcionario !== undefined
  }

  async adicionar (entidade: Funcionario): Promise<void> {
    const repositorio = this.getRepository(PgFuncionario)

    const { nome, cpf, email, telefone, ativo, rg } = entidade
    await repositorio.save({ nome, cpf, email, telefone, ativo, rg })
  }

  async atualizar (id: string, entidade: Funcionario): Promise<void> {
    const repositorio = this.getRepository(PgFuncionario)
    const { nome, email, telefone } = entidade
    await repositorio.update(id, { nome, email, telefone })
  }

  async buscarPorId (id: string): Promise<Funcionario | undefined> {
    const repositorio = this.getRepository(PgFuncionario)
    const model = await repositorio.findOne(id)

    if (model === undefined) {
      return model
    }

    return this.converterModelParaEntidade(model)
  }

  async buscarTodos (): Promise<Funcionario[]> {
    const repositorio = this.getRepository(PgFuncionario)

    return (await repositorio.find()).map(this.converterModelParaEntidade)
  }

  converterModelParaEntidade (model: PgFuncionario): Funcionario {
    return new Funcionario(model.id,
      model.nome,
      model.cpf,
      model.rg,
      model.email,
      model.telefone,
      model.ativo)
  }
}
