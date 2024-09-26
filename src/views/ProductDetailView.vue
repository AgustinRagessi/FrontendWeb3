<template>
  <v-container>
    <ProductItem :product="product" />
  </v-container>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'

export default {
  name: 'ProductDetailView',
  components: { ProductItem },
  data() {
    return {
      product: null
    }
  },
  created() {
    const id = this.$route.params.id
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data
      })
  }
}
</script>
