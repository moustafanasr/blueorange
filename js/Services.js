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




document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box-process");

  const updateBackgroundPosition = () => {
    boxes.forEach((box) => {
      const description = box.querySelector(".service-description");
      if (!description) return; // Skip if no .service-description is found

      const boxTop = box.getBoundingClientRect().top;
      const boxHeight = box.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate the scroll progress within the box
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - boxTop*2.5) / (windowHeight + boxHeight))
      );
      // console.log(scrollProgress)
      // Update background-position-x from 100% to 0%
      description.style.backgroundPositionX = `${100 - scrollProgress * 100}%`;
    });
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", updateBackgroundPosition);
  window.addEventListener("resize", updateBackgroundPosition);

  // Initial call to set the background position
  updateBackgroundPosition();
});



document.addEventListener("DOMContentLoaded", function () {
  const stickyHeaders = document.querySelectorAll(".sticky-header");

  const updateScaleAnimation = () => {
    stickyHeaders.forEach((header) => {
      const headerTop = header.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate the scroll progress within the header
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - headerTop) / (windowHeight + headerHeight))
      );

      // Update the scale from 0.8 to 1 based on scroll progress
      const scale = 0.8 + scrollProgress * 0.2; // Scale range: 0.8 to 1
      header.style.transform = `scale(${scale})`;
    });
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", updateScaleAnimation);
  window.addEventListener("resize", updateScaleAnimation);

  // Initial call to set the scale
  updateScaleAnimation();
});




document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  // Function to animate counters
  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.textContent.replace("+", ""); // Get the target number from the HTML
      const duration = 9000; // Animation duration in milliseconds
      const increment = target / (duration / 16); // Calculate increment per frame

      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = `+${Math.ceil(current)}`;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = `+${target}`;
        }
      };

      updateCounter();
    });
  };

  // Intersection Observer to trigger the animation
  const experienceSection = document.querySelector(".experience");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is visible
    }
  );

  // Start observing the experience section
  if (experienceSection) {
    observer.observe(experienceSection);
  } else {
    console.error("Experience section not found in the DOM.");
  }
});