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
ImagesHover[0].style.transform = "translateX(7.5px)"
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

// const setOpacity = (id, opacity) => document.getElementById(id).style.opacity = opacity;
// const updateText = (texts, delays, callback) => {
//   let index = 0;
//   const nextText = () => {
//     if (index < texts.length) {
//       document.getElementById("TextAnimationGlitch").innerHTML = texts[index];
//       setTimeout(nextText, delays[index++]);
//     } else if (callback) callback();
//   };
//   nextText();
// };

// MainNavbar.style.transform = "translatey(-100px)";
// MainNavbar.style.opacity = "0";
// ["headernav", "Pkidbutton", "Pkofficialsvg"].forEach(id => setOpacity(id, "0"));
// document.body.style.overflow = "hidden";

// setTimeout(() => {
//   updateText(["รับทํา", "เว็บไซต์", "ติดต่อ", "พวกเรา", "ได้ครับ", ""], [500, 500, 500, 500, 500, 300], () => {
//     document.body.style.overflow = "auto";
//     setTimeout(() => setOpacity("Pkofficialsvg", "1"), 1000);
//   });
// }, 3600);

// setTimeout(() => {
//   MainNavbar.style.transform = "translatey(0px)";
//   MainNavbar.style.opacity = "1";
//   ["headernav", "Pkidbutton"].forEach(id => setOpacity(id, "1"));
// }, 8800);

// Animation Header bob

const MIN_SPEED = 1.5, MAX_SPEED = 2.5;

class Blob {
  constructor(el) {
    const { width: size } = el.getBoundingClientRect();
    this.el = el;
    this.size = size;
    this.x = this.randomPos(window.innerWidth - size);
    this.y = this.randomPos(window.innerHeight - size);
    this.vx = this.randomSpeed();
    this.vy = this.randomSpeed();
    el.style.top = `${this.y}px`;
    el.style.left = `${this.x}px`;
  }

  randomPos(max) { return Math.random() * max; }
  randomSpeed() { return Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED * (Math.random() > 0.5 ? 1 : -1); }

  update() {
    this.x = this.reflect(this.x, window.innerWidth);
    this.y = this.reflect(this.y, window.innerHeight);
  }

  reflect(coord, maxSize) {
    coord += this.vx;
    if (coord >= maxSize - this.size || coord <= 0) this.vx *= -1;
    return coord;
  }

