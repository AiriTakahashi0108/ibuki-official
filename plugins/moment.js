import Vue from 'vue'
import moment from 'moment'

Vue.use(moment)

Vue.filter('dispDate', function (date) {
  return moment(date, 'YYYYMMDDHHmm').format('YYYY-MM-DD HH:mm');
})
