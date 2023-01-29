<template>
  <div class="nav-bar-main">
    <div class="logo-wrapper" @click="onClickLogo">
      <img alt="logo" class="logo" src="@/assets/logo.png"/>
    </div>
    <div class="nav-wrapper">
      <div class="nav-items">
        <span @click="onClickLogin">로그인</span>
        <span @click="onClickSignup">회원가입</span>
      </div>
      <img alt="hamburger" class="hamburger" src="@/assets/hamburger.png"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBarView',
  methods: {
    onClickLogo() {
      this.$router.push('/')
    },
    onClickLogin() {
      this.$router.push('/login')
    },
    onClickSignup() {
      this.$router.push('/signup')
    }
  }
})
</script>

<style lang="scss" scoped>

.nav-bar-main {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-wrapper {
    width: 132px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    .logo {
      width: 100%;
      height: 26.6px;
    }
  }

  .nav-wrapper {
    display: flex;
    align-items: center;

    .nav-items {
      width: 144px;
      display: flex;
      justify-content: space-between;
      margin-right: 50px;

      span {
        font-style: normal;
        line-height: 150%;
        color: #151922;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .hamburger {
      width: 40px;
      height: 40px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
