document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.querySelector(".hamburger-menu");
  const sidebar = document.getElementById("mySidebar");

  mobileMenu.addEventListener("click", function () {
    navbar.classList.toggle("menu-open");
    const isOpen = navbar.classList.contains("menu-open");

    if (isOpen) {
      openSidebar();
      disableScroll();
    } else {
      closeSidebar();
      enableScroll();
    }
  });

  function openSidebar() {
    sidebar.style.display = "flex";
    mobileMenu.classList.add("active");
  }

  function closeSidebar() {
    sidebar.style.display = "none";
    mobileMenu.classList.remove("active");
  }

  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }
});
