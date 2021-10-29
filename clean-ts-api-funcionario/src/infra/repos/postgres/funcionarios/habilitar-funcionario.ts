import { HabilitarFuncionario } from '@/domain/usecases/funcionarios'
import { PgRepository } from '@/infra/repos/postgres/repository'
import { PgFuncionario } from '@/infra/repos/postgres/entities'

export class HabiliarFuncionarioRepository extends PgRepository implements HabilitarFuncionario {
  async habilitar (id: string): Promise<void> {
    const repositorio = this.getRepository(PgFuncionario)
    const ativo = true
    await repositorio.update(id, { ativo })
  }
}
