export interface Gym {
  id: string
  thumbnailUrl: string
  address: string
  name: string
  lastSettingAt: string
  likeCount: number
  isLikedByMe: boolean
}

export interface GymDetails extends Gym {
  imageUrls: string[]
}
