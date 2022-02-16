<template>
  <div id="app">
    <h1 @click="toggle(true)">show</h1>
    hello world!!!
    <Button />
    <Popup :visible="visible" @close="toggle(false)">
      <div style="height:60vh;width:60vw;background:#fff">
        popup
        <h1 @click="toggle(false)">hidden</h1>
      </div>
    </Popup>
  </div>
</template>

<script>
import Button from './components/button'
import Popup from './components/popup'
export default {
  components: { Button, Popup },
  name: 'app',
  data() {
    return { visible: true }
  },
  methods: {
    toggle(v) {
      this.visible = v
    }
  }
}
</script>

<style></style>
