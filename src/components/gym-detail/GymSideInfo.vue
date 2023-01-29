<template>
  <div class="side-info">
    <div class="tags">
      <p class="title">관련 태그</p>
      <div class="tag-items">
        <div class="tag-item" v-for="tag in gymDetails.tags" :key="tag.id"># {{ tag.name }}</div>
      </div>
    </div>
    <div class="payments">
      <p class="title">이용금액</p>
      <div class="payment" v-for="(payment, idx) in gymDetails.payments" :key="idx">
        <p>{{ payment.title }}</p>
        <p class="text">{{ payment.price.toLocaleString() }} 원</p>
      </div>
    </div>
    <div class="open-hours">
      <p class="title">영업시간</p>
      <div class="open-hour" v-for="(opening, idx) in gymDetails.openingHours" :key="idx">
        <p>{{ opening.title }}</p>
        <p class="text">{{ opening.value }}</p>
      </div>
    </div>
    <div class="convenience">
      <p class="title">시설 정보</p>
      <p class="text">{{ gymDetails.convenience?.join(', ') }}</p>
    </div>
    <div class="difficulty">
      <div class="title-info">
        <p class="title">난이도</p>
        <p class="text">최근 세팅일: {{ gymDetails.lastSettingAt }}</p>
      </div>
      <div class="difficulty-colors">
        <ColorPalette v-if="gymDetails.difficulties !== undefined" :colors="gymDetails.difficulties"/>
      </div>
      <div class="difficulty-info">
        <p>easy</p>
        <p>hard</p>
      </div>
    </div>
    <div class="contact" v-if="gymDetails.contact !== undefined">
      <div class="contact-wrapper">
        <div>
          <img alt="email" src="@/assets/email.png"/>
          <p class="text">{{ gymDetails.contact.email }}</p>
        </div>
        <div>
          <img alt="phone" src="@/assets/phone.png"/>
          <p class="text">{{ gymDetails.contact.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { GymDetails } from '@/model/models'
import ColorPalette from '@/components/gym-detail/ColorPalette.vue'

export default defineComponent({
  name: 'GymSideInfo',
  components: { ColorPalette },
  props: {
    gymDetails: {
      type: Object as PropType<GymDetails>,
      required: true
    }
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

  .text {
    font-size: 16px;
    line-height: 150%;
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
        font-size: 16px;
        line-height: 150%;
        color: #666666;
      }
    }
  }

  .payments {
    @include side-card;

    .payment {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .open-hours {
    @include side-card;

    .open-hour {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .convenience {
    @include side-card;
  }

  .difficulty {
    @include side-card;

    .title-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .difficulty-colors {
      width: 100%;
    }

    .difficulty-info {
      width: 100%;
      display: flex;
      justify-content: space-between;

      p {
        font-size: 16px;
        line-height: 150%;
        color: #B7B7B7;
      }
    }
  }

  .contact {
    @include side-card;

    .contact-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;

        img {
          margin-right: 10px;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

</style>
