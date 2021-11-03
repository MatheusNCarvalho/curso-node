export interface CrudBase<TModel> {
  buscarPorId: (id: string) => Promise<TModel | undefined>
  buscarTodos: () => Promise<TModel[]>
  adicionar: (entity: TModel) => Promise<void>
  atualizar: (id: string, entity: TModel) => Promise<void>
}
