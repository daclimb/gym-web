<template>
  <div class="image-pager-main">
    <img class="image"
         :src="currentImageUrl"/>
    <div class="arrow-left-wrapper" @click="onClickArrow(-1)">
      <img class="arrow-image" src="@/assets/arrow-left.png"/>
    </div>
    <div class="arrow-right-wrapper" @click="onClickArrow(1)">
      <img class="arrow-image" src="@/assets/arrow-right.png"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ImagePager',
  props: {
    imageUrls: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    currentImageUrl () {
      return this.imageUrls[this.currentIndex]
    }
  },
  methods: {
    onClickArrow (dir: number) {
      const idx = this.currentIndex + dir
      if (idx >= 0 && idx < this.imageUrls.length) {
        this.currentIndex = idx
      }
      console.log(this.currentIndex)
    }
  }
})
</script>

<style lang="scss" scoped>

@mixin arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80px;
  height: 124px;

  background: #7BE1FF;
  opacity: 0.6;

  &:hover {
    cursor: pointer;
  }
}

.image-pager-main {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .image {
    width: 100%;
    object-fit: cover;
    height: 568px;
    border-radius: 8px;

    transition: all 2s;
  }

  .arrow-left-wrapper {
    @include arrow-container;
    border-radius: 0 8px 8px 0;
    left: 0;
  }

  .arrow-right-wrapper {
    @include arrow-container;
    border-radius: 8px 0 0 8px;
    right: 0;
  }

  div .arrow-image {
    width: 27px;
    height: 90px;
  }
}

</style>
