import './config/module-alias'
import 'reflect-metadata'
import env from '@/main/config/env'

import { PgConnection } from '@/infra/repos/postgres/helpers'

PgConnection.getInstance().connect()
  .then(async () => {
    // await PgConnection.getInstance().runMigrations() // colocar um if para executar apenas em dev
    const { setupApp } = await import('@/main/config/app')
    const app = await setupApp()
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  }).catch(console.error)
