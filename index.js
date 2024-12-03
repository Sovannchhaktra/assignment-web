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
  { name: "SAMSUNG 27 Essential S3 (S36GD) Series FHD 1800R Curved Computer Monitor, 100Hz, Game Mode, Advanced Eye Comfort", price: 10.99, img: "flash-sale/flash-sale1.avif" },
  { name: "SAMSUNG 24-Inch Odyssey G3 (G30D) Series FHD Gaming Monitor, 1ms, 180Hz, AMD FreeSync, Adjustable Stand, Black Equalizer, Virtual Aim Point", price: 12.99, img: "flash-sale/flash-sale2.avif" },
  { name: "ASUS Vivobook S 14 OLED Laptop, Intel Core Ultra 9 185H, 16GB, 1TB SSD, Neutral Black, S5406MA-AS96, Intel Evo Edition", price: 11.99, img: "flash-sale/flash-sale3.avif" },
  { name: "Dell Optiplex 7050 SFF Desktop PC Intel i7-7700 4-Cores 3.60GHz 32GB DDR4 1TB SSD WiFi BT HDMI Duel Monitor Support Windows 10 Pro Excellent Condition(Renewed)", price: 8.99, img: "flash-sale/flash-sale4.avif" },
  { name: "EVGA X12 Gaming Mouse, 8k, Wired, White, Customizable, Dual Sensor, 16,000 DPI, 5 Profiles", price: 15.99, img: "flash-sale/flash-sale5.avif" },
  { name: "Sennheiser Consumer Audio HD 650 - Audiophile Hi-Res Open Back Dynamic Headphone", price: 17.99, img: "flash-sale/flash-sale6.avif" },
  { name: "Samsung 32 UJ59 Series 4K UHD (3840x2160) Computer Monitor", price: 17.99, img: "flash-sale/flash-sale7.avif" },
  { name: "Samsung Galaxy Tab S6 Lite (2024)", price: 12.99, img: "flash-sale/flash-sale8.avif" },
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
const sections = ["home", "contact", "about", "signup", "login", "cart", "account"];
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
const LoginForm = () => toggleSection("login");
const Cart = () => toggleSection("cart");
const Account = () => toggleSection("account");
