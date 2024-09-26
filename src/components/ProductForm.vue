<template>
  <v-container>
    <v-card>
      <v-card-title>{{ isEdit ? 'Edit Product' : 'Add Product' }}</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit">
          <v-text-field v-model="product.name" label="Name" required></v-text-field>
          <v-text-field v-model="product.price" label="Price" type="number" required></v-text-field>
          <v-textarea v-model="product.description" label="Description" required></v-textarea>
          <v-text-field v-model="product.image" label="Image URL" required></v-text-field>
          <v-btn type="submit" color="primary">{{ isEdit ? 'Update' : 'Add' }} Product</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    productData: {
      type: Object,
      default: () => ({
        name: '',
        price: 0,
        description: '',
        image: ''
      })
    }
  },
  data() {
    return {
      product: { ...this.productData }
    }
  },
  methods: {
    async handleSubmit() {
      const url = 'http://localhost:3001/products'
      const method = this.isEdit ? 'PUT' : 'POST'
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.product)
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        this.$emit('formSubmitted', data)
        this.$router.push({ name: 'home' }) // Navigate to HomeView.vue
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }
  }
}
</script>

<style scoped></style>
