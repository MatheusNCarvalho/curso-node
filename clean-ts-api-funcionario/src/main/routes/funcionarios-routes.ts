import { Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { criarAdicionarFuncionarioController, criarBuscarFuncionarioPorIdController } from '@/main/factories/application/controllers'

export default (router: Router): void => {
  router.post('/funcionarios', adaptRoute(criarAdicionarFuncionarioController()))
  router.get('/funcionarios/:id', adaptRoute(criarBuscarFuncionarioPorIdController()))
}
