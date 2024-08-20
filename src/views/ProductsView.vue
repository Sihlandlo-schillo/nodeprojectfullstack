<template>
  <div class="title">Our Products</div>
  <div v-if="products?.length">
    <div class="recent">
      <Card v-for="(product, index) in products" :key="index" class="product-card" >
        <template #cardHeader>
          <img :src="product.productUrl" :alt="product.productName" class="card-image">
        </template>
        <template #cardBody>
          <div class="card-content">
            <h5 class="card-title">{{ product.productName }}</h5>
            <p class="card-quantity">Quantity: {{ product.quantity }}</p>
            <p class="card-amount">Price: {{ product.amount }}</p>
            <div class="button">
              <button class="card-button">View Details</button>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
  <Spinner v-else />
</template>

<script setup>
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue';
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const products = computed(() => store.state.products)

onMounted(() => {
  store.dispatch('fetchProducts')
})
</script>

<style scoped>

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Island Moments", cursive;
  font-weight: 1000;
  font-style: normal;
  font-size: 50px;
}

.recent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem; 
  justify-content: center;
}

.button{
  display: flex;
  justify-content: center;
  /* background-color: pink; */
}

.product-card {
  max-width: 50rem;
  min-width: 23rem;
  height: 100%;
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  background-color: white;
}

#cardHeader{
  background-color: white;
}

.card-content {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-family: "Shadows Into Light", cursive;
  font-weight: 400;
  font-style: normal;
}

.card-description {
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.card-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #0056b3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

}

.card-button:hover {
  background-color: #aac1db;
}

.card-quantity {
  font-size: 14px;
  font-family: "Almendra Display", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
