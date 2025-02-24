const words = ["Samantha", "an Engineer", "a Creative", "Innovative"];
const typingTextElement = document.querySelector(".typing-text");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar-small .navlinks");
const blogpost = document.querySelectorAll(".blog-post");
const general_Item = document.querySelectorAll(".general-item");
const logo = document.querySelectorAll(".logo");
const toggleButton = document.querySelectorAll(".toggle-theme");

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

general_Item.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.getAttribute("data-url")) {
      const url = item.getAttribute("data-url");
      window.location.href = url;
    }
  });
});

toggleButton.forEach((item) => {
  item.addEventListener("click", function () {
    const root = document.documentElement;

    if (root.style.getPropertyValue("--bg-color") === "#fff") {
      root.style.setProperty("--bg-color", "#121212");
      root.style.setProperty("--text-color", "#fff");
      localStorage.setItem("theme", "dark");
    } else {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--text-color", "#000000");
      localStorage.setItem("theme", "light");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const themeIcon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    root.style.setProperty("--bg-color", "#121212");
    root.style.setProperty("--text-color", "#ffffff");
    root.classList.add("dark-mode");
    themeIcon.textContent = "🌙";
  } else {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--text-color", "#000000");
  }
  toggleButton.addEventListener("click", function () {
    if (root.classList.contains("dark-mode")) {
      root.classList.remove("dark-mode");
      themeIcon.textContent = "🌞"; // Sun for light mode
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark-mode");
      themeIcon.textContent = "🌙"; // Moon for dark mode
      localStorage.setItem("theme", "dark");
    }
  });
});
