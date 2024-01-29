function changeTab(clickedTab, tabId) {
  document.getElementById("tab1Content").classList.add("hidden");
  document.getElementById("tab2Content").classList.add("hidden");
  document.getElementById("tab1Image1").classList.add("hidden");
  document.getElementById("tab1Image2").classList.add("hidden");
  document.getElementById("tab2Image1").classList.add("hidden");
  document.getElementById("tab2Image2").classList.add("hidden");

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId + "Content").classList.remove("hidden");

  if (tabId === "tab1") {
    document.getElementById("tab1Image1").classList.remove("hidden");
    document.getElementById("tab2Image2").classList.remove("hidden");
  } else if (tabId === "tab2") {
    document.getElementById("tab2Image1").classList.remove("hidden");
    document.getElementById("tab1Image2").classList.remove("hidden");
  }

  clickedTab.classList.add("active");
}
