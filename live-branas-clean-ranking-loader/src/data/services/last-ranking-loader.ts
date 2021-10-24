import { RankingScoreModel } from '@/data/models'
import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingRepository } from '@/data/contracts'
import { RankingUnavaliableError } from '@/domain/errors'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) { }

  async load (): Promise<RankingScoreModel[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavaliableError()
    }
    return await this.loadLastRankingRepository.loadLastRanking()
  }
}
