<template>
  <div class="gym-card-list-main">
    <div class="content">
      <GymCard class="gym-card-item"
               v-for="gym in listItems"
               :key="gym.id" :gym="gym"
      @click="onClickGymCard(gym.id)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GymCard from '@/components/GymCard.vue'
import { Gym } from '@/model/models'
import { gymDataService } from '@/service/gym-data.service'

export default defineComponent({
  name: 'GymCardListView',
  components: { GymCard },
  data () {
    return {
      listItems: [] as Gym[]
    }
  },
  methods: {
    onClickGymCard (id: string) {
      this.$router.push('/gym/' + id)
    }
  },
  async mounted () {
    this.listItems = await gymDataService.loadGymList()
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
  padding-bottom: 200px;

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
