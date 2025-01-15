// Hover effects
const gsapHoverEffect = (element, scaleIn, scaleOut) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, { scale: scaleIn });
    gsap.to(cursorOuter, 0.2, { scale: 0 });
  });
  element.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, { scale: scaleOut });
    gsap.to(cursorOuter, 0.2, { scale: 1 });
  });
};

const addHoverEffects = () => {
  document.querySelectorAll(".navbarlinks > li > a").forEach(link => gsapHoverEffect(link, 5, 1));
  gsapHoverEffect(document.getElementById("Pkidbutton"), 5, 1);
  gsapHoverEffect(document.getElementById("Ytpeakkofficial"), 0, 1);
  gsapHoverEffect(document.getElementById("Navbarlinkshover"), 0, 1);
};

addHoverEffects();

// Sidebartoggle

const backgroundBlur = document.getElementById("backgroundblur");
const headerSidebar = document.getElementById("Headersidebar");
let isAnimating = false;

function toggleDisplay() {
  if (isAnimating) return;
  isAnimating = true;

  const isVisible = headerSidebar.style.transform === "translateX(0px)";
  if (isVisible) {
    headerSidebar.style.transition = "transform 750ms cubic-bezier(0.4, 0.0, 0.2, 1)";
    headerSidebar.style.transform = "translateX(-300px)";
    setTimeout(() => {
      backgroundBlur.style.transition = "transform 750ms cubic-bezier(0.4, 0.0, 0.2, 1)";
      requestAnimationFrame(() => {
        backgroundBlur.style.transform = "translateX(-100vw)";
      });
      setTimeout(() => {
        backgroundBlur.style.display = "none";
        backgroundBlur.style.opacity = 0;
        isAnimating = false;
      }, 750);
    }, 500); // Delay before hiding backgroundBlur
  } else {
    backgroundBlur.style.display = "block";
    backgroundBlur.style.transition = "transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)";
    requestAnimationFrame(() => {
      backgroundBlur.style.transform = "translateX(0)";
      backgroundBlur.style.opacity = 1;
    });
    setTimeout(() => {
      headerSidebar.style.transition = "transform 500ms cubic-bezier(0.4, 0.0, 0.2, 1)";
      headerSidebar.style.transform = "translateX(0px)";
      isAnimating = false;
    }, 750); // Delay to ensure backgroundBlur reaches 100% before showing headerSidebar
  }
}

HamburEvents.addEventListener("click", () => {
  toggleDisplay();
  backgroundBlur.addEventListener("click", toggleDisplay, { once: true });
});

// Cache DOM elements
const links = document.querySelectorAll('.links li a');
const navbar = document.getElementById('Highlightheader');
const sidebarLinks = document.querySelectorAll('.hdsbcnlk li a');

// Sidebar hover click effect
sidebarLinks.forEach(element => {
  element.addEventListener('click', event => {
    event.stopPropagation();
    sidebarLinks.forEach(el => el.classList.remove('clicked'));
    element.classList.toggle('clicked');
  });
});

document.addEventListener('click', () => {
  sidebarLinks.forEach(el => el.classList.remove('clicked'));
});

// Close sidebar and background blur when link is clicked
sidebarLinks.forEach(element => {
  element.addEventListener('click', toggleDisplay);
});

// Change header text on scroll
const updateNavbar = () => {
  navbar.textContent = window.scrollY >= window.innerHeight ? 'มีเว็บไซต์เพื่ออะไร' : 'หน้าแรก 2025';
};

// Check header large screen
const updateNavbarLargeScreen = () => {
  const highlightClass = 'highlight';
  document.querySelectorAll(`.${highlightClass}`).forEach(el => el.classList.remove(highlightClass));

  const targetSection = document.getElementById('whyweb');
  const navbarHeight = document.querySelector('nav').offsetHeight;

  if (targetSection && window.scrollY >= targetSection.offsetTop - navbarHeight) {
    // Assuming links[2] corresponds to the target section link
    links[2]?.classList.add(highlightClass);
    setDefaultNavbarProperties();
  } else if (window.scrollY >= window.innerHeight) {
    links[1]?.classList.add(highlightClass);
    setDefaultNavbarProperties();
  } else {
    Object.assign(navbar.style, { color: '#ffffe9', borderBottom: "solid 2px #ffffe9" });
  }
};

const setDefaultNavbarProperties = () => {
  Object.assign(navbar.style, { color: '#616161', borderBottom: "none" });
};

// Handle scroll and resize events
const handleScroll = () => window.innerWidth < 1460 ? updateNavbar() : updateNavbarLargeScreen();

// Initial check when the page loads
handleScroll();
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
