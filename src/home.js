import karahiImg from "./lamb-karahi.jpg";

function createHomePage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = '';

  const homeDesc1 = document.createElement("p");
  homeDesc1.textContent = "The Best Karahi in Town.";
  homeDesc1.className = 'best-text';
  contentDiv.appendChild(homeDesc1);

  const homeDesc2 = document.createElement("p");
  homeDesc2.textContent = "Made with Love & Taste since 1972.";
  homeDesc2.className = 'love-text';
  contentDiv.appendChild(homeDesc2);

  const homeImg = document.createElement("img");
  homeImg.src = karahiImg;
  homeImg.className = 'home-img';
  contentDiv.appendChild(homeImg);

  const homeDesc3 = document.createElement("p");
  homeDesc3.textContent = "Visit Us Today!";
  homeDesc3.className = 'visit-text';
  contentDiv.appendChild(homeDesc3);
}

export { createHomePage };
