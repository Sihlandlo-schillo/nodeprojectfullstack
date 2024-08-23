<template>
  <div class="hero-section" id="home">
      <div class="hero-text">
          <h1 class="titles">Welcome to AromaBombs!</h1>
          <p>Experience the ultimate relaxation with our handcrafted, all-natural bath bombs. Unwind, rejuvenate, and treat yourself to a spa-like experience at home.</p>
          <a href="./ProductsView.vue" class="btn btn-primary">Get Fizzy</a>
      </div>
  </div>
  <div>
    <h2 class="title d-flex mb-5">Our best selling products</h2>
    <p class="text d-flex justify-content-center">(put 3 products here)</p>
  </div>
</template>

<script setup> 

</script>

<style scoped>

.title {
  font-family: "Island Moments", cursive;
  font-weight: 1000;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem; 


}

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
  font-size: 4rem;
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



</style>