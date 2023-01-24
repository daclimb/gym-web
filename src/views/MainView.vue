<template>
  <div class="main-content">
    <HeaderView/>
    <GymCardListView/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderView from '@/views/HeaderView.vue'
import GymCardListView from '@/views/GymCardListView.vue' // @ is an alias to /src

export default defineComponent({
  name: 'MainView',
  components: { GymCardListView, HeaderView }
})
</script>

<style lang="scss" scoped>

</style>
