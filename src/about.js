import locationImg from "./location.jpg"

function createAboutPage() {
  const contentDiv = document.querySelector("#content");

  const homeDesc1 = document.createElement("p");
  homeDesc1.textContent = "Contact Us: +92 364 6369090";
  contentDiv.appendChild(homeDesc1);

  const homeDesc2 = document.createElement("p");
  homeDesc2.textContent = "Address: Acxel Center, Shop No. 17, Rawalpindi, Pakistan";
  contentDiv.appendChild(homeDesc2);

  const homeImg = document.createElement("img");
  homeImg.src = locationImg;
  contentDiv.appendChild(homeImg);
}

export { createAboutPage };