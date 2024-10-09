const header = document.querySelector("header");
const navbarHeight = header.offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navbarHeight - 1 + "px"
);

const heroSection = document.querySelector(".hero");
const heroSectionOptions = {
  rootMargin: "-80px 0px 0px 0px",
};
const heroSectionObserver = new IntersectionObserver(
  (entries, heroSectionObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("scrolled-past-hero");
      } else {
        header.classList.remove("scrolled-past-hero");
      }
    });
  },
  heroSectionOptions
);

heroSectionObserver.observe(heroSection);

// const faders = document.querySelectorAll(".fade-in");
// const faderOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -100px 0px",
// };

// const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;
//     else {
//       // entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// }, faderOptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });
