const words = document.querySelectorAll(".word");

// Add animation to each word
words.forEach((word, index) => {
  setTimeout(() => {
    word.style.opacity = 1;
    word.style.transform = "translateY(0)";
  }, index * 100); // Staggered delay for animation
});



// script.js
// Function to animate words
function animateWords() {
  const words = document.querySelectorAll(".word");

  words.forEach((word, index) => {
    setTimeout(() => {
      word.classList.add("visible");
    }, index * 200); // Staggered delay for animation
  });
}

// Function to animate job items
function animateJobItems() {
  const jobItems = document.querySelectorAll(".job-item");

  jobItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 300); // Staggered delay for animation
  });
}

// Initialize animations when the page loads
document.addEventListener("DOMContentLoaded", () => {
  animateWords();
  animateJobItems();
});


let isScrolling;

window.addEventListener('scroll', () => {
  // Cancel the previous animation frame to avoid jank
  window.cancelAnimationFrame(isScrolling);

  // Use requestAnimationFrame for smooth animations
  isScrolling = requestAnimationFrame(() => {
    const imageContainer = document.querySelector('.image-container');
    const scrollY = window.scrollY;

    // Define the scroll range for the animation
    const maxScroll = 500; // Adjust this value to match the desired scroll range
    const startValue = -4.39; // Starting value in vw
    const endValue = 0; // Ending value in vw

    // Calculate the translateY based on scroll position
    let translateY = startValue + (scrollY / maxScroll) * (endValue - startValue);

    // Clamp the translateY value between startValue and endValue
    if (translateY > endValue) {
      translateY = endValue;
    } else if (translateY < startValue) {
      translateY = startValue;
    }

    // Apply the smooth transform
    imageContainer.style.transform = `translateY(${translateY}vw)`;
  });
});



// Trigger word animation when the section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateWords();
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

observer.observe(document.querySelector('.statistics-gallery'));

// Scrolling Text Animation
const scroller = document.querySelector('.scroller');
const tagList = document.querySelector('.tag-list');

// Duplicate content for seamless scrolling
tagList.innerHTML = tagList.innerHTML + tagList.innerHTML;

// Pause animation on hover
// scroller.addEventListener('mouseenter', () => {
//   tagList.style.animationPlayState = 'paused';
// });

// scroller.addEventListener('mouseleave', () => {
//   tagList.style.animationPlayState = 'running';
// });


// Import Swiper (if using a module bundler like Webpack)
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  // spaceBetween: 25,
  // centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});



document.querySelectorAll('.faq-header').forEach(header => {
  header.addEventListener('click', () => {
    const faqItem = header.parentElement;
    faqItem.classList.toggle('active');
  });
});