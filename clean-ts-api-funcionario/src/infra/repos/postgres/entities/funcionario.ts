import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'funcionarios' })
export class PgFuncionario {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  nome!: string

  cpf!: string

  rg!: string

  email!: string

  telefone!: string

  ativo!: boolean
}
