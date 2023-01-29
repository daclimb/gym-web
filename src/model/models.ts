export interface Gym {
  id: string
  thumbnailUrl: string
  address: string
  name: string
  lastSettingAt: string
  likeCount: number
  isLikedByMe: boolean
}

export interface Payment {
  title: string
  price: number
}

export interface Location {
  address: string
  longitude: number
  latitude: number
}

export interface Tag {
  id: string
  name: string
}

export interface Contact {
  email: string
  phone: string
}

export interface OpeningHours {
  title: string
  value: string
}

export interface Comment {
  content: string
  createdAt: string
  author: string
}

export interface GymDetails extends Gym {
  imageUrls: string[]
  description: string
  tags: Tag[]
  payments: Payment[]
  location: Location
  openingHours: OpeningHours[]
  convenience: string[]
  difficulties: string[]
  contact: Contact
  comments: Comment[]
}
