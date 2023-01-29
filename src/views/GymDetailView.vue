<template>
  <div class="gym-detail-main">
    <div class="content">
      <NavBarView/>
      <ImagePager v-if="gymDetails.imageUrls !== undefined"
                  :image-urls="gymDetails.imageUrls"/>
      <GymInfo v-if="gymDetails.contact !== undefined" :gym-details="gymDetails"/>
    </div>
    <FooterView/>
  </div>
  <div class="background"/>
  <div class="gradient-area"/>
  <div class="main-background"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GymDetails } from '@/model/models'
import NavBarView from '@/views/NavBarView.vue'
import ImagePager from '@/components/gym-detail/ImagePager.vue'
import GymInfo from '@/components/gym-detail/GymInfo.vue'
import FooterView from '@/views/FooterView.vue'
import { gymDataService } from '@/service/gym-data.service'

export default defineComponent({
  name: 'GymDetailView',
  components: { FooterView, GymInfo, ImagePager, NavBarView },
  data () {
    return {
      gymDetails: {} as GymDetails
    }
  },
  async mounted () {
    const id = this.$route.params.id as string
    this.gymDetails = await gymDataService.loadGymDetail(id)
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
    padding-bottom: 200px;
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
