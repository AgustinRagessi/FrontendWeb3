<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn color="primary" @click="goToAddProduct">Add Product</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id">
        <v-card class="custom-card">
          <v-img :src="product.image" height="200px"></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" @click="editProduct(product)">Editar</v-btn>
            <v-btn color="error" @click="deleteProduct(product.id)">Eliminar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { productsStore } from '@/stores/productStore'
import { onMounted, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import ProductForm from '@/components/ProductForm.vue'

export default {
  components: {
    ProductForm
  },
  props: {
    isEdit: Boolean
  },
  setup() {
    const prodStore = productsStore()
    const router = useRouter()
    const isEdit = ref(false)

    onMounted(() => {
      prodStore.fetchProductsApi()
    })

    const products = computed(() => prodStore.products)
    const error = computed(() => prodStore.error)

    const editProduct = (product) => {
      isEdit.value = true
      router.push({ name: 'edit-product' })
    }

    const deleteProduct = (productId) => {
      // Logic for deleting the product
    }

    const goToAddProduct = () => {
      isEdit.value = false
      router.push({ name: 'add-product' })
    }

    return {
      products,
      error,
      editProduct,
      deleteProduct,
      navigateToAddProduct,
      isEdit
    }
  }
}
</script>

<style scoped>
.custom-card {
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

.custom-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: white !important;
}

.custom-card:hover .v-card-title,
.custom-card:hover .v-card-subtitle,
.custom-card:hover .v-card-actions {
  color: black !important;
}

.custom-card .v-img {
  opacity: 1 !important;
}
</style>
