<template>
  <div class="scheduleContainer　container">
<!--    <div class="schedule content">-->
<!--      <pageTitle :title="pageTitle" :detail="pageDetail"/>-->
<!--      <ul>-->
<!--        <li v-for="event in live" :key="event.id">-->
<!--          <article v-if="event.liftingStatus">-->

<!--            &lt;!&ndash;イベント基本情報&ndash;&gt;-->
<!--            <h3>{{event.title}}</h3>-->
<!--            <p>{{event.data}}</p>-->
<!--            <p>-->
<!--              <a href="event.place.url">会場：{{event.place.title}}</a>-->
<!--              <span v-if="event.place.pref">[{{event.place.pref}}]</span>-->
<!--            </p>-->
<!--            <p>-->
<!--              <span>OPEN：{{event.open}}</span>-->
<!--              <span>START：{{event.start}}</span>-->
<!--            </p>-->
<!--            <p>-->
<!--              <span>前売り：{{event.advanceTicket}}円（税抜）</span>-->
<!--              <span>当日：{{event.dayTicket}}円（税抜）</span>-->
<!--            </p>-->

<!--            &lt;!&ndash;チケット販売状況&ndash;&gt;-->
<!--            <div>-->
<!--              <p v-if="event.ticketStatus.data > new Date()">{{event.ticketStatus.data}}より発売開始</p>-->
<!--              <div v-else-if="event.ticketStatus.data <= new Date()">-->
<!--                <p>チケット発売中！</p>-->
<!--                <p>ご予約方法</p>-->
<!--                <ul>-->
<!--                  <li>-->
<!--                    <nuxt-link to="/contact">HPから予約</nuxt-link>-->
<!--                  </li>-->
<!--                  <li v-if="event.ticketStatus.reservation">-->
<!--                    <p v-for="reservation in event.ticketStatus.reservation" :key="reservation.title">-->
<!--                      <a :href="event.ticketStatus.reservation.url">{{event.ticketStatus.eservation.title}}</a>-->
<!--                    </p>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--              <p v-else-if="event.ticketStatus.data <= new Date() && event.data < new Date() || event.ticketStatus.stop">販売終了</p>-->
<!--            </div>-->

<!--            &lt;!&ndash;イベント詳細&ndash;&gt;-->
<!--            <div>-->
<!--              <p>{{event.details.text}}</p>-->
<!--              <a v-if="event.details.url" href="event.details.url">{{event.details.urlName}}</a>-->
<!--            </div>-->
<!--          </article>-->
<!--          &lt;!&ndash;イベント画像&ndash;&gt;-->
<!--          <img v-if="event.image" :src="event.image" :alt="event.title"/>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
    <div>{{live}}</div>
    <div>{{media}}</div>
  </div>
</template>

<script>
  import PageTitle from "@/components/parts/PageTitle";
  import {mapGetters} from 'vuex';

  export default {
    async fetch({store}) {
      await store.dispatch('schedule/actionGetLive')
      await store.dispatch('schedule/actionGetMedia')
    },

    components: {PageTitle},
    head: {
      title: 'SCHEDULE',
    },
    name: 'SCHEDULE',
    data() {
      return {
        pageTitle: 'SCHEDULE',
        pageDetail: "ライブ・イベント・メディア掲載などの情報です",
      }
    },
    computed: {
      ...mapGetters({
        live: 'schedule/live',
        media: 'schedule/media',
        // release: 'schedule/release',
        // other: 'schedulehedule/other',
      }),
    },
  }
</script>

<style>
  li {
    list-style: none;
  }

  .scheduleContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
