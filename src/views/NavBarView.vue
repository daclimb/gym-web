<template>
  <div class="nav-bar-main">
    <div class="logo-wrapper">
      <img alt="logo" class="logo" src="@/assets/logo.png"/>
    </div>
    <div class="nav-wrapper">
      <div class="nav-items">
        <span>로그인</span>
        <span>회원가입</span>
      </div>
      <img alt="hamburger" class="hamburger" src="@/assets/hamburger.png"/>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NavBarView'
}
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
        font-weight: 400;
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
