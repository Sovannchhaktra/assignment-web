document
  .getElementById("dropdownButton")
  .addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.visibility =
      dropdownMenu.style.visibility === "visible" ? "hidden" : "visible";
    dropdownMenu.style.opacity = dropdownMenu.style.opacity === "1" ? "0" : "1";
  });
window.addEventListener("click", function (event) {
  if (!event.target.matches("#dropdownButton")) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.visibility = "hidden";
    dropdownMenu.style.opacity = "0";
  }
});
function getClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeout = `${hours} : ${minutes} : ${seconds} : ${meridiem}`;
  document.getElementById("clock").innerText = timeout;
}
getClock();
setInterval(getClock, 1000);

const obj = [
  { name: "Tony", price: 10.99, img: "image/1.jpg" },
  { name: "Lucky", price: 12.99, img: "image/1.jpg" },
  { name: "Predo", price: 11.99, img: "image/1.jpg" },
  { name: "Koko", price: 8.99, img: "image/1.jpg" },
  { name: "A Lok", price: 15.99, img: "image/1.jpg" },
  { name: "July", price: 17.99, img: "image/1.jpg" },
  { name: "A Kom Sot", price: 17.99, img: "image/1.jpg" },
  { name: "Momo", price: 12.99, img: "image/1.jpg" },
];

let index = 0;

const updateSlides = () => {
  const images = document.getElementsByClassName("card-img");
  const names = document.getElementsByClassName("pro-name");
  const prices = document.getElementsByClassName("pro-price");
  const rates = document.getElementsByClassName("rate");
  for (let i = 0; i < 4; i++) {
    images[i].src = obj[(index + i) % obj.length].img;
    names[i].innerText = obj[(index + i) % obj.length].name;
    prices[i].innerText = obj[(index + i) % obj.length].price + "$";
  }
};

const nextSlide = () => {
  index = (index + 1) % obj.length;
  updateSlides();
};

const prevSlide = () => {
  index = (index - 1 + obj.length) % obj.length;
  updateSlides();
};
setInterval(nextSlide, 3000);

// Select all category items
const categoryItems = document.querySelectorAll(".category-item");

// Add click event listener to each item
categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'active' class from all items
    categoryItems.forEach((el) => el.classList.remove("active"));
    // Add 'active' class to the clicked item
    item.classList.add("active");
  });
});

const toggleSection = (sectionToShow) => {
  const sections = ["home", "contact", "about", "signup"];
  sections.forEach((section) => {
    document.querySelector(`.${section}`).style.display =
      section === sectionToShow ? "block" : "none";
  });
};
document.addEventListener("DOMContentLoaded", () => {
  toggleSection("home");
});
const Home = () => toggleSection("home");
const Contact = () => toggleSection("contact");
const About = () => toggleSection("about");
const Signup = () => toggleSection("signup");
