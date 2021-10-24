import { HttpResponse } from '@/presentation/contracts'

export interface Controller {
  handler: () => Promise<HttpResponse>
}
