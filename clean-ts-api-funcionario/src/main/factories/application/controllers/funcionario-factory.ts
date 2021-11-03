import { Controller } from '@/application/contracts'
import { AdicionarFuncionarioController, BuscarFuncionarioPorIdController } from '@/application/controllers'
import { FuncionarioService } from '@/data/services'
import { PgFuncionarioRepository } from '@/infra/repos/postgres/funcionarios'
import { criarDbTranscationController } from '@/main/factories/application/decorators'

export const criarAdicionarFuncionarioController = (): Controller => {
  const funcionarioRepository = new PgFuncionarioRepository()
  const funcionarioService = new FuncionarioService(funcionarioRepository)

  const controller = new AdicionarFuncionarioController(funcionarioService)
  return criarDbTranscationController(controller)
}

export const criarBuscarFuncionarioPorIdController = (): Controller => {
  const funcionarioRepository = new PgFuncionarioRepository()
  const funcionarioService = new FuncionarioService(funcionarioRepository)

  const controller = new BuscarFuncionarioPorIdController(funcionarioService)
  return criarDbTranscationController(controller)
}
