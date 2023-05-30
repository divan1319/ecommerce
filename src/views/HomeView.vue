<script  lang="ts">
import CategoryList from "@/components/CategoryList.vue";
import ProducList from "@/components/ProducList.vue";
export default{
  components:{
    CategoryList,ProducList
  }
}
</script>

<template>
  <main>
    <v-row>
      <v-col cols="2">
        <CategoryList/>
      </v-col>
      <v-col cols="10">
        <ProducList />
      </v-col>
    </v-row>
  </main>
</template>
