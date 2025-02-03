import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const prj1s = [
  "./DSGN 311/axon details - makeup.jpg",
  "./DSGN 311/Axon Rendered.jpg",
  "./DSGN 311/axon details - outlet.jpg",
  "./DSGN 311/render for the first page.jpg",
];

const prj2s = [
  "./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck",
  "./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck2",
  "./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck3",
  "./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck4",
  "./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck5",
  "./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck6",
  "./treeDrawings/DSGN313_W25_Law-Julia_A2_SlideDeck7",
];

const prj3s = [
  { src: "./Project 3/711.jpg", link: "https://ca.pinterest.com/pin/4151824649661392/" },
  { src: "./Project 3/Art.jpg", link: "https://ca.pinterest.com/pin/68746248594/" },
  { src: "./Project 3/Church.jpg", link: "https://ca.pinterest.com/pin/9710955441180270/" },
  { src: "./Project 3/Scale Figure.jpg", link: "https://ca.pinterest.com/pin/70437489460469/" },
];


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
        </div>
        <div id="images-description">
          <div id="images">
            ${prj3s.map((prj3, index) => `
              <a href="${prj3.link}" target="_blank">
                <img src="${prj3.src}" alt="prj3${index + 1}" />
              </a>`).join("")}
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
        <div class="three-model">
          <div id="model2"></div>
          <div id="model3"></div>
          <div id="model4"></div>
        </div>
        <div id="images-description">
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





// Create three.js scenes for each
// // createThreeScene("#model1", "/3DModels/project1/cube.obj");
;
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");

//  <div id="project-row">
// DSGN 303: Eco Flow Park
// <div class="three-model">
//   <div id="model2"></div>
// </div>
// <div id="images-description">
//   <div id="images">
//     ${prj2s
//       .map(
//         (prj2, index) =>
//           `<img src="${prj2}" alt="prj2${index + 1}" />`
//       )
//       .join("")}
//   </div>
//   <h4 id="description">An ecological restoration project in the Inglewood-Ogden trainyard located in Calgary, Alberta.</h4>
// </div>
// </div>

// <div id="project-row">
// DSGN 311: The Sharpest Corset
// <div class="three-model">
//   <div id="model3"></div>
// </div>
// <div id="images-description">
//   <div id="images">
//     ${prj1s
//       .map(
//         (prj1, index) => `<img src="${prj1}" alt="prj1${index + 1}" />`
//       )
//       .join("")}
//   </div>
//   <h4 id="description">A modelling and then animation project based around combining the words "hazardous" and "delicate".</h4>
// </div>
// </div>
// </section>
//