<script lang="ts">
import type { PropType } from "vue";
import type { Product } from "../model/types";
import { useCartStore } from "@/stores/cart";
export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  methods: {
    handleAddProduct() {
      //console.log("Agregando producto"+this.product.id)
      //this.$emit("addProduct");
      const cartStore = useCartStore();
      cartStore.addProduct(this.product)
    },
  },
};
</script>

<template>
  <v-card :title="product.name">
    <v-card-text>
      <p class="mb-5">
        Esto es una descripcion
      </p>
      <v-chip> ${{ product.price }} </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="handleAddProduct" color="orange-lighten-2">
        Agregar al carrito
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
