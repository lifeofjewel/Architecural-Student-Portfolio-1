import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing Three.js Scene...");
  createThreeScene("#model2", "./3DModels/project2/hundun_central.obj");
  createThreeScene("#model3", "./3DModels/project2/assignment2closedobj.obj");
  createThreeScene("#model4", "./3DModels/Project2/assignment2pavilion.obj")
});

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>


    <section id="projects">
      <!-- DSGN 313: Cadavre Exquis -->
      <div id="project-row">
        <h2>DSGN 313: Cadavre Exquis</h2>
        <div class="model1">
          <a href="./pages/citations.html">
            <img src="./Project 3/DSGN313_W25_Law-Julia_A1_Cadavre-Exquis.png" id="image1" class="swipe-image" alt="Image 1">
            <img src="./Project 3/DSGN313_W25_Law-Julia_A1_Tagged-Image.png" id="image2" class="swipe-image" alt="Image 2">
          </a>
          <div class="swipe-controls">
            <button id="prev" class="swipe-button">Prev</button>
            <button id="next" class="swipe-button">Next</button>
          </div>
          <h4 id="description">
            In a society that has become almost entirely globalized, how can we embrace all cultures and their expressions? 
            Is there a way to create a built environment that acts as a representation of collaboration between varying global aesthetics? 
            Questions like this inspire me.
          </h4>
        </div>
      </div>

      <!-- DSGN 313: Interop -->
      <div id="project-row">
        <h2>DSGN 313: Interop</h2>
         <div id="imagesinterop">
    <img src="./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck.png" id="image3" class="swipe-image" alt="Image 3">
    <img src="./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck2.png" id="image4" class="swipe-image" alt="Image 4">
    <img src="./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck3.png" id="image5" class="swipe-image" alt="Image 5">
    <img src="./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck4.png" id="image6" class="swipe-image" alt="Image 6">
    <img src="./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck5.png" id="image7" class="swipe-image" alt="Image 7">
    <img src="./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck6.png" id="image8" class="swipe-image" alt="Image 8">
    <img src="./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck7.png" id="image9" class="swipe-image" alt="Image 9">
         <div class="swipe-controls">
          <button id="prev-interop" class="swipe-button">Prev</button>
          <button id="next-interop" class="swipe-button">Next</button>
        </div>
      <div>
          <h4 id="description">A project detailing "Hundun", a little legend from Riot Games' League of Legends: Teamfight Tactics.</h4>
        </div>
      </div>

      <div id="project-row">
        <h2>DSGN 313: Identification Ring</h2>
       <div id="imagesring">
          <img src="./Project 3/Presentation.png" id="image8" class="swipe-image" alt="Image 8">
          <img src="./Project 3/Presentation2.png" id="image9" class="swipe-image" alt="Image 9">
          <img src="./Project 3/Presentation3.png" id="image10" class="swipe-image" alt="Image 10">
          <img src="./Project 3/Presentation5.png" id="image11" class="swipe-image" alt="Image 11">
          <img src="./Project 3/Presentation7.png" id="image12" class="swipe-image" alt="Image 12">
          <div class="swipe-controls">
            <button id="prev-ring" class="swipe-button">Prev</button>
            <button id="next-ring" class="swipe-button">Next</button>
          </div>
          <h4 id="description">
           How do we stand out from one another in a world that coexists with art? Is there a way to stand out? This ring is an example of an identifying device for the universe within A1.
          </h4>
        </div>
      </div>

       <div id="project-row">
        <h2>DSGN 313: Divine Axis</h2>
       <div id="imagesaxis">
          <img src="./A4/1.png" id="image13" class="swipe-image" alt="Image 8">
          <img src="./A4/2.png" id="image14" class="swipe-image" alt="Image 9">
          <img src="./A4/3.png" id="image15" class="swipe-image" alt="Image 10">
          <img src="./A4/4.png" id="image16" class="swipe-image" alt="Image 11">
          <img src="./A4/5.png" id="image17" class="swipe-image" alt="Image 12">
          <img src="./A4/6.png" id="image18" class="swipe-image" alt="Image 8">
          <img src="./A4/7.png" id="image19" class="swipe-image" alt="Image 9">
          <img src="./A4/8.png" id="image20" class="swipe-image" alt="Image 10">
          <img src="./A4/9.png" id="image21" class="swipe-image" alt="Image 11">
          <img src="./A4/10.png" id="image22" class="swipe-image" alt="Image 12">
          <img src="./A4/11.png" id="image23" class="swipe-image" alt="Image 9">
          <img src="./A4/12.png" id="image24" class="swipe-image" alt="Image 10">
          <img src="./A4/13.png" id="image25" class="swipe-image" alt="Image 11">
          <img src="./A4/14.png" id="image26" class="swipe-image" alt="Image 8">
          <img src="./A4/15.png" id="image27" class="swipe-image" alt="Image 12">
          <img src="./A4/16.png" id="image28" class="swipe-image" alt="Image 8">
          <img src="./A4/17.png" id="image29" class="swipe-image" alt="Image 9">
          <img src="./A4/18.png" id="image30" class="swipe-image" alt="Image 10">
          <img src="./A4/19.png" id="image31" class="swipe-image" alt="Image 11">


          <div class="swipe-controls">
            <button id="prev-axis" class="swipe-button">Prev</button>
            <button id="next-axis" class="swipe-button">Next</button>
          </div>
          <h4 id="description">
          The world is a diverse place. Varying beliefs, religions, values, perspectives, they all create the unique environment that we know and love about the world. What if there was a place that celebrated this diversity and provided all with a gathering area? Divine Axis does that, taking reference from varying architectural and art styles to create one cohesive place.
          </h4>
        </div>
      </div>

      <div id="project-row">
        <h2>DSGN 313: Metaverse</h2>
       <div id="imagesmeta">
          <img src="./A5/1.png" id="image32" class="swipe-image" alt="Image 8">
          <img src="./A5/2.png" id="image33" class="swipe-image" alt="Image 9">
          <img src="./A5/3.png" id="image34" class="swipe-image" alt="Image 10">
          <img src="./A5/4.png" id="image35" class="swipe-image" alt="Image 11">
          <img src="./A5/5.png" id="image36" class="swipe-image" alt="Image 12">
          <img src="./A5/6.png" id="image37" class="swipe-image" alt="Image 8">
          <img src="./A5/7.png" id="image38" class="swipe-image" alt="Image 9">
          <img src="./A5/8.png" id="image39" class="swipe-image" alt="Image 10">
          <img src="./A5/9.png" id="image40" class="swipe-image" alt="Image 11">
          <img src="./A5/10.png" id="image41" class="swipe-image" alt="Image 12">
          <img src="./A5/11.png" id="image42" class="swipe-image" alt="Image 9">
          <img src="./A5/12.png" id="image43" class="swipe-image" alt="Image 10">
          <img src="./A5/13.png" id="image44" class="swipe-image" alt="Image 11">

          <div class="swipe-controls">
            <button id="prev-meta" class="swipe-button">Prev</button>
            <button id="next-meta" class="swipe-button">Next</button>
          </div>
          <h4 id="description">
          A unique and browseable portfolio in video game format, picturing all the previously listed projects in a garden format.
          </h4>
        </div>
      </div>



      <ul id="footer-items">
        <li>Email: ${data.contact.email}</li>
        <li>Phone: ${data.contact.phone}</li>
        <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
        <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
      </ul>

    </section>
  </main>
