<template>
    <HeaderView/>
    <GymCardListView/>
    <FooterView/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderView from '@/views/HeaderView.vue'
import GymCardListView from '@/views/GymCardListView.vue'
import FooterView from '@/views/FooterView.vue' // @ is an alias to /src

export default defineComponent({
  name: 'MainView',
  components: { FooterView, GymCardListView, HeaderView }
})
</script>

<style lang="scss" scoped>
</style>
