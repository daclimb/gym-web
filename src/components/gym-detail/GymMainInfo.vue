<template>
  <div class="main-info">
    <div class="location">
      <img class="image" src="@/assets/location.png"/>
      <p class="text">{{ gymDetails.address }}</p>
    </div>
    <div class="title-info">
      <p class="name">{{ gymDetails.name }}</p>
      <div class="extra">
      </div>
    </div>
    <div class="title-divider"/>
    <p class="description">{{ gymDetails.description }}</p>
    <MapViewer class="map" :latitude="gymDetails.location.latitude"
               :longitude="gymDetails.location.longitude"/>
    <div class="content-divider"/>
    <div class="comment-section">
      <div class="editor">
        <div class="label">
          <p class="title">한줄평</p>
          <p class="count">{{ gymDetails.comments.length }}</p>
        </div>
        <textarea class="textarea"/>
        <div class="button">
          <button class="cancel">취소</button>
          <button class="confirm">댓글</button>
        </div>
      </div>
      <div class="comments">
        <div class="comment" v-for="(comment, idx) in gymDetails.comments" :key="idx">
          <div class="header">
            <p class="author">{{ comment.author }}</p>
            <p class="createdAt">{{ comment.createdAt }}</p>
          </div>
          <p class="content">{{ comment.content }}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { GymDetails } from '@/model/models'
import MapViewer from '@/components/gym-detail/MapViewer.vue'
import { PropType } from 'vue'

export default {
  name: 'GymMainInfo',
  components: { MapViewer },
  props: {
    gymDetails: {
      type: Object as PropType<GymDetails>,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-info {
  width: 60%;
  padding: 28px;

  .location {
    display: flex;
    align-items: center;

    .image {
      width: 24px;
      height: 24px;
    }

    .text {
      font-size: 16px;
      line-height: 32px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #666666;
    }
  }

  .title-info {
    margin-bottom: 40px;

    .name {
      font-weight: 700;
      font-size: 48px;
      line-height: 64px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #151922;
    }
  }

  .title-divider {
    height: 1px;
    background: #D0D0D0;
    margin-bottom: 48px;
  }

  .description {
    font-size: 24px;
    line-height: 150%;
    /* or 36px */
    color: #666666;
    margin-bottom: 40px;
  }

  .map {
    margin-bottom: 80px;
  }

  .content-divider {
    height: 2px;
    background: #D0D0D0;
    margin-bottom: 40px;
  }

  .comment-section {
    .editor {
      margin-bottom: 40px;
      .label {
        display: flex;
        gap: 8px;
        margin-bottom: 12px;

        .title {
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          color: #666666;
        }

        .count {
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          color: #7BE1FF;
        }
      }
      .textarea {
        width: 100%;
        height: 120px;
        box-sizing: border-box;
        border: none;
        resize: none;
        padding: 10px;
        background: #FAFAFA;
        box-shadow: 0 0 15px rgba(29, 101, 122, 0.15);
        border-radius: 8px;
        font-size: 16px;
        line-height: 150%;
        color: #151922;
        margin-bottom: 12px;

        &:focus {
          outline: none;
        }
      }
      .button {
        display: flex;
        justify-content: right;
        gap: 10px;
        .cancel {
          font-size: 16px;
          line-height: 150%;
          color: #151922;
          border: none;
          background: none;
        }
        .confirm {
          padding: 4px 9px;
          background: #7BE1FF;
          box-shadow: 0 0 15px rgba(29, 101, 122, 0.15);
          border-radius: 8px;
          border: none;

          font-size: 16px;
          line-height: 150%;
          color: #151922;
        }
      }
    }
    .comments {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 44px;
      .comment {
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: center;
        .header {
          display: flex;
          align-items: center;
          gap: 12px;

          .author {
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: #151922;
          }

          .createdAt {
            font-size: 16px;
            line-height: 150%;
            color: #CECECE;
          }
        }
        .content {
          font-size: 16px;
          line-height: 150%;
          color: #151922;
        }
      }
    }
  }
}

</style>
