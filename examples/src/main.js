import './main.scss'

import NavScroll from '../../src'

new Vue({
  el: '#app',
  directives: {
    'scroll-to': NavScroll
  },
  data () {
    return {
      entries: Array.from(new Array(10), (_,i)=>i).map(i => `entry-${i}`),
      activeClass: 'active-position'
    }
  },
  mounted() {
    this.$refs.entries[0].classList.add(this.activeClass)
  },
  methods: {
    resetActiveClass (entryIndex) {
      this.$refs.entries.forEach((e,i) => e.classList.remove(this.activeClass));
    }
  }
})
