import { Controller } from '@/application/contracts'
import { HttpResponse, ok, serverError } from '@/application/helpers'
import { CrudFuncionario } from '@/domain/usecases/funcionarios'

export class BuscarFuncionarioPorIdController implements Controller {
  constructor (private readonly crudFuncionario: CrudFuncionario) { }

  async handle (request: string): Promise<HttpResponse<any>> {
    try {
      const funcionario = await this.crudFuncionario.buscarPorId(request)
      return ok(funcionario)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
