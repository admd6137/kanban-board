import "./style.css";

const moreApps = document.querySelector(".moreApps");
const moreAppsNav = document.querySelector(".moreAppsNav");

moreApps.addEventListener("click", () => {
  if (moreAppsNav.classList.contains("hidden")) {
    moreAppsNav.classList.remove("hidden");
  } else {
    moreAppsNav.classList.add("hidden");
  }
});
