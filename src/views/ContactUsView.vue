<template>
  
  <section class="container ContactMe-Container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="Enter your name and surname" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" placeholder="Enter your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="message" rows="5" placeholder="State your query..." required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                    <button type="reset">Clear</button>
                </form>
            </div>
    </div>
    </div>
</section>
<!-- Location and Social Media Section -->
<section class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="location">
                <h2>Our Location</h2>
                <p>1234 Bath Bomb Lane, Relaxation City, Wellness State, 12345</p>
                <p>Email: Bombsaway@gmail.com</p>
                <p>Phone: (+27)56 789 4657</p>
            </div>
        </div>
        <div class="col-md-6">
        <div class="map-container" style="text-align: center;">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509431!2d144.9630579153182!3d-37.81627967975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b7eaba89a1f!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1597890345194!5m2!1sen!2sau" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    </div>
    </div>
</section>

</template>

<script>
export default {

}
</script>

<style scoped>

.form-group {
    margin-bottom: 20px; /* Add space between each form group */
}
button[type="submit"] {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
button[type="submit"]:hover {
    background-color: #555;
}
.location {
    padding: 40px 20px;
    background-color: #333;
    color: white;
    border-radius: 10px;
    margin-top: 20px;
}
.location h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}
.location p {
    font-size: 1rem;
}
.social-icons {
    margin-top: 20px;
}
.social-icons a {
    color: white;
    margin-right: 15px;
    font-size: 1.5rem;
    text-decoration: none;
}
.social-icons a:hover {
    color: #aaa;
}
#map {
    height: 300px;
    width: 300px;
}

</style>