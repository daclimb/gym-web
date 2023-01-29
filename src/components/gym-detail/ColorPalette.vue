<template>
  <div class="palette-main">
    <div class="color" v-for="(color, idx) in colors"
         :key="idx"
         :style="'background: '+ color"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ColorPalette',
  props: {
    colors: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>

.palette-main {
  display: flex;
  .color {
    width: 100%;
    height: 33px;
  }
}

</style>
