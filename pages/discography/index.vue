<template>
  <div class="discographyContainer">
    <aside class="sideMenu">

    </aside>
      <div class="discography content">
        <pageTitle :title="pageTitle" :detail="pageDetail"/>

        <div>
          <h3>ORIGINAL<span>- オリジナル作品 -</span></h3>
          <h4>Recommend</h4>
          <ul>
            <li v-for="content in original.recommend">
              <h5>{{content.title}}</h5>
              <span>{{content.record}}</span>
              <p>{{content.description}}</p>
              <div></div>

              <p>ご購入はこちら</p>
              <button>amazon</button>
              <button>towerRecord</button>
              <button>discUnion</button>
              <button>spotify</button>
            </li>
          </ul>
        </div>

        <div>
          <h3>REQUEST<span>- 参加作品 -</span></h3>
          <h4>Recommend</h4>

        </div>

        <div>
          <h3>COVER<span>- カバー動画 -</span></h3>
          <h4>Recommend</h4>

        </div>

      </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "discography",
    data() {
      return {
        pageTitle: 'DISCOGRAPHY',
        pageDetail: "作品を紹介します"
      }
    },
    computed: {
      ...mapGetters({
        original: 'discography/original',
        request: 'discography/request',
        cover: 'discography/cover',
      }),
    },
  }
</script>

<style scoped>

</style>
