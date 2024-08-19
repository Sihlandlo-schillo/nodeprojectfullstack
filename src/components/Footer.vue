<template>
    <div class="container-fluid">
        <div class="row">
            <p class="footer lead d-flex justify-content-center sticky-bottom">
                AromaBombs &copy; {{ currentYear }}<span id="currYear"></span>
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

</style>