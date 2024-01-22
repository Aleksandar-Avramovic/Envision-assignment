window.addEventListener("scroll", function () {
  let header = document.getElementById("sticky");
  header.classList.toggle("header--sticky", window.scrollY > 0);
});
