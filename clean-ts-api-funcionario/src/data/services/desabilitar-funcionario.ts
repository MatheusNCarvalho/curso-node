import { DesabilitarFuncionario } from '@/domain/usecases/funcionarios'
import { FuncionarioRepository } from '@/data/contracts'

export class DesabilitarFuncionarioService implements DesabilitarFuncionario {
  constructor (private readonly funcionarioRepository: FuncionarioRepository) {}

  async desativar (id: string): Promise<void> {
    const funcionario = await this.funcionarioRepository.buscarPorId(id)

    if (funcionario == null) {
      return
    }

    funcionario.habilitar()
    await this.funcionarioRepository.atualizar(id, funcionario)
  }
}
