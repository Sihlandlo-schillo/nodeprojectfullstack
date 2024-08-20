<template>
  
  <nav class="navbar navbar-expand-lg sticky-top" style="background-color: transparent; font-family: 'Raleway', sans-serif;">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet">
    <link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color: black;">Aroma Bombs</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="Home" style="color: black;">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="About" style="color: black;">About</a></li>
          <li class="nav-item"><a class="nav-link" href="Products" style="color: black;">Products</a></li>
          <li class="nav-item"><a class="nav-link" href="Admin" style="color: black;">Admin</a></li>
          <li class="nav-item"><a class="nav-link" href="ContactUs" style="color: black;">Contact Us</a></li>
        </ul>
      </div>
    </div>
</nav>

</template>

<script>
export default {
    name: 'NavBarComp'
}
</script>

<style>

/* Navbar */
  /* .navbar {
    background-color: #A8C3DD; Dark background
  } */
  .navbar-brand {
    color: #FFFFFF; /* White brand text */
    font-size: 1.5rem;
    font-weight: bold;
  }
  .navbar-nav .nav-link {
    color: #D3D3D3; /* Light gray links */
    font-size: 1.1rem;
    padding: 10px 20px;
    transition: color 0.3s ease;
  }
  .navbar-nav .nav-link:hover {
    color: #FFFFFF; /* White on hover */
  }
  .navbar-nav .nav-link.active {
    color: #F8F9FA; /* Slightly lighter gray for active link */
    /* font-weight: bold; */
  }
  .navbar-toggler {
    border-color: #FFFFFF; /* White border for toggler */
  }
  .navbar-toggler-icon {
    background-color: #FFFFFF; /* White toggler icon */
  }
  .collapse.navbar-collapse {
    justify-content: center; /* Center the navbar items */
  }

</style>