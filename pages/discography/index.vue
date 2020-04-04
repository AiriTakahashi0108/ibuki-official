<template>
  <div class="discographyContainer">
    <aside class="sideMenu">

    </aside>
    <div class="discography content">
      <pageTitle :title="pageTitle" :detail="pageDetail"/>

      <!--オリジナル-->
      <div>
        <h3>ORIGINAL<span>- オリジナル作品 -</span></h3>

        <h4>Recommend</h4>
        <ul class="worksList">
          <li v-for="content in original.recommend" :key="content.id">
            <h5>{{content.title}}</h5>
            <span>{{content.record}}</span>
            <p>{{content.description}}</p>
            <div>
              <iframe
                width="560"
                height="315"
                :src="content.movie"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="purchaseButtonList">
              <p>ご購入はこちら</p>
              <button><a :href="content.purchase.amazon">amazon</a></button>
              <button><a :href="content.purchase.towerRecord">towerRecord</a></button>
              <button><a :href="content.purchase.discUnion">discUnion</a></button>
              <button><a :href="content.purchase.spotify">spotify</a></button>
            </div>

            <p v-if="content.notice">{{content.notice}}</p>
          </li>
        </ul>

        <h4>other</h4>
        <ul class="worksList">
          <li v-for="content in original.other" :key="content.id">
            <h5>{{content.title}}</h5>
            <span>{{content.JN}}</span>
            <p>{{content.price}}</p>
            <div>
              <iframe
                width="448"
                height="252"
                :src="content.movie"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="purchaseButtonList">
              <p>ご購入はこちら</p>
              <button><a :href="content.purchase.amazon">amazon</a></button>
              <button><a :href="content.purchase.towerRecord">towerRecord</a></button>
              <button><a :href="content.purchase.discUnion">discUnion</a></button>
              <button><a :href="content.purchase.spotify">spotify</a></button>
            </div>

            <p v-if="content.notice">{{content.notice}}</p>
          </li>
        </ul>
      </div>

      <!--参加作品-->
      <div>
        <h3>REQUEST<span>- 参加作品 -</span></h3>
        <h4>Recommend</h4>
        <ul class="worksList">
          <li v-for="content in original.recommend" :key="content.id">
            <h5>{{content.title}}</h5>
            <span>{{content.record}}</span>
            <p>{{content.description}}</p>
            <div>
              <iframe
                width="560"
                height="315"
                :src="content.movie"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="purchaseButtonList">
              <p>ご購入はこちら</p>
              <button><a :href="content.purchase.amazon">amazon</a></button>
              <button><a :href="content.purchase.towerRecord">towerRecord</a></button>
              <button><a :href="content.purchase.discUnion">discUnion</a></button>
              <button><a :href="content.purchase.spotify">spotify</a></button>
            </div>

            <p v-if="content.notice">{{content.notice}}</p>
          </li>
        </ul>

        <h4>other</h4>
        <ul class="worksList">
          <li v-for="content in original.other" :key="content.id">
            <h5>{{content.title}}</h5>
            <span>{{content.JN}}</span>
            <p>{{content.price}}</p>
            <div>
              <iframe
                width="560"
                height="315"
                :src="content.movie"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="purchaseButtonList">
              <p>ご購入はこちら</p>
              <button><a :href="content.purchase.amazon">amazon</a></button>
              <button><a :href="content.purchase.towerRecord">towerRecord</a></button>
              <button><a :href="content.purchase.discUnion">discUnion</a></button>
              <button><a :href="content.purchase.spotify">spotify</a></button>
            </div>

            <p v-if="content.notice">{{content.notice}}</p>
          </li>
        </ul>
      </div>

      <!--カバー動画-->
      <div>
        <h3>COVER<span>- カバー動画 -</span></h3>
        <h4>Recommend</h4>

      </div>

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import PageTitle from "@/components/parts/PageTitle";

  export default {
    name: "discography",
    components: {
      PageTitle
    },
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
  .worksList {
    & > li {
      list-style: none;
    }
  }

</style>
