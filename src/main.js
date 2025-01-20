import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const prj1s = [
  "./DSGN 311/axon details - makeup.jpg",
  "./DSGN 311/Axon Rendered.jpg",
  "./DSGN 311/axon details - outlet.jpg",
  "./DSGN 311/render for the first page.jpg",
];

const prj2s = [
  "./treeDrawings/ecological plan 1to5000.png",
  "./treeDrawings/ecological plan 1to10000.png",
  "./treeDrawings/Julia - Mind Map.jpg",
  "./treeDrawings/process - final slide.png",
];

const prj3mains = [
  "./Project 3/DSGN313_W25_Law-Julia_A1_Cadavre-Exquis.png",
];

const prj3s = [
  {src: "./Project 3/711.jpg", link: "https://ca.pinterest.com/pin/4151824649661392/" },
  {src:  "./Project 3/Art.jpg", link: "https://ca.pinterest.com/pin/68746248594/" },
 {src: "./Project 3/Church.jpg", link: "https://ca.pinterest.com/pin/9710955441180270/" },
 {src: "./Project 3/Scale Figure.jpg", link: "https://ca.pinterest.com/pin/70437489460469/"},
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <div id="hello-modal">
      <div id="modal-content">
        <span id="close-modal">&times;</span>
        <h2>Hello! My name is Julia. Welcome to my Portfolio.</h2>
      </div>
    </div>

    <section id="projects">
      <div id="project-row">
        DSGN 313: Cadavre Exquis
        <div class="model1">
          <a href="/src/citations.html">
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
            ${prj3s
              .map(
                (prj3, index) => `
                  <a href="${prj3.link}" target="_blank">
                    <img src="${prj3.src}" alt="prj3${index + 1}" />
                  </a>
                `
              )
              .join("")}
          </div>
          <h4 id="description">
            In a society that has become almost entirely globalized, how can we embrace all cultures and their expressions? Is there a way to create a built environment that acts as a representation of collaboration between varying global aesthetics? Can we see the extruded cantilevers of Oriental roofs and the intricate patterning of Gothic architecture within the same street?
Questions like this inspire me, leading me to imagine a world in which these expressions of culture come together in the form of one cohesive environment. The cohesion does not just end at the production of varying built forms but instead continues to the inclusion of art, adding colour to the streets and environment. Personally, this idea inspires me, motivating decision making practices that allow for the inclusion of various cultural expressions. In a broad scope, this concept makes me want to travel the world, seeing these different ideas in their true flesh. In a smaller scale, this imaginative process inspires design choices in work, an appreciation of global culture, and the desire to invite all different sorts of expression into my day to day.
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



window.onload = () => {
  // Show modal when the page loads
  const modal = document.getElementById("hello-modal");
  const closeModal = document.getElementById("close-modal");

  modal.style.display = "flex"; // Show the modal

  closeModal.onclick = () => {
    modal.style.display = "none"; // Hide the modal when close button is clicked
  }

  // Close the modal if user clicks outside of the modal content
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // Hide modal if outside area is clicked
    }
  }
};


// Create three.js scenes for each
// // createThreeScene("#model1", "/3DModels/project1/cube.obj");
// createThreeScene("#model2", "/3DModels/project2/tree.obj");
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