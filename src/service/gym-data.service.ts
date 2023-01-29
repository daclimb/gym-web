import { Gym, GymDetails } from '@/model/models'
import { gymDetails, gymList } from '@/service/mock/mock-data'

export class GymDataService {
  public loadGymList(): Promise<Gym[]> {
    return Promise.resolve(gymList)
  }

  public loadGymDetail(id: string): Promise<GymDetails> {
    console.log(`GymDataService - loading gym with id ${id}`)
    return Promise.resolve(gymDetails)
  }
}

export const gymDataService = new GymDataService()
