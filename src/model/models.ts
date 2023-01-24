export interface Gym {
  id: string
  thumbnailUrl: string
  address: string
  name: string
  lastSettingAt: string
  likeCount: number
  isLikedByMe: boolean
}

export interface Tag {
  id: string
  name: string
}

export interface GymDetails extends Gym {
  imageUrls: string[]
  description: string
  tags: Tag[]
}
