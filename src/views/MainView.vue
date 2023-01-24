<template>
  <HeaderView/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderView from '@/views/HeaderView.vue' // @ is an alias to /src

export default defineComponent({
  name: 'MainView',
  components: { HeaderView }
})
</script>

<style lang="scss" scoped>

</style>