`;


let currentImageIndex = 0;
const images = document.querySelectorAll(".swipe-image");

function showImage(index) {
  images.forEach((image, idx) => {
    image.style.display = idx === index ? "block" : "none"; // Show the current image, hide others
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Loop to the first image
  showImage(currentImageIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Loop to the last image
  showImage(currentImageIndex);
});

// Show the first image initially
showImage(currentImageIndex);

let currentImageIndexInterop = 0;
const imagesInterop = document.querySelectorAll("#imagesinterop .swipe-image"); // Updated selector

function showImageInterop(index) {
  console.log("Showing image at index: ", index);  // Debugging: Check the index
  imagesInterop.forEach((image, idx) => {
    image.style.display = idx === index ? "block" : "none"; // Show the current image, hide others
  });
}

document.getElementById("next-interop").addEventListener("click", () => {
  currentImageIndexInterop = (currentImageIndexInterop + 1) % imagesInterop.length;
  showImageInterop(currentImageIndexInterop);
});

document.getElementById("prev-interop").addEventListener("click", () => {
  currentImageIndexInterop = (currentImageIndexInterop - 1 + imagesInterop.length) % imagesInterop.length;
  showImageInterop(currentImageIndexInterop);
});

// Show the first image initially for Interop section
showImageInterop(currentImageIndexInterop);

let currentImageIndexRing = 0;
const imagesRing = document.querySelectorAll("#imagesring .swipe-image");

function showImageRing(index) {
  imagesRing.forEach((image, idx) => {
    image.style.display = idx === index ? "block" : "none";
  });
}

document.getElementById("next-ring").addEventListener("click", () => {
  currentImageIndexRing = (currentImageIndexRing + 1) % imagesRing.length;
  showImageRing(currentImageIndexRing);
});

document.getElementById("prev-ring").addEventListener("click", () => {
  currentImageIndexRing = (currentImageIndexRing - 1 + imagesRing.length) % imagesRing.length;
  showImageRing(currentImageIndexRing);
});

// Show the first image initially
showImageRing(currentImageIndexRing);

let currentImageIndexAxis = 0;
const imagesAxis = document.querySelectorAll("#imagesaxis .swipe-image");

function showImageAxis(index) {
  imagesAxis.forEach((image, idx) => {
    image.style.display = idx === index ? "block" : "none";
  });
}

document.getElementById("next-axis").addEventListener("click", () => {
  currentImageIndexAxis = (currentImageIndexAxis + 1) % imagesAxis.length;
  showImageAxis(currentImageIndexAxis);
});

document.getElementById("prev-axis").addEventListener("click", () => {
  currentImageIndexAxis = (currentImageIndexAxis - 1 + imagesAxis.length) % imagesAxis.length;
  showImageAxis(currentImageIndexAxis);
});

// Show the first image initially
showImageAxis(currentImageIndexAxis);

let currentImageIndexMeta = 0;
const imagesMeta = document.querySelectorAll("#imagesmeta .swipe-image");

function showImageMeta(index) {
  imagesMeta.forEach((image, idx) => {
    image.style.display = idx === index ? "block" : "none";
  });
}

document.getElementById("next-meta").addEventListener("click", () => {
  currentImageIndexMeta = (currentImageIndexMeta + 1) % imagesMeta.length;
  showImageMeta(currentImageIndexMeta);
});

document.getElementById("prev-meta").addEventListener("click", () => {
  currentImageIndexMeta = (currentImageIndexMeta - 1 + imagesMeta.length) % imagesMeta.length;
  showImageMeta(currentImageIndexMeta);
});

// Show the first image initially
showImageMeta(currentImageIndexMeta);



