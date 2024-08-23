<template>
  <div class="title">Our Products</div>

  <!-- Search Bar -->
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search for a product..."
      class="search-input"
    />
  </div>

  <!-- Sort Options -->
  <div class="sort-container">
    <label for="sort" class="sort">Sort by: </label>
    <select v-model="sortOption" id="sort" class="sort-select">
      <option value="default">Default</option>
      <option value="priceLowToHigh">Price: Low to High</option>
      <option value="priceHighToLow">Price: High to Low</option>
      <option value="aToZ">Name: A to Z</option>
      <option value="zToA">Name: Z to A</option>
    </select>
  </div>

  <div v-if="filteredProducts?.length > 0">
    <p class="itemsFound">Found {{ filteredProducts?.length }} item(s)</p>
  </div>
  <p v-else>Sorry, we don't have that item. Try another one.</p>

  <div v-if="filteredProducts?.length > 0" class="recent">
    <Card
      v-for="(product, index) in sortedProducts"
      :key="index"
      class="product-card"
    >
      <template #cardHeader>
        <img
          :src="product.productUrl"
          :alt="product.productName"
          class="card-image"
        />
      </template>
      <template #cardBody>
        <div class="card-content">
          <h5 class="card-title">{{ product.productName }}</h5>
          <p class="card-quantity">Scent: {{ product.productDescription }}</p>
          <p class="card-quantity">Quantity: {{ product.quantity }}</p>
          <p class="card-amount">Price: R{{ product.amount }}</p>
          <div class="button">
            <router-link :to="{name: 'product', params: {id: product.product_id}}">
              <button class="card-button">View Details</button>
            </router-link>
          </div>
        </div>
      </template>
    </Card>
  </div>
  <Spinner v-else />
  <p class="end lead d-flex justify-content-center">You've come to the end of our products❤️!</p>
</template>

<script setup>
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchQuery = ref('') 
const sortOption = ref('priceLowToHigh')

const products = computed(() => store.state.products)

// Computed property to filter and sort products
const filteredProducts = computed(() => {
  return products.value?.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const sortedProducts = computed(() => {
  let sorted = [...filteredProducts.value]
  switch (sortOption.value) {
    case 'priceLowToHigh':
      sorted.sort((a, b) => a.amount - b.amount)
      break
    case 'priceHighToLow':
      sorted.sort((a, b) => b.amount - a.amount)
      break
    case 'aToZ':
      sorted.sort((a, b) => a.productName.localeCompare(b.productName))
      break
    case 'zToA':
      sorted.sort((a, b) => b.productName.localeCompare(a.productName))
      break
      case 'default':
    default:
      sorted = filteredProducts.value 
      break

  }
  return sorted
})

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
  font-size: 50px;
  margin: 20px 0;
}

.recent {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  justify-content: center;
  margin: 20px;
}

.product-card {
  width: 100%;
  max-width: 100%;
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 20rem;
  object-fit: cover;
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
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.search-input {
  width: 100%;
  max-width: 300px;
  padding: 8px;
  font-size: 0.9rem; 
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

.sort-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
}

.sort-label {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;
}

.sort-select {
  width: 100%;
  max-width: 300px;
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
}

.sort-select:focus {
  border-color: #007bff;
  outline: none;
}

.itemsFound {
  margin: 20px;
}

.items-found,
.no-items {
  text-align: center;
  font-size: 1rem;
  margin: 10px 0;
}

.items-found {
  color: #28a745;
}

.no-items {
  color: #dc3545;
}

/* MEDIA QUERIES */
@media only screen and (max-width: 1200px) {
  .recent {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 900px) {
  .recent {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  .recent {
    grid-template-columns: 1fr;
  }

  .search-container, .sort-container {
    min-width: 100%;
    text-align: center;
  }

  .search-input, .sort-select {
    width: 50%;
  }
}
@media only screen and (max-width: 300px) {
  .search-container, .sort-container {
    flex-direction: column;
    align-items: center;
  }

  .search-input,
  .sort-select {
    max-width: 100%;
    font-size: 0.8rem; 
    padding: 6px; 
  }

  .sort-label {
    font-size: 0.8rem; /* Further reduced font size */
    margin-bottom: 5px;
  }

  .items-found, .no-items {
    font-size: 0.9rem;
  }
  .card-image{
    max-width: 100%;
  }
  .end {
    font-size: 15px;
  }
}
</style>