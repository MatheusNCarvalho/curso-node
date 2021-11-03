import { Controller } from '@/application/contracts'
import { HttpResponse, noContent, serverError } from '@/application/helpers'
import { FuncionarioModel } from '@/domain/entities'
import { CrudFuncionario } from '@/domain/usecases/funcionarios'

export class AdicionarFuncionarioController implements Controller<FuncionarioModel> {
  constructor (private readonly crudFuncionario: CrudFuncionario) { }

  async handle (request: FuncionarioModel): Promise<HttpResponse<any>> {
    try {
      await this.crudFuncionario.adicionar(request)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
