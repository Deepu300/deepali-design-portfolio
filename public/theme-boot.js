(() => {
  try {
    if (localStorage.getItem("portfolio-theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    /* ignore */
  }
})();
