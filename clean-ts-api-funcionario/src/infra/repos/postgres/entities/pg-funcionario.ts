import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'funcionarios' })
export class PgFuncionario {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: '230' })
  nome!: string

  @Column({ type: 'varchar', length: '16' })
  cpf!: string

  @Column({ type: 'varchar', length: '10' })
  rg!: string

  @Column({ type: 'varchar', length: '100' })
  email!: string

  @Column({ type: 'varchar', length: '20' })
  telefone!: string

  @Column()
  ativo!: boolean
}
