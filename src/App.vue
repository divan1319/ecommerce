<script  lang="ts">
import { RouterView } from "vue-router";
import TopBar from "./components/TopBar.vue";

export default {
components:{
  TopBar,
  RouterView
}
}
</script>

<template>
  <v-app>
    <TopBar />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
