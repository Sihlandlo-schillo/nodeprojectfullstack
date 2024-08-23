<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1 class="title">Contact Us</h1>
    </div>
    <div class="contact-content">
      <div class="contact-form">
        <h2 class="heading">Send Us a Message</h2>

        <form
          action="https://formspree.io/f/movaqpjb"
          method="POST"
          class="formal"
        >
          <div class="form-group">
            <input
              type="text"
              name="Firstname"
              placeholder="Enter your first name"
              autocomplete="off"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              autocomplete="off"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="Email"
              placeholder="Enter your Email Address"
              autocomplete="off"
              required
            />
          </div>
          <div class="input form-group">
            <textarea
              rows="5"
              cols="60"
              name="message"
              placeholder="Enter text"
              autocomplete="off"
              required
            ></textarea>
          </div>
          <div class="form-group d-flex justify-content-around">
            <button class="btn" type="submit">Submit</button>
            <button class="btn" type="reset">Clear</button>
          </div>
        </form>

        <div class="social-media">
          <a href="#" target="_blank">
            <img
              src="https://keirakistensamy.github.io/nodeimages/images/insta.png"
              alt="Instagram"
              class="iconss"
              width="40"
              height="40"
              loading="lazy"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src="https://keirakistensamy.github.io/nodeimages/images/facebook.png"
              alt="Facebook"
              class="iconss"
              width="40"
              height="40"
              loading="lazy"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src="https://keirakistensamy.github.io/nodeimages/images/whatsapp.png"
              alt="WhatsApp"
              class="iconss"
              width="40"
              height="40"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div class="contact-info">
        <h2 class="heading">... or feel free to contact us</h2>
        <p class="calls">Phone: 021 784 2964</p>
        <p class="calls">Email: AromaBombs@gmail.com</p>
        <p class="calls">Address: 135 Main Rd, Claremont, Cape Town, 7708</p>

        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d18.4628609!3d-33.9804774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42d1bd2aa6f7%3A0xfc3fb30472567911!2s135+Main+Rd%2C+Claremont%2C+Cape+Town%2C+7708!5e0!3m2!1sen!2sza!4v1697696624832!5m2!1sen!2sza"
            width="100%"
            height="350"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>

    <section class="team">
      <div class="d-flex justify-content-center">
        <h2 class="title">Meet the Team</h2>
      </div>

      <div class="row team-content">
        <div class="col-md-6 team-member">
          <img
            src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg"
            alt="Keira Kistensamy"
            class="team-img"
          />
          <h3>Keira Kistensamy</h3>
          <p class="lead">Frontend Developer</p>
          <p>
            Keira specializes in crafting intuitive user interfaces. With a
            background in web design, she ensures that every user interaction
            with our site is seamless.
          </p>
          <div class="row">
            <div class="col-md-6">
              <a
                href="https://github.com/Sihlandlo-schillo/nodeprojectfullstack.git"
                target="_blank"
                ><img
                  src="https://keirakistensamy.github.io/nodeimages/images/211904_social_github_icon.png"
                  alt="WhatsApp"
                  class="iconss"
                  width="40"
                  height="40"
                  loading="lazy"
              /></a>
              <a href="#" target="_blank"
                ><img
                  src="https://keirakistensamy.github.io/nodeimages/images/linkedin2.png"
                  alt="WhatsApp"
                  class="iconss"
                  width="40"
                  height="40"
                  loading="lazy"
              /></a>
            </div>
          </div>
        </div>

        <div class="col-md-6 team-member">
          <img
            src="https://sihlandlo-schillo.github.io/images/images2/Mna.jpg"
            alt="Sihlandlo Makhumsha"
            class="team-img"
          />
          <h3>Sihlandlo Makhumsha</h3>
          <p class="lead">Backend Developer</p>
          <p>
            Sihlandlo is an expert in server-side development. He ensures that
            the backbone of our applications runs smoothly and efficiently.
          </p>
          <div class="row">
            <div class="col-md-6">
              <a
                href="https://github.com/Sihlandlo-schillo/nodeprojectfullstack.git"
                target="_blank"
                ><img
                  src="https://keirakistensamy.github.io/nodeimages/images/211904_social_github_icon.png"
                  alt="WhatsApp"
                  class="iconss"
                  width="40"
                  height="40"
                  loading="lazy"
              /></a>
              <a href="#" target="_blank"
                ><img
                  src="https://keirakistensamy.github.io/nodeimages/images/linkedin2.png"
                  alt="WhatsApp"
                  class="iconss"
                  width="40"
                  height="40"
                  loading="lazy"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* General Styling */
.title {
  font-family: "Island Moments", cursive;
  font-weight: 1000;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}

/* Contact Page Styling */
.contact-page {
  font-family: "Arial", sans-serif;
  color: #333;
  padding: 2rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 5rem;
}

.contact-header h1 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.calls {
  font-family: "Times New Roman", Times, serif;
  display: flex;
  justify-content: center;
}

/* Form Styling */
.contact-form,
.contact-info {
  width: 48%;
  background: #e1def1;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form:hover,
.contact-info:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.heading {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

/* Social Media Icons */
.social-media {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 20px;
}

.iconss {
  width: 40px;
  height: 40px;
  display: block;
}

/* Map Styling */
.contact-map {
  margin-top: 2rem;
  border-radius: 8px;
}

/* Team Section Styling */
.team {
  margin-top: 4rem;
}

.team-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.team-member {
  text-align: center;
  background: #e1def1;
  border-radius: 8px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.team-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 2rem;
}

.team-member h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.team-member p.lead {
  font-size: 1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 1rem;
}

.team-member a {
  color: #007bff;
  text-decoration: none;
}

.team-member a:hover {
  text-decoration: underline;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2rem;
  }

  .contact-form,
  .contact-info {
    flex: 1 1 100%;
  }

  .team-member {
    flex: 1 1 100%;
  }

  .team-img {
    width: 100px;
    height: 100px;
  }
}
</style>
