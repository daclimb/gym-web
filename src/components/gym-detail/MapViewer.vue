<template>
  <div class="map-viewer-main">
    <div class="map-wrapper" id="map-wrapper"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapService } from '@/service/map.service'

export default defineComponent({
  name: 'MapViewer',
  props: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  methods: {
    loadMap() {
      const container = document.getElementById('map-wrapper') // 지도를 담을 영역의 DOM 레퍼런스
      if (!container) {
        throw Error('MapViewer - could not initiate map viewer because html container is null!')
      }
      mapService.markPlace(container, this.latitude, this.longitude)
    }
  },
  mounted () {
    this.loadMap()
  }
})
</script>

<style lang="scss" scoped>
.map-viewer-main {

  .map-wrapper {
    width: 100%;
    height: 400px;
  }
}
</style>
