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

const SidebarClose = document.getElementById("SidebarClose");
SidebarClose.addEventListener("click", SidebarCloseFunc);

function SidebarCloseFunc() {
  headerSidebar.style.transition = "transform 600ms cubic-bezier(0.4, 0.0, 0.2, 1)";
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
  }, 500);
}

// Toggle with keys

document.addEventListener('keydown', ({ key }) => {
  if (isAnimating) return;
  isAnimating = true;

  const isOpen = headerSidebar.style.transform === "translateX(0px)";
  const transitions = "transform 350ms cubic-bezier(0.4, 0.0, 0.2, 1)";

  if (key === "c" && !isOpen) {
    headerSidebar.style.transition = transitions;
    headerSidebar.style.transform = "translateX(0)";
  } else if ((key === "Escape" || key === "Backspace") && isOpen) {
    headerSidebar.style.transition = transitions;
    headerSidebar.style.transform = "translateX(-300px)";
  }

  setTimeout(() => isAnimating = false, 150);
});

// Dragable sidebar

let isDragging = false, initialX;

const startDragging = (e) => {
    if (e.type === 'mousedown' ? e.clientX <= window.innerWidth * 0.25 : e.touches[0].clientX <= window.innerWidth * 0.25) {
        isDragging = true;
        initialX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        headerSidebar.style.transition = 'none';
        document.addEventListener(e.type === 'mousedown' ? 'mousemove' : 'touchmove', dragging);
        document.addEventListener(e.type === 'mousedown' ? 'mouseup' : 'touchend', stopDragging);
    }
};

const dragging = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const width = Math.min(250, Math.max(0, currentX - initialX));
    headerSidebar.style.transform = `translateX(${width - 250}px)`;
};

const stopDragging = (e) => {
    if (!isDragging) return;
    isDragging = false;
    const currentX = e.type === 'mouseup' ? e.clientX : e.changedTouches[0].clientX;
    const width = currentX - initialX;
    headerSidebar.style.transition = 'transform 550ms cubic-bezier(0.4, 0.0, 0.2, 1)';
    headerSidebar.style.transform = width < 125 ? 'translateX(-100%)' : 'translateX(0)';
    document.removeEventListener(e.type === 'mouseup' ? 'mousemove' : 'touchmove', dragging);
    document.removeEventListener(e.type === 'mouseup' ? 'mouseup' : 'touchend', stopDragging);
};

headerSidebar.addEventListener('mousedown', (e) => e.stopPropagation());
headerSidebar.addEventListener('touchstart', (e) => e.stopPropagation());
document.addEventListener('mousedown', startDragging);
document.addEventListener('touchstart', startDragging);

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

// Image hover && drag to scroll

const container = document.querySelector('.DoWbimg');

let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown = false;

container.addEventListener('mousedown', mouseIsDown);
container.addEventListener('mouseup', mouseUp);
container.addEventListener('mouseleave', mouseLeave);
container.addEventListener('mousemove', mouseMove);

function mouseIsDown(e) {
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;
}

function mouseUp() {
  isDown = false;
}

function mouseLeave() {
  isDown = false;
}

function mouseMove(e) {
  if (!isDown) return; // ถ้าไม่ได้กดเมาส์ค้างไว้ ให้หยุดการทำงาน
  e.preventDefault();

  // Move vertically
  const y = e.pageY - container.offsetTop;
  const walkY = y - startY;
  container.scrollTop = scrollTop - walkY;

  // Move Horizontally
  const x = e.pageX - container.offsetLeft;
  const walkX = x - startX;
  container.scrollLeft = scrollLeft - walkX;
}

let ImagesHover = document.querySelectorAll('.DoWbImagecon');
ImagesHover[0].style.transform = "translateX(5px)"
ImagesHover[3].style.transform = "translateX(-5px)"

const imghover = (event) => {
  if (window.innerWidth >= 1460) {
    event.target.style.outline = "solid 2px #343434";
    gsap.to(cursorInner, 0.15, {
      scale: 0,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  }
};

const Exitimghover = (event) => {
  if (window.innerWidth >= 1460) {
    event.target.style.outline = "solid 0px #242424";
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  }
};

// Add Event Listener to each image
ImagesHover.forEach(image => {
  image.addEventListener('mouseenter', imghover);
  image.addEventListener('mouseleave', Exitimghover);
});

MainNavbar.style.transform = "translatey(-100px)";
MainNavbar.style.opacity = "0";
// 6504.65771484375

setTimeout(() => {

  MainNavbar.style.transform = "translatey(0px)";
  MainNavbar.style.opacity = "1";

}, 3100);
