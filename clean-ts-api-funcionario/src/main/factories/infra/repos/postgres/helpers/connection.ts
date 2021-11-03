import { PgConnection } from '@/infra/repos/postgres/helpers'

export const criarPgConnection = (): PgConnection => {
  return PgConnection.getInstance()
}
