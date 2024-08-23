<template>
    <div class="container-fluid">
        <div class="row">
            <p class="footer lead d-flex justify-content-center">
                AromaBombs &copy; {{ currentYear }}. All rights reserved<span id="currYear"></span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
          return {
              currentYear: new Date().getUTCFullYear()
  
          }
      },
      mounted() {
  
      }
}
</script>

<style scoped>

.container-fluid {
    display: flex;
    flex-direction: column;
    /* min-height: 100vh; */
}
.footer-row {
    margin-top: auto; /* Pushes footer to the bottom of the page */
}
.footer {
    background-color: #FFFFFF; /* Example background color */
    padding: 10px;
    text-align: center;
    border-top: 2px solid #E0E0E0; /* Example border color */
}


</style>

