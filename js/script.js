const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}
const emailLink = document.querySelector(".email-link");

if (emailLink && /Android|iPhone|iPad/i.test(navigator.userAgent)) {
  emailLink.href = "mailto:mohanaprasath1735@gmail.com";
  emailLink.removeAttribute("target");
}