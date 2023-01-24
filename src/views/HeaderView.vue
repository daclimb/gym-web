<template>
  <div class="header-main">
    <div class="content">
      <NavBarView/>
      <img class="main-picture" src="@/assets/header-picture.png"/>
    </div>
    <div class="background"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBarView from '@/views/NavBarView'

export default defineComponent({
  name: 'HeaderView',
  components: { NavBarView }
})
</script>

<style lang="scss" scoped>

.header-main {
  width: 100%;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 70%;
    position: relative;
    .main-picture {
      position: absolute;
      right: 50px;
      top: 80px;
      width: 561.38px;
      height: 561.38px;
      transform: matrix(-0.97, 0.24, 0.24, 0.97, 0, 0);
    }
  }

  .background {
    position: absolute;
    top: 0;
    height: 620px;
    width: 100%;
    background: linear-gradient(230.28deg, #7BE1FF -7.36%, #FAFAFA 78.24%);
    opacity: 0.7;
    z-index: -1;
  }
}
</style>
