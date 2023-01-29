<template>
  <div class="gym-card-main">
    <img class="image" alt="gym-image" :src="gym.thumbnailUrl"/>
    <div class="infos">
      <p class="address">{{ gym.address }}</p>
      <p class="name">{{ gym.name }}</p>
      <div class="info-footer">
        <p class="lastSettingAt">최근 세팅일: {{ gym.lastSettingAt }}</p>
        <div class="like-wrapper">
          <p class="like-count">{{ gym.likeCount }}</p>
          <img class="like-image" src="@/assets/like.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Gym } from '@/model/models'

export default defineComponent({
  name: 'GymCard',
  props: {
    gym: {
      type: Object as PropType<Gym>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.gym-card-main {
  display: flex;
  flex-direction: column;

  background: #FAFAFA;
  box-shadow: 0 0 15px rgba(29, 101, 122, 0.15);
  border-radius: 8px;

  .image {
    width: 100%;
    height: 216px;
    object-fit: cover;
  }

  .infos {
    padding: 16px;

    .address {
      font-size: 16px;
      line-height: 150%;
      color: #666666;
    }

    .name {
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #151922;
      margin-bottom: 16px;
    }

    .lastSettingAt {
      font-size: 16px;
      color: #666666;
    }

    .info-footer {
      display: flex;
      justify-content: space-between;

      .like-wrapper {
        display: flex;
        align-items: center;
        gap: 7px;

        .like-count {
          font-size: 16px;
          line-height: 150%;
          color: #666666;
        }

        .like-image {
          width: 20.49px;
          height: 18.73px;
        }
      }
    }
  }
}
</style>
