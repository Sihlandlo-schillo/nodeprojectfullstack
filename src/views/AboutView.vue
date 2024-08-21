<template>
  <!-- AboutSection -->
  <!-- Header Section -->
  <header class="header">
    <h1>About Us</h1>
    <p>
      Learn more about our journey, values, and the people behind the brand.
    </p>
  </header>
  <!-- Introduction Section -->
  <section class="content d-grid justify-content-center">
    <h2 class="titles">Our Story</h2>
    <p class="statement d-grid justify-content-center">
      Founded in 2022, our company was born from a deep passion to create
      something truly unique and impactful. Our journey began with a simple
      idea: to offer products that not only stand out for their quality but also
      make a meaningful difference in people’s lives.
    </p>
    <p class="statement d-grid justify-content-center">
      Starting as a small startup with a vision and a dream, we have evolved
      into a trusted brand known for our dedication to excellence. Through hard
      work and perseverance, we have built a reputation for delivering
      high-quality products and providing exceptional customer service that goes
      above and beyond. Our growth has been fueled by the unwavering support of
      our loyal customers and our commitment to innovation.
    </p>
    <p class="statement d-grid justify-content-center">
      Welcome to a brand that stands at the intersection of creativity, quality,
      and sustainability. Join us on this exciting journey as we strive to
      redefine what is possible and make a meaningful difference, one product at
      a time.
    </p>
    <p class="statement d-grid justify-content-center">
      We are deeply committed to sustainability, ensuring that our products are
      made with eco-friendly materials and practices. Our goal is to contribute
      positively to the world by offering products that are both beautiful and
      environmentally responsible. As we continue to grow, we remain focused on
      pushing boundaries, exploring new ideas, and making a lasting impact on
      the communities we serve.
    </p>
  </section>
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
            alt="logo"
          />
          <div class="card-body">
            <p class="card-text">
              We craft premium, natural bath bombs that turn daily routines into
              moments of relaxation and joy. Committed to sustainability, we use
              eco-friendly ingredients and packaging, ensuring our products
              benefit both our customers and the planet.
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
            alt="logo"
          />
          <div class="card-body">
            <p class="card-text">
              To become the world's most loved brand for luxurious, eco-friendly
              bath products, transforming everyday baths into extraordinary
              experiences that nurture the mind, body, and soul while
              championing sustainability and well-being for a better future.
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
            alt="logo"
          />
          <div class="card-body">
            <p class="card-text">
              At AromaBombs, we believe in giving back. 10% of every purchase is
              donated to the
              <a href="https://www.derma.co.za/" target="_blank"
                >Dermatology Society of South Africa</a
              >. Your support helps fund critical research. Together we can
              promote better skin health and a healthier future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {};
</script>

<style>
body {
  font-family: "Raleway", sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Custom styles for cards */
.custom-card {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.1s ease forwards;
}

.custom-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Title styles */
.title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

/* Image styles */
.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Animation for cards */
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

/* Staggering animations */
.custom-card:nth-child(1) {
  animation-delay: 0.1s;
}
.custom-card:nth-child(2) {
  animation-delay: 0.2s;
}
.custom-card:nth-child(3) {
  animation-delay: 0.3s;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Island Moments", cursive;
  font-weight: 1000;
  font-style: normal;
  font-size: 50px;
}
.header {
  background-image: url("https://keirakistensamy.github.io/nodeimages/images/hanna-postova-oha7AANDiL8-unsplash.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
  position: relative;
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
}
.content {
  padding: 40px;
}
.titles {
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: "Island Moments", cursive;
  font-weight: 1000;
  font-style: normal;
  font-size: 75px;
}
.statement {
  display: flex;
  text-align: center;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
