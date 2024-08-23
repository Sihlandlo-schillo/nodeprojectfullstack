<template>
  
  <nav class="navbar navbar-expand-lg sticky-top" style="background-color: #343a40; font-family: 'Raleway', sans-serif;">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <!-- my carousel on AboutView comes from https://codepen.io/freeplayg/pen/dyEeevX -->
     
    <div class="container-fluid">
        <a class="navbar-brand" href="#" style="color: #F8F9FA;">Aroma Bombs</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><router-link class="nav-link active" to="/" style="color: #F8F9FA;">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/about" style="color: #F8F9FA;">About</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/products" style="color: #F8F9FA;">Products</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/admin" style="color: #F8F9FA;">Admin</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/ContactUs" style="color: #F8F9FA;">Contact Us</router-link></li>
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

.navbar {
    background-color: #343a40; /* Dark background for the navbar */
}

.navbar-brand {
    color: #F8F9FA; /* Light color for the brand name */
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar-nav .nav-link {
    color: #D3D3D3; /* Light gray for normal links */
    font-size: 1.1rem;
    padding: 10px 20px;
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
    color: #FFFFFF; /* White color on hover */
}

.navbar-nav .nav-link.active {
    color: #F8F9FA; /* Slightly lighter color for the active link */
}

.navbar-toggler {
    border-color: #FFFFFF; /* White border for the toggler */
}

.navbar-toggler-icon {
    background-color: #FFFFFF; /* White toggler icon */
}

.collapse.navbar-collapse {
    justify-content: center; /* Center the navbar items */
}


</style>