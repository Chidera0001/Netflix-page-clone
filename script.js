// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add 'show' class when an element is in the viewport
function showElementOnScroll() {
  const elements = document.querySelectorAll(".fade, .slide-in, .slide-down");
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("show");
    }
  });
}

// Event listener for scrolling
document.addEventListener("scroll", showElementOnScroll);

// Call the function initially to show elements in the viewport on page load
showElementOnScroll();
