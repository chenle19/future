
<template>
  <div class="topBar">
    <div class="left">
      's'
    </div>
    <div class="center">
      F I T N E S S
    </div>
    <div class="right">
      右边
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>



<style scoped>
a {
  color: #42b983;
}
</style>
