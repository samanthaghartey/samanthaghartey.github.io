const words = ["Samantha", "an Engineer", "a Creative", "Innovative"];
const typingTextElement = document.querySelector(".typing-text");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar-small .navlinks");
const blogpost = document.querySelectorAll(".blog-post");

let wordIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < words[wordIndex].length) {
    typingTextElement.textContent += `${words[wordIndex].charAt(letterIndex)}`;

    letterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (letterIndex > 0) {
    typingTextElement.textContent = words[wordIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

function toggleNavbar() {
  navbar.style.display = navbar.style.display == "block" ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 500);
});
menu.addEventListener("click", toggleNavbar);

blogpost.forEach((post) => {
  post.addEventListener("click", () => {
    const url = post.getAttribute("data-url");
    window.location.href = url;
  });
});
