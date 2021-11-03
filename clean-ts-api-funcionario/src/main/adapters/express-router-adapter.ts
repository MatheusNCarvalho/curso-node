import { Controller } from '@/application/contracts'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {})
    }
    const httpResponse = await controller.handle(request)

    if (httpResponse.body instanceof Error) {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.stack
      })
      return
    }

    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
