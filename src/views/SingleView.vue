<template>
<h5 class="card-title">{{ product.productName }}</h5>
    <div v-if="products?.length">
      <div class="recent">
        <Card v-for="(product, index) in products" :key="index" class="product-card">
          <template #cardHeader>
            <img :src="product.productUrl" :alt="product.productName" class="card-image">
          </template>
          <template #cardBody>
            <div class="card-content">
              <p class="card-quantity">Quantity: {{ product.quantity }}</p>
              <p class="card-amount">Price: {{ product.amount }}</p>
              <div class="button">
                <button class="card-button">Go back</button>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <Spinner v-else />
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  import Spinner from '@/components/Spinner.vue';
  
  export default {
    components: {
      Card,
      Spinner
    },
    computed: {
      products() {
        return this.$store.state.products; // Adjust according to your store state
      }
    },
    mounted() {
      this.$store.dispatch("fetchProducts"); // Adjust according to your action
    }
  }
  </script>
  
  <style scoped>
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .recent {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product-card {
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
  }
  
  .card-image {
    height: 300px;
    border-radius: 30px;
    margin: 20px;
    transition: transform 0.3s;
  }
  
  .card-image:hover {
    transform: scale(1.1);
  }
  
  .button {
    margin-top: 10px;
  }
  
  @media only screen and (max-width: 701px) {
    .product-card {
      flex: 1 1 100%;
    }
  }
  </style>
  