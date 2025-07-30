import karahiImg from "./lamb-karahi.jpg";

function createHomePage() {
  const contentDiv = document.querySelector("#content");

  const homeDesc1 = document.createElement("p");
  homeDesc1.textContent = "The Best Karahi in Town.";
  contentDiv.appendChild(homeDesc1);

  const homeDesc2 = document.createElement("p");
  homeDesc2.textContent = "Made with Love & Taste since 1972.";
  contentDiv.appendChild(homeDesc2);

  const homeImg = document.createElement("img");
  homeImg.src = karahiImg;
  contentDiv.appendChild(homeImg);

  const homeDesc3 = document.createElement("p");
  homeDesc3.textContent = "Visit Us Today!";
  contentDiv.appendChild(homeDesc3);
}

export { createHomePage };
