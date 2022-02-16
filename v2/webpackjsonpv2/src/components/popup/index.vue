<template>
  <div v-if="popupVisible" :class="['popup', `popup--${type}`]">
    <div :class="['popup__mask']" @click="close"></div>
    <div
      :class="[
        'popup__wrap',
        enter ? `${type}-enter-active` : `${type}-leave-active`
      ]"
      :style="{
        '--webkit-animation-duration': `${timeout}ms`,
        animationDuration: `${timeout}ms`
      }"
    >
      <img
        v-if="type !== 'center'"
        src="https://p0.meituan.net/travelcube/90e27daa89c382ce6f1cc00f5957b4a81081.png@74w_74h_80q"
        class="popup__close popup__close--default"
        @click="close"
      />
      <img
        v-else
        src="https://p0.meituan.net/travelcube/2a75bb0ecf4e8dd8a1961741dc030fa31339.png"
        class="popup__close popup__close--primary"
        @click="close"
      />

      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import './styles.scss';
</style>
<script>
let visibleCount = 0

export default {
  name: 'popup',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    id: String,
    type: {
      type: String,
      default: 'center' // center bottom
    },
    timeout: {
      type: Number,
      default: 300
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.enter = true
      } else {
        this.enter = false
        setTimeout(() => {
          this.enter = true
        }, this.timeout - 15)
      }

      /**
       * 先计算 visibleCount
       * visibleCount 1   val true   toggleBodyScroll(ture)
       * visibleCount 0   val false  toggleBodyScroll(false)
       */
      val ? visibleCount++ : visibleCount--

      if (visibleCount === 1 && val === true) {
        this.toggleBodyScroll(true)
      }
      if (visibleCount === 0 && val === false) {
        this.toggleBodyScroll(false)
      }
    }
  },
  data() {
    return {
      enter: true,
      top: 0
    }
  },
  methods: {
    toggleBodyScroll(isFixed) {
      if (!this.isToggleBodyScroll) return

      let bodyEl = document.body
      if (isFixed) {
        this.top = window.scrollY
        bodyEl.style.position = 'fixed'
        bodyEl.style.top = -this.top + 'px'
        bodyEl.style.width = '100%'
      } else {
        bodyEl.style.position = ''
        bodyEl.style.top = ''
        bodyEl.style.width = ''
        window.scrollTo(0, this.top)
      }
    },
    //   v-on:webkitAnimationEnd="animationend"
    //   v-on:animationend="animationend"
    // animationend() {
    //   this.enter = true
    // },
    close(type = true) {
      if (!type) return
      this.$emit('close')
    }
  },
  computed: {
    popupVisible() {
      if (this.enter) {
        return this.visible
      } else {
        return true
      }
    }
  }
}
</script>
