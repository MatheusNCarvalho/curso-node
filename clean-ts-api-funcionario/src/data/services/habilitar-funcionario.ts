import { HabilitarFuncionario } from '@/domain/usecases/funcionarios'
import { FuncionarioRepository } from '@/data/contracts'

export class AtivarFuncionarioService implements HabilitarFuncionario {
  constructor (private readonly funcionarioRepository: FuncionarioRepository) {}

  async habilitar (id: string): Promise<void> {
    const funcionario = await this.funcionarioRepository.buscarPorId(id)

    if (funcionario == null) {
      return
    }

    funcionario.habilitar()
    await this.funcionarioRepository.atualizar(id, funcionario)
  }
}
