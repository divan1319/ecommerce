<script lang="ts">
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";

export default {

  computed: {
        details() {
            return this.cartStore.details;
        },
        cartStore() {
            return useCartStore();
        },
    },
    methods: {
        decrementQuantity(product_id: number) {
            this.cartStore.decrement(product_id);
        },
        incrementQuantity(product_id: number) {
            this.cartStore.increment(product_id);
        },
        deleteProduct(product_id: number) {
            this.cartStore.deleteProduct(product_id);
        },
    },
    components: { RouterLink }
};
</script>
<template>
  <v-card class="mt-4">
    <v-card-title>Productos agregados al carrito:</v-card-title>
    <v-card-text>
      <v-list v-if="details.length > 0 ">
        <v-list-item v-for="detail in details" :value="detail.product.id" :key="detail.product.id">
          <v-list-item-title>
            {{ detail.product.name }}
            <v-btn @click="incrementQuantity(detail.product.id)" class="ml-2"> + </v-btn>
            Cantidad : {{ detail.quantity }}
            <v-btn @click="decrementQuantity(detail.product.id)"> - </v-btn>
            <v-btn @click="deleteProduct(detail.product.id)"> Eliminar </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <p v-else>
        Aun no has agregado items al carrito. Haz click <RouterLink to="/">aqui</RouterLink> para ver los producto disponibles
      </p>
    </v-card-text>
  </v-card>
</template>
