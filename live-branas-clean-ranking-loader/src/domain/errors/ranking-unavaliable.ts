export class RankingUnavaliableError extends Error {
  constructor () {
    super('Ranking unavaliable')
    this.name = 'RankingUnavaliableError'
  }
}
