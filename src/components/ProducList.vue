<script lang="ts">

import ProductCard from "./ProductCard.vue";
import type {  Product } from "../model/types";


export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: "Silla", price: 50 },
        { id: 2, name: "Monitor", price: 500 },
        { id: 3, name: "Mesa", price: 501 },
      ] as Product[],
      
    };
  },
  methods: {

  },
};
</script>
<template>
  <v-row>
    <v-col v-for="produc in products" cols="4" :key="produc.id">
      <ProductCard :product="produc" />
    </v-col>
  </v-row>
</template>
