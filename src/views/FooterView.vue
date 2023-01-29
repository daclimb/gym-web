<template>
  <div class="footer-main">
    <div class="content">
      <div class="main-info">
        <img class="logo" alt="logo" src="@/assets/logo.png"/>
        <div class="nav-items">
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Contact us</p>
        </div>
      </div>
      <div class="sub-info">
        <div class="sns-items">
          <p>Dribble</p>
          <p>Behance</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <p class="copyright">Copyright Daclimb</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterView'
})
</script>

<style lang="scss" scoped>

.footer-main {
  width: 100%;
  height: 192px;
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;

    .main-info {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .logo {
        width: 192px;
        height: 38px;
      }

      .nav-items {
        display: flex;
        justify-content: space-between;
        gap: 45px;

        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: #666666;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    .sub-info {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .sns-items {
        display: flex;
        justify-content: space-between;
        gap: 27px;

        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: #666666;

          &:hover {
            cursor: pointer;
          }
        }
      }
      .copyright {
        font-size: 16px;
        line-height: 150%;
        color: #666666;
      }
    }
  }
}

</style>
