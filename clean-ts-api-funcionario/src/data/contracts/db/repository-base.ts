export interface RepositoryBase<TEntidade> {
  adicionar: (entidade: TEntidade) => Promise<void>
  atualizar: (id: string, entidade: TEntidade) => Promise<void>
  buscarPorId: (id: string) => Promise<TEntidade>
  buscarTodos: () => Promise<TEntidade[]>
}
