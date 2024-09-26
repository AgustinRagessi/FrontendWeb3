<template>
  <v-card
    :class="hovered ? 'hovered-card' : ''"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="goToProductPage"
  >
    <v-img :src="product.image" height="200px" />
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle v-if="!hovered">
      Price: {{ product.price }} | Rating: {{ product.rating }}
    </v-card-subtitle>
    <v-card-text v-if="hovered" :class="'hovered-text'">
      {{ product.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hovered: false
    }
  },
  methods: {
    goToProductPage() {
      this.$router.push(`/products/${this.product.id}`)
    }
  }
}
</script>

<style scoped>
.hovered-card {
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: #2ce88a; /* Example background color on hover */
}

.hovered-text {
  font-size: 1.2em;
  font-weight: bold;
  color: #ffffff; /* Example text color on hover */
}
</style>
