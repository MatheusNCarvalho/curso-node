import { Controller, DbTranscation } from '@/application/contracts'
import { HttpResponse } from '@/application/helpers'

export class DbTransactionController implements Controller {
  constructor (private readonly decorate: Controller,
    private readonly db: DbTranscation) {}

  async handle (request: any): Promise<HttpResponse> {
    await this.db.openTransaction()
    try {
      const httpResponse = await this.decorate.handle(request)
      await this.db.commit()
      return httpResponse
    } catch (error) {
      await this.db.rollback()
      throw error
    } finally {
      await this.db.closeTransaction()
    }
  }
}
