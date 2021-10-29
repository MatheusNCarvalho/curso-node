import { DesabilitarFuncionario } from '@/domain/usecases/funcionarios'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { PgFuncionario } from '@/infra/repos/postgres/entities'

export class DesabilitarFuncionarioRepository extends PgRepository implements DesabilitarFuncionario {
  async desativar (id: string): Promise<void> {
    const repositorio = this.getRepository(PgFuncionario)
    const ativo = false
    await repositorio.update(id, { ativo })
  }
}
