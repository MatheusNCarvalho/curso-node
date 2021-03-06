import { HttpResponse } from '@/application/helpers'
import { ServerError } from '@/application/errors'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.message ?? error.stack)
})
