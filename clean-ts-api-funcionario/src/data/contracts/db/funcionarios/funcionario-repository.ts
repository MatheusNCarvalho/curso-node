import { RepositoryBase } from '@/data/contracts'
import { Funcionario } from '@/domain/entities'

export interface FuncionarioRepository extends RepositoryBase<Funcionario> {
  existeEmail: (email: string) => Promise<boolean>
}
