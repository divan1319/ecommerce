
import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types';

export const useCartStore = defineStore('cart',{
  state:()=>({
    details:[] as CartDetail[]
  }),
  getters:{
    cartItemCount:(state)=>{
      let count = 0;
      state.details.forEach(d=>{
        count += d.quantity;
      });

      return count;
    }
  },
  actions:{
    addProduct(product: Product){
      const detailFound = this.details.find((d) => d.product.id === product.id);
      if (detailFound) {
        detailFound.quantity++;
      } else {
        this.details.push({
          product,
          quantity: 1,
        });
      }
    },
    increment(product_id: number){
      const detailFound = this.details.find((d) => d.product.id === product_id);
      if(detailFound){
        detailFound.quantity++
      }
    },
    decrement(product_id: number){
      const detailFound = this.details.find((d) => d.product.id === product_id);
      if(detailFound){
        detailFound.quantity--
        if (detailFound.quantity === 0) {
          this.deleteProduct(product_id)
        }
      }
    },
    deleteProduct(product_id: number){
      const index = this.details.findIndex(d=>d.product.id===product_id)
      this.details.splice(index,1)
    }
  }
})
