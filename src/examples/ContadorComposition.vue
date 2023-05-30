<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function increase(){
    count.value++
}

</script>
<template>
  <div>
    <p>Contador Compo: {{ count }}</p>
    <button @click="increase">+1</button>
  </div>
</template>
