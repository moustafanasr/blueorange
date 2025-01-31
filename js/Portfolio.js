// ==============================================
// Filtering and Pagination Logic
// ==============================================

// Select elements
const filterButtons = document.querySelectorAll(".filter-buttons .buttons");
const workItems = document.querySelectorAll(".work-content .work-item");
const paginationContainer = document.querySelector(".pagination");
const itemsPerPage = 5; // Number of items per page

let currentFilter = "all"; // Track the current filter
let currentPage = 1; // Track the current page

// Function to filter and paginate work items
function filterAndPaginate(filter) {
  currentFilter = filter; // Update the current filter
  currentPage = 1; // Reset to the first page when filtering

  // Filter work items based on the selected category
  const visibleItems = Array.from(workItems).filter((item) => {
    const category = item.getAttribute("data-category");
    return filter === "all" || category === filter;
  });

  // Update pagination based on the number of visible items
  updatePagination(visibleItems.length);

  // Show the first page by default
  showPage(currentPage, visibleItems);
}

// Function to update pagination buttons
function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  // Clear existing pagination buttons
  paginationContainer.innerHTML = "";

  // Create pagination buttons dynamically
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("page-number");
    pageButton.textContent = i;

    // Set the first page as active by default
    if (i === 1) {
      pageButton.classList.add("active");
    }

    // Add click event listener to pagination buttons
    pageButton.addEventListener("click", () => {
      // Remove active class from all page numbers
      document.querySelectorAll(".pagination .page-number").forEach((p) => p.classList.remove("active"));
      // Add active class to the clicked page number
      pageButton.classList.add("active");

      // Get visible items after filtering
      const visibleItems = Array.from(workItems).filter((item) => {
        const category = item.getAttribute("data-category");
        return currentFilter === "all" || category === currentFilter;
      });

      // Show items for the clicked page
      showPage(i, visibleItems);
    });

    // Append the button to the pagination container
    paginationContainer.appendChild(pageButton);
  }
}

// Function to show items for a specific page
function showPage(page, visibleItems) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Hide all items first
  workItems.forEach((item) => (item.style.display = "none"));

  // Show items for the current page
  visibleItems.slice(startIndex, endIndex).forEach((item) => {
    item.style.display = "block";
  });
}

// Add click event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    // Get the filter value from the clicked button
    const filter = button.getAttribute("data-filter");

    // Filter and paginate work items
    filterAndPaginate(filter);
  });
});

// Initialize: Show all items and first page by default
filterAndPaginate("all"); // Initialize with the "All" filter





const swiperTestimonial = new Swiper('.swiperTestimonial', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  slidesPerGroup: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 0 },
    480: { slidesPerView: 1, spaceBetween: 0 },
    768: { slidesPerView: 2, spaceBetween: 0 },
    992: { slidesPerView: 2, spaceBetween: 0 },
    1400: { slidesPerView: 2, spaceBetween: 0 },
    2000: { slidesPerView: 2, spaceBetween: 0 }
  },
  // Add pagination
  pagination: {
    el: '.swiper-pagination', // Element to hold the pagination dots
    clickable: true, // Allow clicking on dots to navigate
  },
});






// script.js
function observeWorkItems() {
  const workItems = document.querySelectorAll(".work-item");

  if (workItems.length === 0) {
    console.error("No work items found to observe!");
    return;
  }

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0, // Trigger when any part of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the visible class
        observer.unobserve(entry.target); // Stop observing after the element is visible
      }
    });
  }, observerOptions);

  // Observe each work item
  workItems.forEach((workItem) => {
    observer.observe(workItem);
  });

  // Check visibility immediately after the page loads
  checkVisibilityOnLoad(workItems);
}

// Function to check visibility on page load
function checkVisibilityOnLoad(workItems) {
  workItems.forEach((workItem, index) => {
    const rect = workItem.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      setTimeout(() => {
        workItem.classList.add("visible");
      }, index * 200); // Staggered delay (200ms between each item)
    }
  });
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", observeWorkItems);