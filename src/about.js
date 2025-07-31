import locationImg from "./location.jpg"

function createAboutPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = '';

  const homeDesc1 = document.createElement("p");
  homeDesc1.textContent = "Contact Us: +92 364 6369090";
  homeDesc1.className = 'number-text';
  contentDiv.appendChild(homeDesc1);

  const homeDesc2 = document.createElement("p");
  homeDesc2.textContent = "Address: Acxel Center, Shop No. 17, Rawalpindi, Pakistan";
  homeDesc2.className = 'address-text';
  contentDiv.appendChild(homeDesc2);

  const homeImg = document.createElement("img");
  homeImg.src = locationImg;
  homeImg.className = 'location-img';
  contentDiv.appendChild(homeImg);
}

export { createAboutPage };