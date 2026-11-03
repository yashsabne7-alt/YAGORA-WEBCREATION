
// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// PACKAGE SELECTION
document.querySelectorAll("[data-package]").forEach((link) => {
  link.addEventListener("click", () => {
    const packageSelect = document.querySelector("#package");

    if (packageSelect) {
      packageSelect.value = link.dataset.package;
    }
  });
});

// AUTOMATIC COPYRIGHT YEAR
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// CONTACT FORM
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get("name")?.toString().trim() || "";
    const business = formData.get("business")?.toString().trim() || "";
    const country = formData.get("country")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const packageChoice =
      formData.get("package")?.toString() || "Not sure yet";
    const details = formData.get("details")?.toString().trim() || "";

    const subject = encodeURIComponent(
      `Website inquiry — ${business}`
    );

    const body = encodeURIComponent(
      `Hello YAGORA Web Creation,

I'd like to discuss a website project.

Name: ${name}
Business: ${business}
Country: ${country}
Email: ${email}
Package: ${packageChoice}

Project details:
${details}

Thank you.`
    );

    if (formStatus) {
      formStatus.textContent =
        "Your email app should open with the inquiry prepared. Review it and send when ready.";
    }

    window.location.href =
      `mailto:yagorawebcreation@gmail.com?subject=${subject}&body=${body}`;
  });
}
