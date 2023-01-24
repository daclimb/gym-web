import { Gym, GymDetails } from '@/model/models'

const gym: Gym = {
  id: '123',
  thumbnailUrl: 'https://ldb-phinf.pstatic.net/20220316_150/1647394513104roSMP_JPEG/3.jpg?type=w1500_60_sharpen',
  address: '서울 강남구 신사동 529-4 B1',
  name: '더스클라이밍짐',
  lastSettingAt: '2022-12-12',
  likeCount: 0,
  isLikedByMe: false
}

export const gymDetails: GymDetails = {
  imageUrls: [
    'https://ldb-phinf.pstatic.net/20220316_150/1647394513104roSMP_JPEG/3.jpg?type=w1500_60_sharpen',
    'https://blog.kakaocdn.net/dn/b0HpbI/btqDVWkSIwM/KJLtiHUK1wfilfIUXLBKKk/img.png'
  ],
  ...gym
}

export const gymList: Gym[] = [
  gym, gym, gym, gym
]
