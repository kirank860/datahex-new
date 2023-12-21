const navItems = document.querySelectorAll('.li-items li');
const sections = document.querySelectorAll('.content');

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    sections[index].scrollIntoView({ behavior: 'smooth' });
    // Highlight the selected item
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    item.classList.add('active');
  });
});

// Intersection Observer to highlight the current section in the navigation
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(sections).indexOf(entry.target);
      navItems.forEach((navItem) => navItem.classList.remove('active'));
      navItems[index].classList.add('active');
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
