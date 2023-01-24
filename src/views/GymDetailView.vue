<template>
  <div class="gym-detail-main">
    <div class="content">
      <NavBarView/>
      <ImagePager v-if="gymDetails.imageUrls !== undefined"
                  :image-urls="gymDetails.imageUrls"/>
    </div>
  </div>
  <div class="background"/>
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
    const id = this.$route.params.id
    console.log('id')
    this.gymDetails = gymDetails
  }
})
</script>

<style lang="scss" scoped>

.gym-detail-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: 70%;
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

</style>
