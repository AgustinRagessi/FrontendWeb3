<template>
  <v-container class="d-flex flex-column align-center justify-center fill-height">
    <h1>Adding Product</h1>
    <ProductForm :product="newProduct" @save-product="addProduct" form-title="Add Product" />
  </v-container>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue'

export default {
  name: 'AddProductView',
  components: { ProductForm },
  data() {
    return {
      newProduct: {
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '' // URL of the image
      }
    }
  },
  methods: {
    addProduct(product) {
      // Exclude unnecessary fields like id and rating from the product object
      const productToAdd = {
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
      }

      fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productToAdd)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Product added:', data)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.error('Error adding product:', error)
        })
    }
  }
}
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
