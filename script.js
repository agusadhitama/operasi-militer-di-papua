const paragraphs = document.querySelectorAll(".story p");

window.addEventListener("scroll", () => {
  paragraphs.forEach(p => {
    const position = p.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      p.classList.add("show");
    }
  });
});