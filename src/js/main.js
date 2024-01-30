import { hamburgerMenuTrigger } from "./_hamburgerMenuTrigger.mjs";
import { stickyHeader } from "./_stickyHeader.mjs";
// import { tabChanger } from "./_tabChanger.mjs";

document.addEventListener("DOMContentLoaded", function () {
  hamburgerMenuTrigger();
  stickyHeader();
  // tabChanger();
});
