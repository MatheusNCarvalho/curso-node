import { ConnectionNotFoundError, TransactionNotFoundError } from '@/infra/repos/postgres/helpers'
import { DbTranscation } from '@/application/contracts'
import { Connection, createConnection, getConnection, getConnectionManager, QueryRunner, ObjectType, Repository, getRepository } from 'typeorm'

export class PgConnection implements DbTranscation {
  private static instance?: PgConnection
  private query?: QueryRunner
  private connection?: Connection

  private constructor () {}

  static getInstance (): PgConnection {
    if (PgConnection.instance === undefined) {
      PgConnection.instance = new PgConnection()
    }
    return PgConnection.instance
  }

  async connect (): Promise<void> {
    this.connection = getConnectionManager().has('default')
      ? getConnection()
      : await createConnection()
  }

  async openTransaction (): Promise<void> {
    if (this.connection === undefined) {
      throw new ConnectionNotFoundError()
    }
    this.query = this.connection.createQueryRunner()
    await this.query.startTransaction()
  }

  async closeTransaction (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.release()
  }

  async commit (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.commitTransaction()
  }

  async rollback (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.rollbackTransaction()
  }

  async runMigrations (): Promise<void> {
    await this.connection?.runMigrations()
  }

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    if (this.query !== undefined) return this.query.manager.getRepository(entity)
    return getRepository(entity)
  }
}
