<template>
  <!-- AboutSection -->
  <!-- Header Section -->
  <header class="header">
    <h1>About Us</h1>
    <p>Learn more about our journey, values, and the people behind the brand.</p>
  </header>

  <!-- Introduction Section -->
  <section class="content">
    <h2 class="titles">Our Story</h2>
    <p class="statement">
      Founded in 2022, our company was born from a deep passion to create something truly unique and impactful. Our journey began with a simple idea: to offer products that not only stand out for their quality but also make a meaningful difference in people’s lives.
    </p>
    <p class="statement">
      Starting as a small startup with a vision and a dream, we have evolved into a trusted brand known for our dedication to excellence. Through hard work and perseverance, we have built a reputation for delivering high-quality products and providing exceptional customer service that goes above and beyond. Our growth has been fueled by the unwavering support of our loyal customers and our commitment to innovation.
    </p>
    <p class="statement">
      Welcome to a brand that stands at the intersection of creativity, quality, and sustainability. Join us on this exciting journey as we strive to redefine what is possible and make a meaningful difference, one product at a time.
    </p>
    <p class="statement">
      We are deeply committed to sustainability, ensuring that our products are made with eco-friendly materials and practices. Our goal is to contribute positively to the world by offering products that are both beautiful and environmentally responsible. As we continue to grow, we remain focused on pushing boundaries, exploring new ideas, and making a lasting impact on the communities we serve.
    </p>
  </section>

  <!-- Mission, Vision, and Charity Section -->
  <section class="container">
    <div class="row">
      <div class="col-md-4 mt-5 d-flex justify-content-center">
        <div class="card custom-card">
          <div class="card-header">
            <h1 class="title">Our Mission</h1>
          </div>
          <img
            src="https://keirakistensamy.github.io/nodeimages/images/race.jpg"
            class="card-img-top"
            alt="Our Mission"
          />
          <div class="card-body">
            <p class="card-text">
              We craft premium, natural bath bombs that turn daily routines into moments of relaxation and joy. Committed to sustainability, we use eco-friendly ingredients and packaging, ensuring our products benefit both our customers and the planet.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-5 d-flex justify-content-center">
        <div class="card custom-card">
          <div class="card-header">
            <h1 class="title">Our Vision</h1>
          </div>
          <img
            src="https://keirakistensamy.github.io/nodeimages/images/bino.jpg"
            class="card-img-top"
            alt="Our Vision"
          />
          <div class="card-body">
            <p class="card-text">
              To become the world's most loved brand for luxurious, eco-friendly bath products, transforming everyday baths into extraordinary experiences that nurture the mind, body, and soul while championing sustainability and well-being for a better future.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-5 d-flex justify-content-center">
        <div class="card custom-card">
          <div class="card-header">
            <h1 class="title">Charity Giving</h1>
          </div>
          <img
            src="https://keirakistensamy.github.io/nodeimages/images/DSSA-LOGO-.jpg"
            class="card-img-top"
            alt="Charity Giving"
          />
          <div class="card-body">
            <p class="card-text">
              At AromaBombs, we believe in giving back. 10% of every purchase is donated to the
              <a href="https://www.derma.co.za/" target="_blank">Dermatology Society of South Africa</a>. Your support helps fund critical research. Together we can promote better skin health and a healthier future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <div class="benefits-container">
    <h2 class="title">Why Choose Our Products?</h2>
    <h4 class="subtitle">Because...</h4>
    <p><span class="bold">Relaxation:</span> Bath bombs often contain soothing essential oils and fragrances that can help to relax your mind and body.</p>
    <p><span class="bold">Skin Moisturization:</span> Many bath bombs include ingredients like shea butter or coconut oil that moisturize and nourish the skin, leaving it soft and hydrated.</p>
    <p><span class="bold">Aromatherapy:</span> The scents from bath bombs can promote emotional well-being, reduce stress, and uplift your mood through aromatherapy.</p>
    <p><span class="bold">Muscle Relief:</span> Ingredients like Epsom salts in some bath bombs can help to relieve sore muscles and tension.</p>
    <p><span class="bold">Detoxification:</span> Bath bombs with detoxifying ingredients like charcoal or clay can help to draw out impurities from the skin.</p>
    <p><span class="bold">Fun and Enjoyment:</span> The fizzing and colorful effects of bath bombs add an element of fun and visual appeal to your bath.</p>
    <p><span class="bold">Improved Circulation:</span> Warm baths, enhanced by bath bombs, can help to improve blood circulation and promote relaxation.</p>
    <p><span class="bold">Customizable Experience:</span> Bath bombs come in various formulations, allowing you to choose ones that cater to your specific skin needs or preferences.</p>
    <p><span class="bold">Skin Exfoliation:</span> Some bath bombs include exfoliating ingredients that help to slough off dead skin cells, leaving your skin smoother.</p>
    <p><span class="bold">Mood Enhancement:</span> The overall sensory experience of using a bath bomb—combining sight, smell, and touch—can boost your mood and create a spa-like ambiance at home.</p>
    <a href="./products"><button class="btn btn-success">Get Fizzy →!</button></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  font-family: "Raleway", sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
}

.btn {
  display: flex;
  justify-content: center;
}

.header {
  background-image: url("https://keirakistensamy.github.io/nodeimages/images/hanna-postova-oha7AANDiL8-unsplash.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
  position: relative;
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}
.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.header h1,
.header p {
  position: relative;
  z-index: 2;
  animation: slideInDown 1.2s ease forwards;
}

.content {
  text-align: center;
  opacity: 0;
  animation: fadeInUp 1.5s ease-in-out forwards 1s;
}
.titles {
  font-family: "Island Moments", cursive;
  font-weight: 1000;
  font-size: 3rem;
  margin-bottom: 20px;
}
.statement {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.custom-card {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.5s ease-in-out forwards;
}
.custom-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
}

.subtitle {
  font-size: 1.5rem;
  color: #a04d4d;
  margin-bottom: 20px;
  font-weight: bold;
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-card:nth-child(1) {
  animation-delay: 0.6s;
}
.custom-card:nth-child(2) {
  animation-delay: 0.8s;
}
.custom-card:nth-child(3) {
  animation-delay: 1s;
}

.benefits-container {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
  background-color: #c9dadf;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards 1.5s;
}
.benefits-container h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}
.benefits-container p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 10px;
}
.benefits-container p::before {
  content: '✓';
  color: #27ae60;
  margin-right: 10px;
}
.bold {
  font-weight: bold;
}

</style>
