<template>
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
    <MapViewer class="map" :latitude="gymDetails.location.latitude"
                :longitude="gymDetails.location.longitude"/>
  </div>
</template>

<script lang="ts">
import { GymDetails } from '@/model/models'
import MapViewer from '@/components/gym-detail/MapViewer.vue'
import { PropType } from 'vue'

export default {
  name: 'GymMainInfo',
  components: { MapViewer },
  props: {
    gymDetails: {
      type: Object as PropType<GymDetails>,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
    margin-bottom: 40px;
  }

  .map {
    width: 100%;
  }
}

</style>
