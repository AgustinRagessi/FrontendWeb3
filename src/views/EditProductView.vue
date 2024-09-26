<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <ProductForm :title="'Edit Product'" @submit="handleSubmit" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import ProductForm from '@/components/ProductForm.vue'

export default {
  name: 'EditProductView',
  components: {
    ProductForm
  },
  methods: {
    async handleSubmit(product) {
      try {
        const response = await axios.put('http://localhost:3001/products/' + product.id, product)
        console.log('Product updated:', response.data)
      } catch (error) {
        console.error('Error updating product:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Add any styles you need here */
</style>
