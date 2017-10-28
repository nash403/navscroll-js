import './main.scss'

import NavScroll from '../../navscroll'

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
    innerOnDone (entryIndex) {
      // remove active class on all elements but the current active one
      this.$refs.entries.forEach((e,i) => i !== entryIndex && e.classList.remove(this.activeClass));
    }
  }
})