  move() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

const initBlobs = () => {
  const blobs = [...document.querySelectorAll('.bouncing-blob')].map(el => new Blob(el));
  const update = () => (blobs.forEach(blob => (blob.update(), blob.move())), requestAnimationFrame(update));
  requestAnimationFrame(update);
};

initBlobs();

// Cta 

document.addEventListener('DOMContentLoaded', function () {
  const ctabtn = document.getElementById("ctabtn");
  const ctabtnContent = document.getElementById("ctabtncontent");
  const detailscontact = document.getElementById("detailscontact");
  const CtaTextContent = document.getElementById("CtaTextContent");
  const Ctaclasslinksigtoggles = document.getElementById("classlinksigtoggles");

  const disable = () => {
    ctabtn.disabled = true;
    Object.assign(ctabtn.style, { opacity: '0' });
    console.log('Disabled');
  }

  const enable = () => {
    ctabtn.disabled = false;
    Object.assign(ctabtn.style, { opacity: '1' });
    console.log('Enabled');
  }

  // enableDetailsContact

  const enableDetailsContact = () => {
    detailscontact.disableDetailsContact = false;
    Object.assign(detailscontact.style, { opacity: '1' });
    console.log('Using Details Contact');
  }

  const disableDetailsContact = () => {
    detailscontact.disableDetailsContact = true;
    Object.assign(detailscontact.style, { opacity: '0' });
    console.log('Disabled Details Contact');
  }

  let hasRun = false;

  // pragma <once> for 2 functions below
  // use for initialization

  const UsingDetailscta = () => {
    if (!hasRun) {
      setTimeout(enableDetailsContact, 200);
      disableDetailsContact();
      hasRun = true;
    }
  }

  const usingctn = () => {
    if (!hasRun) {
      setTimeout(enable, 200);
      disable();
      hasRun = true;
    }
  }

  // initialize cta button detailscontact

  const initializeDetailsContact = () => {
    detailscontact.classList.remove("uninitializeDetailsContact");
    detailscontact.classList.add("initializedetailscontact");
  }

  const uninitializedDetailsContact = () => {
    detailscontact.classList.add("uninitializeDetailsContact");
    detailscontact.classList.remove("initializedetailscontact");
  }

  // initialize cta button

  const initialize = () => {
    ctabtn.style.transition = "cubic-bezier(0.4, 0.0, 0.2, 1) 600ms all";
    ctabtn.classList.add('styleCtabtninitialize', 'styleCtabtnAnimateFlow');

    requestAnimationFrame(() => {
      setTimeout(() => {
        ctabtn.classList.add('styleCtabtnAnimateFlowBACKDEF');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ctabtn.classList.add('styleCtabtnWidth');
            setTimeout(() => {
              ctabtnContent.style.transition = "opacity 300ms";
              ctabtnContent.style.opacity = 1;
            }, 100);
          });
        });
      }, 400);
    });

  }

  const uninitialized = () => {
    ctabtn.classList.remove('styleCtabtninitialize', 'styleCtabtnAnimateFlow', 'styleCtabtnAnimateFlowBACKDEF', 'styleCtabtnWidth');
    ctabtn.style.transition = "cubic-bezier(0.4, 0.0, 1, 1) 400ms all";
    ctabtnContent.style.transition = "opacity 300ms";
    ctabtnContent.style.opacity = 0;
    hasRun = false;
  }

  // Scroll events

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;

    // DEFINE FUNC
    const ResultsUninitialized = () => {
      uninitialized();
      uninitializedDetailsContact();
      ctabtn.style.opacity = 0;
    }

    const Resultsinitialized = () => {
      usingctn();
      ctabtn.style.opacity = 1;
      initialize();
      UsingDetailscta();
      initializeDetailsContact();
    }

    function DEFINEscrollfirst() {
      if (scrollTop >= 200) {
        // pass
        Resultsinitialized();
        console.log('Sectionmain');
      } else if (scrollTop < 200) {
        ResultsUninitialized();
      } else {
        ResultsUninitialized();
      }
    }

    DEFINEscrollfirst();

    const UsingCtaStyle = () => {
      ctabtn.classList.add('styleCtabtnWidth');
      this.document.querySelector('.styleCtabtnWidth').style.width = "230px";
      CtaTextContent.innerHTML = "ตัวอย่างเว็บไซต์เพิ่มเติม";
      ctabtn.style.transform = "translateX(-60%)";
      // Toggle class ig cta
      setTimeout(() => {
        Ctaclasslinksigtoggles.style.opacity = 1;
        Ctaclasslinksigtoggles.classList.add('initializeclasslinksigtoggles');
      }, 500);
    }

    const DisableCtaStyle = () => {
      this.document.querySelector('.styleCtabtnWidth').style.width = "180px";
      CtaTextContent.innerHTML = "ดูเพิ่มเติมได้ใน";
      ctabtn.style.transform = "translateX(-50%)";
      // igctabtn
      Ctaclasslinksigtoggles.classList.remove('initializeclasslinksigtoggles');
      Ctaclasslinksigtoggles.style.opacity = 0;
    }

    if (scrollTop >= 1200) {
      console.log('DeWbcon');
      // operation 2 here
      UsingCtaStyle();
      uninitializedDetailsContact();
    } else {
      DEFINEscrollfirst();
      DisableCtaStyle();
    }

    const elementId = 'bg';
    const targetElement = document.getElementById(elementId);
    const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
    const elementHeight = targetElement.offsetHeight;

    if (scrollTop >= elementTop - window.innerHeight + (elementHeight / 4)) {
      initialize();
    } else {
      uninitialized();
    }

    const bgElement = document.getElementById('bg');
    const bgElementTop = bgElement.getBoundingClientRect().top + window.scrollY;
    const bgElementHeight = bgElement.offsetHeight;

    if (scrollTop >= bgElementTop + bgElementHeight) {
      console.log('whyweb');
    }
  });
});
