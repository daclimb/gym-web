<template>
  <div class="gym-detail-main">
    <div class="content">
      <NavBarView/>
      <ImagePager v-if="gymDetails.imageUrls !== undefined"
                  :image-urls="gymDetails.imageUrls"/>
      <div class="gym-info">
        <div class="main-info">
          <div class="location">
            <img class="image" src="@/assets/location.png"/>
            <p class="text">{{ gymDetails.address }}</p>
          </div>
          <div class="title-info">
            <p class="name">{{ gymDetails.name }}</p>
            <div class="extra">
            </div>
          </div>
          <div class="divider"/>
          <p class="description">{{ gymDetails.description }}</p>
        </div>
        <div class="side-info">
          <div class="tags">
            <p class="title">관련 태그</p>
            <div class="tag-items">
              <div class="tag-item" v-for="tag in gymDetails.tags" :key="tag.id"># {{ tag.name }}</div>
            </div>
          </div>
          <div class="prices">
            <p class="title">이용금액</p>
          </div>
          <div class="open-hours">
            <p class="title">영업시간</p>
          </div>
          <div class="convenience">
            <p class="title">시설 정보</p>
          </div>
          <div class="difficulty">
            <p class="title">난이도</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="background"/>
  <div class="gradient-area"/>
  <div class="main-background"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GymDetails } from '@/model/models'
import { gymDetails } from '@/mock/mock-data'
import NavBarView from '@/views/NavBarView.vue'
import ImagePager from '@/components/ImagePager.vue'

export default defineComponent({
  name: 'GymDetailView',
  components: { ImagePager, NavBarView },
  data () {
    return {
      gymDetails: {} as GymDetails
    }
  },
  mounted () {
    this.gymDetails = gymDetails
  }
})
</script>

<style lang="scss" scoped>

@mixin side-card {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px;
  background: #FAFAFA;
  border-radius: 8px;
  gap: 16px;

  .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #666666;
  }
}

.gym-detail-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: 70%;

    .gym-info {
      margin-top: 40px;
      width: 100%;
      display: flex;

      .main-info {
        width: 60%;
        padding: 28px;

        .location {
          display: flex;
          align-items: center;

          .image {
            width: 24px;
            height: 24px;
          }
          .text {
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #666666;
          }
        }

        .title-info {
          margin-bottom: 40px;

          .name {
            font-weight: 700;
            font-size: 48px;
            line-height: 64px;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #151922;
          }
        }

        .divider {
          height: 1px;
          background: #D0D0D0;
          margin-bottom: 48px;
        }

        .description {
          font-weight: 400;
          font-size: 24px;
          line-height: 150%;
          /* or 36px */
          color: #666666;
        }
      }

      .side-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        gap: 16px;
        width: 40%;

        filter: drop-shadow(0px 0px 15px rgba(29, 101, 122, 0.15));

        .tags {
          @include side-card;

          .tag-items {
            display: flex;
            gap: 4px;

            .tag-item {
              padding: 4px 8px;
              background: #EBEBEB;
              border-radius: 8px;
              font-weight: 400;
              font-size: 16px;
              color: #666666;
            }
          }
        }

        .prices {
          @include side-card;
        }

        .open-hours {
          @include side-card;
        }

        .convenience {
          @include side-card;
        }

        .difficulty {
          @include side-card;
        }
      }
    }
  }
}

.background {
  position: absolute;
  top: 0;
  width: 100%;
  height: 620px;
  background: linear-gradient(230.28deg, #7BE1FF -7.36%, #FAFAFA 78.24%);
  opacity: 0.2;
  z-index: -1;
}

.gradient-area {
  position: absolute;
  width: 100%;
  height: 116px;
  top: 520px;

  transform: rotate(180deg);
  z-index: -1;
  background: linear-gradient(180deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 100%);
}

.main-background {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #FAFAFA;
  z-index: -2;
}

</style>
