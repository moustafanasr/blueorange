// Select all the FAQ blocks
const faqBlocks = document.querySelectorAll('.cases_faq_block');

// Add event listener to each button inside the blocks
faqBlocks.forEach(block => {
  const button = block.querySelector('.cases_faq_button');
  
  button.addEventListener('click', () => {
    // Toggle the active class on the parent FAQ block
    block.classList.toggle('active');
  });
});
