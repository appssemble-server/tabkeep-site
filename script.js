const downloadLinks = document.querySelectorAll("[data-download-link]");
const configuredDownloadUrl = window.TABKEEP_DOWNLOAD_URL;

if (configuredDownloadUrl) {
  downloadLinks.forEach((link) => {
    link.href = configuredDownloadUrl;
  });
}

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const flow = document.querySelector("[data-flow]");

if (flow) {
  const steps = Array.from(flow.querySelectorAll("[data-flow-step]"));
  const image = flow.querySelector("[data-flow-image]");

  steps.forEach((step) => {
    step.addEventListener("click", () => {
      const src = step.getAttribute("data-screen");
      const alt = step.getAttribute("data-alt") || "";

      steps.forEach((item) => {
        const selected = item === step;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
      });

      if (image && src) {
        image.style.opacity = "0";
        window.setTimeout(() => {
          image.src = src;
          image.alt = alt;
          image.style.opacity = "1";
        }, 120);
      }
    });
  });
}
