<template>
  <div class="header-main">
    <div class="content">
      <NavBarView/>
      <div class="landing-content">
        <div class="text-dots">
          <div class="dot"/>
          <div class="dot"/>
          <div class="dot"/>
        </div>
        <div class="text">
          <span class="text-first">주변 암벽장 찾을땐</span>
          <br/>
          <span class="text-second">다 ⎯⎯ 클라이밍</span>
        </div>
        <div class="search-bar">
          <input class="input" placeholder="주소를 입력하면 주변 암벽장을 찾아드려요">
          <img class="search-button" alt="search-button" src="@/assets/search.png"/>
        </div>
        <div class="tags">
          <span class="title">인기 검색어</span>
          <div class="tag-items">
            <span class="tag-item" v-for="(tag, idx) in tags" :key="idx">#{{ tag }}</span>
          </div>
        </div>
      </div>
      <img class="landing-picture" src="@/assets/header-picture.png" alt="landing-picture"/>
    </div>
    <div class="background"/>
    <div class="gradient-area"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBarView from './NavBarView.vue'

export default defineComponent({
  name: 'HeaderView',
  components: { NavBarView },
  data () {
    return {
      tags: ['태그', '태그', '태그']
    }
  }
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
    height: 100%;
    position: relative;

    .landing-content {
      position: absolute;
      left: 150px;
      bottom: 10px;

      .text-dots {
        width: 20%;
        margin-left: 110px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .dot {
          width: 6px;
          height: 6px;
          background: #529FE2;
          border-radius: 45px;
        }
      }

      .text {
        margin-bottom: 32px;

        span {
          font-weight: 900;
          font-size: 48px;
          font-feature-settings: 'pnum' on, 'lnum' on;
        }

        .text-first {
          color: #151922;
        }

        .text-second {
          background: radial-gradient(74% 2007.38% at 77.73% 51.39%, #151922 0%, #4F9DE0 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

      }

      .search-bar {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .input {
          padding-left: 28px;
          border: none;
          width: 420px;
          height: 56px;
          background: #FAFAFA;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;

          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          /* identical to box height, or 138% */
          color: #999999;

          &:focus {
            outline: none;
          }

          &::placeholder {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height, or 138% */
            color: #999999;
          }
        }

        .search-button {
          position: absolute;
          width: 24px;
          height: 24px;
          right: 16px;
        }
      }
    }

    .tags {
      width: 100%;
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #666666;
      }
    }

    .landing-picture {
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

  .gradient-area {
    width: 100%;
    height: 116px;
    background: linear-gradient(180deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 100%);
    transform: rotate(180deg);
  }
}
</style>
