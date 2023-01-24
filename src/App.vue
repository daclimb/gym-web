<template>
  <MainView/>
</template>

<script>
import { defineComponent } from 'vue'
import MainView from '@/views/MainView'

export default defineComponent({
  components: { MainView }
})
</script>

<style lang="scss">

#app {
  font-family: 'Noto Sans KR', sans-serif !important;
}

* {
  margin: 0;
}

</style>
