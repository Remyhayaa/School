const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle menu on hamburger click
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from bubbling to the document
  navLinks.classList.toggle('active');
});

// Close menu if clicking outside navLinks and menuToggle
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navLinks.classList.remove('active');
  }
});

  const slides = document.querySelectorAll('.slide');
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  const description = document.getElementById('description');
  const action = document.getElementById('action');

  const contents = [
  {
    title: "Welcome to Our School",
    subtitle: "Inspiring Young Minds",
    description: "Empowering students to achieve their dreams",
    button: "Learn More"
  },
  {
    title: "Innovative Learning",
    subtitle: "Modern Classrooms & Tools",
    description: "Technology and creativity hand in hand",
    button: "Explore Curriculum"
  },
  {
    title: "Join Our Community",
    subtitle: "Where Learning Thrives",
    description: "Dedicated to academic excellence",
    button: "Meet the Staff"
  }
];

  let current = 0;
  const total = slides.length;

  function updateContent(index) {
    title.textContent = contents[index].title;
    subtitle.textContent = contents[index].subtitle;
    description.textContent = contents[index].description;
    action.textContent = contents[index].button;
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });

    // Update active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) {
        dot.classList.add('active');
      }
    });

    // Animate overlay content
    const overlay = document.getElementById('content');
    overlay.classList.remove('animate');
    void overlay.offsetWidth; // trigger reflow
    overlay.classList.add('animate');

    updateContent(index);
  }

  function nextSlide() {
    current = (current + 1) % total;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + total) % total;
    showSlide(current);
  }

  setInterval(nextSlide, 15000); // Change every 15 seconds

  window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('content');
    overlay.classList.remove('animate');
    void overlay.offsetWidth; // Trigger reflow
    overlay.classList.add('animate');
  });
