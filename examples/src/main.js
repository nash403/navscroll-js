import './main.scss'

import NavScroll from '../../dist/navscroll'

Vue.use(NavScroll)

let NavigationExample1 = {
  props: ['entries', ...Object.keys(NavScroll.getDefaults())],
  template: `
    <navscroll class="nav-scroll-items entries"
      :container="container"
      :item-selector="'.item'"
      :active-class="activeClass"
      :always-track="alwaysTrack"
      :duration="duration"
      :offset="offset"
      :easing="easing"
      :anchor="anchor"
      :cancelable="cancelable"
      :scrollX="scrollX"
      :scrollY="scrollY">

      <a
        v-for="(entry,i) of entries" :key="i"
        :href="'#'+entry+'-target'"
        class="entry item">

          <span class="entry-name">Go to Table {{entry}}</span>
      </a>
    </navscroll>
  `
}

let NavigationExample2 = {
  props: ['entries', ...Object.keys(NavScroll.getDefaults())],
  template: `
    <nav class="nav-scroll-items entries"
      v-navscroll:item="{
        container, activeClass, alwaysTrack, duration,
        offset, easing, anchor, cancelable, scrollX, scrollY
      }">

      <a
        v-for="(entry,i) of entries" :key="i"
        :href="'#'+entry+'-target'"
        class="entry item">

          <span class="entry-name">Go to Table {{entry}}</span>
      </a>
    </nav>
  `
}

let NavigationExample3 = {
  props: ['entries', ...Object.keys(NavScroll.getDefaults())],
  mounted () {
    NavScroll.initObserver(this.$refs.wrapper, '.item', this.$props)
  },
  updated() {
    NavScroll.initObserver(this.$refs.wrapper, '.item', this.$props)
  },
  beforeDestroy () {
    NavScroll.unbindObserver(this.$props)
  },
  template: `
    <nav id="nav-wrapper" ref="wrapper" class="nav-scroll-items entries">

      <a
        v-for="(entry,i) of entries" :key="i"
        :href="'#'+entry+'-target'"
        class="entry item"
        v-navscroll="{
          container, activeClass, offset, alwaysTrack, duration,
          offset, easing, anchor, cancelable, scrollX, scrollY
        }">

          <span class="entry-name">Go to Table {{entry}}</span>
      </a>
    </nav>
  `
}

function format(str) {
  return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
    return '&#'+i.charCodeAt(0)+';';
 })
}

new Vue({
  el: '#app',
  components: {
    'nav-ex1': NavigationExample1,
    'nav-ex2': NavigationExample2,
    'nav-ex3': NavigationExample3
  },
  data () {
    return {
      sidebar: 'nav-ex1',
      entriesArray: Array.from(new Array(4), (_,i)=>i),
      container: '#scrollable-content',
      activeClass: 'active-position',
      preClass: '',
      codes: {
        'nav-ex1': format(NavigationExample1.template),
        'nav-ex2': format(NavigationExample2.template),
        'nav-ex3': format(NavigationExample3.template)
      },

      alwaysTrack: false,
      duration: 600,
      offset: 60,
      easing: '.5,0,.35,1',
      anchor: false,
      cancelable: true,
      scrollAxis: 'y',
    }
  },
  computed: {
    entries () { return Array.from(this.entriesArray, (_,i)=>i).map(i => `entry-${i}`) },

    prop () {
      return {
        entries: this.entries,
        container: '#scrollable-content',
        activeClass: 'active-position',
        alwaysTrack: this.alwaysTrack,
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
        anchor: this.anchor,
        cancelable: this.cancelable,
        scrollX: this.scrollAxis === 'x',
        scrollY: this.scrollAxis === 'y',
      }
    },

    code () { return this.codes[this.sidebar] }
  },
  methods: {
    toggleOptions(ev) {
      let optionsEl = this.$refs.options;
      optionsEl.classList.toggle('visible')
      optionsEl.style.bottom = 'initial';
      optionsEl.style.top = `${ev.srcElement.getBoundingClientRect().top}px`
    }
  }
})
