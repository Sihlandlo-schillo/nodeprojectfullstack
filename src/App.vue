<template>

  <div class="wrapper">
      <NavBar/>
    <main>
      <router-view/>
    </main>
    <div id="app">
      <RecentProducts />
    </div>
      <Footer/>
  
  </div>
  
  </template>
  
  <script>
  import NavBar from './components/NavBar'
  import Footer from '@/components/Footer.vue'
  
  export default {
    components: {
      NavBar,
      Footer
    },
  }
  
  </script>
  
  <style>
  
  </style>
  