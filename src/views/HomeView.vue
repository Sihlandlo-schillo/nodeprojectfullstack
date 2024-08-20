<template>
  <div class="hero-section" id="home">
      <div class="hero-text">
          <h1>Welcome to Your AromaBombs</h1>
          <p>Experience the ultimate relaxation with our handcrafted, all-natural bath bombs. Unwind, rejuvenate, and treat yourself to a spa-like experience at home.</p>
          <a href="./ProductsView.vue" class="btn btn-primary">Get Fizzy</a>
      </div>

      <!-- <div class="recent">
        <Card v-for="(product, index) in products" :key="index">
          <template #cardHeader>
            <img :src="product.productUrl" :alt="product.productName" >
          </template>
          <template #cardBody>
            
          </template>
        </Card>
      </div> -->
  </div>



</template>

<script setup> 

</script>

<style scoped>
.hero-section {
  height: 100vh;
  background-image: url('https://keirakistensamy.github.io/nodeimages/images/idk.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero-text h1 {
  font-size: 2rem;
  font-weight: 700;
}
.hero-text p {
  font-size: 1rem;
  margin-top: 20px;
}
.hero-text .btn {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 30px;
}

/* Carousel */



</style>