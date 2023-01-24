<template>
  <div class="gym-card-list-main">
    <div class="content">
      <GymCard class="gym-card-item" v-for="gym in listItems" :key="gym.id" :gym="gym"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GymCard from '@/components/GymCard.vue'
import { gymList } from '@/mock/mock-data'
import { Gym } from '@/model/models'

export default defineComponent({
  name: 'GymCardListView',
  components: { GymCard },
  data () {
    return {
      listItems: gymList as Gym[]
    }
  }
})
</script>

<style lang="scss" scoped>

.gym-card-list-main {
  background: #FAFAFA;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px 24px;

    .gym-card-item {
      &:hover {
        cursor: pointer;
      }
    }
  }
}

</style>
