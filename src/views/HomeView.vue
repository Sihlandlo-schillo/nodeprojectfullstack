<template>

  <div class="hero-section" id="home">
      <div class="hero-text">
          <h1>Welcome to AromaBombs</h1>
          <p class="p">Experience the ultimate relaxation with our handcrafted, all-natural bath bombs. Unwind, rejuvenate, and treat yourself to a spa-like experience at home.</p>
          <a href="./about" class="btn btn-primary">See more</a>
      </div> 
  </div>
  <body>
    <div>
      <h2 class="title m-5">Our best sellers</h2>
    </div>
  <div class="list button ">
  <div class="item"><a href="./products" target="_blank"><img src="https://keirakistensamy.github.io/nodeimages/images/bathbomb5.png" width="40" height="40" loading="lazy"/></a><p>Pink Jewel</p></div>
  <div class="item"><a href="./products" target="_blank"><img src="https://keirakistensamy.github.io/nodeimages/images/bathbomb10.png" width="40" height="40" loading="lazy"/></a><p>Barbie Girl</p></div>
  <div class="item"><a href="./products" target="_blank"><img src="https://keirakistensamy.github.io/nodeimages/images/bathbomb3.png" width="40" height="40" loading="lazy"/></a><p>Black Rose</p></div>
  <div class="item"><a href="./products" target="_blank"><img src="https://keirakistensamy.github.io/nodeimages/images/bathbomb7.png" width="40" height="40" loading="lazy"/></a><p>Teddy Bear</p></div>
  <div class="item"><a href="./products" target="_blank"><img src="https://keirakistensamy.github.io/nodeimages/images/bathbomb8.png" width="40" height="40" loading="lazy"/></a><p>Fairy Magic</p></div>
  </div>
  <div class="button">
  <button style="background-color: #28a745; color: white; border: none; padding: 10px 20px; font-size: 1rem; margin: 2rem; transition: background-color 0.3s ease;">
    <a href="./Products" style="color: white; text-decoration: none;">Go to Products</a>
  </button>
</div>

</body>

</template>

<script setup> 

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(29, 29, 29);
}
.slider_container {
  position: relative;
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}
.slider {
  position: relative;
  width: 400%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  animation: 30s cubic-bezier(1, 0.95, 0.565, 1) sliding infinite;
}
.slide {
  position: relative;
  min-width: 100%;
  height: 100%;
}
.slide img {
  width: 100%;
  height: 100%;
}
.slide .caption {
  position: absolute;
  left: 0;
  bottom: 5%;
  font-size: 5rem;
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  background: rgba(0, 0, 0, 0.348);
  backdrop-filter: blur(10px);
  padding: 1rem 5rem;
  border-radius: 0 2rem 2rem 0;
}
.slide.one {
  background: rgb(182, 19, 109);
}
.slide.two {
  background: rgb(255, 64, 64);
}
.slide.three {
  background: rgb(11, 173, 188);
}
.slide.four {
  background: rgb(11, 188, 14);
}
.slide.five {
  background: rgb(173, 11, 188);
}
@keyframes sliding {
  0% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(-100%);
  }
  45% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-200%);
  }
  70% {
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-300%);
  }
  95% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-400%);
  }
}


.title {
  font-family: "Island Moments", cursive;
  font-weight: 1000;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
}
.button{
  color: #0f4791;
  display: flex;
  justify-content: center;
  background-color: #bbcde4;

}
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: transparent; }
}

.hero-text h1, .hero-text p {
  overflow: hidden; 
  font-family: 'Times New Roman', Times, serif;
  white-space: nowrap; 
  border-right: .15em solid transparent;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  color: #000;
}

.hero-text p {
  font-size: 2.5rem;
  animation: typing 4.5s steps(80, end) 0.5s forwards, blink-caret 0.75s step-end infinite;
}


.hero-section {
  height: 100vh;
  background-image: url('https://keirakistensamy.github.io/nodeimages/images/slide4.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: zoomIn 10s ease-in-out infinite;
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}


.hero-text h1 {
  font-size: 3rem;
  font-weight: 700;
  animation: rotateText 10s infinite linear;
}

@keyframes rotateText {
  0%, 20% { content: "Welcome to AromaBombs"; }
  40%, 60% { content: "Relax, Unwind, Rejuvenate"; }
  80%, 100% { content: "Treat Yourself Today"; }
}


.hero-text p {
  font-size: 1.3rem;
  margin-top: 20px;
}
.hero-text .btn {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 30px;
}

/* Carousel */

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}
.item img {
  align-items: center;
  width: 150px;
  height: 150px;
}
.list .item {
  transition: 0.5s;
  filter: brightness(0.05);
}
.list .item:hover {
  filter: brightness(1);
  transform: translateZ(200px);
}
/* get the second item to the right  */
.list .item:hover + * {
  filter: brightness(0.6);
  transform: translateZ(150px) rotateY(40deg);
}
/* to the right + 1 */
.list .item:hover + * + * {
  filter: brightness(0.4);
  transform: translateZ(70px) rotateY(20deg);
}
/* to the right + 1 + 1 */
.list .item:hover + * + * + * {
  filter: brightness(0.2);
  transform: translateZ(30px) rotateY(10deg);
}
/* to the left  */
.list .item:has(+ *:hover) {
  filter: brightness(0.6);
  transform: translateZ(150px) rotateY(-40deg);
}
/* to the left + 1 */
.list .item:has(+ * + *:hover) {
    filter: brightness(0.4);
    transform: translateZ(70px) rotateY(-20deg);
  }
/* to the left + 1 + 1 */
  .list .item:has(+ * + * + *:hover) {
    filter: brightness(0.2);
    transform: translateZ(30px) rotateY(-10deg);}
  
.banner{
  /* color: white; */
  position: absolute;
  left: 0;
  bottom: 5rem;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  border: none;
  /* border-radius: 50%; */
}
.banner .card{
  background-color: #0f4791;
  /* padding: 2px; */
  border-radius: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .4s;
}
.banner .card img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.banner .card:hover{
  transform: translate(10px);
}



</style>