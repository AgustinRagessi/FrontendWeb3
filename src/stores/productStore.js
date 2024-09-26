import { defineStore } from 'pinia'
import axios from 'axios'

export const productsStore = defineStore('productsStore', {
  state: () => ({
    products: []
  }),

  actions: {
    async fetchProductsApi() {
      try {
        const response = await axios.get('http://localhost:3001/products')
        console.log(response)
        this.products = response.data
      } catch (error) {
        this.error = 'Error de carga'
      }
    }
  }
})
