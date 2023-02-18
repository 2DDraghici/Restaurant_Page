import "./style.css";
import food_listing from "./food_listing";

function header() {
  const header = document.createElement("div");
  header.classList.add("header");
  const logo = document.createElement("img");
  logo.classList.add("logo");
  const menu_box = document.createElement("div");
  menu_box.classList.add("menu_box");
  const menu_listing = document.createElement("p");
  menu_listing.classList.add("menu_listing");
  const reservation = document.createElement("p");
  reservation.classList.add("reservation");
  const contact_info = document.createElement("p");
  contact_info.classList.add("contact_info");
  menu_listing.innerHTML = "MENU";
  contact_info.innerHTML = "CONTACT";
  reservation.innerHTML = "RESERVATION";
  menu_box.appendChild(menu_listing);
  menu_box.appendChild(reservation);
  menu_box.appendChild(contact_info);
  header.appendChild(logo);
  header.appendChild(menu_box);

  return header;
}

const content = document.querySelector("#content");

const infoBox = document.createElement("div");
infoBox.classList.add("infoBox");

content.appendChild(header());
content.appendChild(infoBox);
for (let index = 0; index < 9; index++) {
  infoBox.appendChild(food_listing());
}
