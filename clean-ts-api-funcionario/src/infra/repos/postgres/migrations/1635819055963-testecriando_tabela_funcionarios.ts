import { MigrationInterface, QueryRunner } from 'typeorm'

export class testecriandoTabelaFuncionarios1635819055963 implements MigrationInterface {
    name = 'testecriandoTabelaFuncionarios1635819055963'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "funcionarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(230) NOT NULL, "cpf" character varying(16) NOT NULL, "rg" character varying(10) NOT NULL, "email" character varying(100) NOT NULL, "telefone" character varying(20) NOT NULL, "ativo" boolean NOT NULL, CONSTRAINT "PK_a6ee7c0e30d968db531ad073337" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "funcionarios"')
    }
}
