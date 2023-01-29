<template>
  <div class="gym-info">
    <GymMainInfo :gym-details="gymDetails"/>
    <GymSideInfo :gym-details="gymDetails"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { GymDetails } from '@/model/models'
import GymMainInfo from '@/components/gym-detail/GymMainInfo.vue'
import GymSideInfo from '@/components/gym-detail/GymSideInfo.vue'

export default defineComponent({
  name: 'GymInfo',
  components: {
    GymSideInfo,
    GymMainInfo
  },
  props: {
    gymDetails: {
      type: Object as PropType<GymDetails>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.gym-info {
  margin-top: 40px;
  width: 100%;
  display: flex;
}

</style>
