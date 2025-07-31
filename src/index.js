import "./style.css";

// Import other modules and Assets below this
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createAboutPage } from "./about"

// Code handling button event listeners
createHomePage();

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', (e) => {
  createHomePage();
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', (e) => {
  createMenuPage();
});

const contactBtn= document.querySelector('.contact-btn');
contactBtn.addEventListener('click', (e) => {
  createAboutPage();
});