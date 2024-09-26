<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Products</h1>
        <ProductList />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-pagination v-model="page" :length="pageCount" @input="fetchProducts"></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    ProductList
  },
  data() {
    return {
      page: 1,
      pageCount: 5 // Modify based on the total number of pages
    }
  },
  methods: {
    fetchProductsApi() {
      // Fetch products for the selected page
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
