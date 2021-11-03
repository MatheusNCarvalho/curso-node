import { Controller } from '@/application/contracts'
import { DbTransactionController } from '@/application/decorators'
import { criarPgConnection } from '@/main/factories/infra/repos/postgres/helpers'

export const criarDbTranscationController = (controller: Controller): DbTransactionController => {
  return new DbTransactionController(controller, criarPgConnection())
}
