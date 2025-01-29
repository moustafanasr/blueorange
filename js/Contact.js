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