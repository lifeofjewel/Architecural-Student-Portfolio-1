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
  "./Project 3/711.jpg",
  "./Project 3/Art.jpg",
  "./Project 3/Church.jpg",
  "./Project 3/Scale Figure.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      DSGN 311: The Sharpest Corset
        <div class="three-model">
          <div id="model1"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${prj1s
              .map(
                (prj1, index) => `<img src="${prj1}" alt="prj1${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A modelling and then animation project based around combining the words "hazardous" and "delicate".</h4>
        </div>
      </div>

      <div id="project-row">
      DSGN 303: Eco Flow Park
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${prj2s
              .map(
                (prj2, index) =>
                  `<img src="${prj2}" alt="prj2${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">An ecological restoration project in the Inglewood-Ogden trainyard located in Calgary, Alberta.</h4>
        </div>
      </div>

      <div id="project-row">
      DSGN 313: Cadavre Exquis
        <div class="three-model">
          <div id="images"></div>
          ${prj3mains
            .map(
              (prj3main, index) => `<img src="${prj3}" alt="prj3${index + 1}" />`
            )
            .join ("")
            }
          }
        </div>
        <div id="images-description">
          <div id="images">
            ${prj3s
              .map(
                (prj3, index) => `<img src="${prj3}" alt="prj1${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Inspired by a personal appreciation for the blending of global art and culture in the built environment, this collage curates a "ideal" street filled with building aesthetics from around the world mixed with varying art styles.</h4>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
