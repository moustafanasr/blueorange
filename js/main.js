// Award Winning Elastic Cursor Follow Animation
const cursor = document.querySelector(".cursor");

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Move the cursor with a slight delay for elastic effect
  gsap.to(cursor, {
    x: mouseX,
    y: mouseY,
    duration: 0.5,
    ease: "elastic.out(1, 0.5)",
  });
});

// Add active state when clicking
// document.addEventListener("mousedown", () => {
//   cursor.classList.add("active");
// });

// document.addEventListener("mouseup", () => {
//   cursor.classList.remove("active");
// });


// Add active class when hovering over specific elements
const hoverElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, a, img, button,p,.follow-us-text,.client-name,.client-role,.swiper-pagination-bullet,span,.swiper-button-next,.swiper-button-prev");

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});



// script.js
function observeElements() {
  const sections = document.querySelectorAll(".landing-news, .articles, .testimonial-section,.address,.map,.jobs,.image-container,.statistics-gallery,.faq,.service-desc,.ceo-section,.team-member,.queries,.fisrtSectionHeader,.sectionVideo,.Details,.sectionAbout,.sectionAboutVideo,.sectionMind,.sectionMindImage,.sectionHappen,.sectionHappenImage,.sectionBuilding,.sectionBuildingImage,.sectionBuildingTwo,.sectionBuildingTwoImage,.sectionOutcome,.sectionOutcomeLetter,.sectionNextProject,.sectionDetails");

  if (sections.length === 0) {
    console.error("No sections found to observe!");
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Check visibility immediately after the page loads
  checkVisibilityOnLoad(sections);
}

function checkVisibilityOnLoad(sections) {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2, // Staggered delay
        ease: "power2.out",
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", observeElements);