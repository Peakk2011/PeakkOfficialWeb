// Effects
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

document.addEventListener('DOMContentLoaded', () => {
  // Reset initial states
  gsap.set(".headercon", { opacity: 1, y: 0, filter: "blur(0px)" });
  gsap.set(".SvgFadeColor", { opacity: 1, y: 0, scaleY: 1 });
  gsap.set(".Mainsecwhywebtext", { opacity: 0, scale: 0.8, filter: "blur(10px)" });
  gsap.set(".Spansecwhywebtext", { opacity: 0, scale: 0.8, filter: "blur(2.5px)" });
  gsap.set(".secwhywebtext p", { opacity: 0, scale: 0.8, filter: "blur(1.5px)" });

  // Header content animation
  gsap.to(".headercon", {
    scrollTrigger: {
      trigger: ".headercon",
      start: "center center",
      end: "bottom top",
      scrub: 1,
      toggleActions: "play none none reverse"
    },
    y: -200,
    filter: "blur(5px)",
    immediateRender: false
  });

  // SVG color fade animation
  gsap.to(".SvgFadeColor", {
    scrollTrigger: {
      trigger: ".SvgFadeColor",
      start: "center center",
      end: "bottom top",
      scrub: 1,
      pin: "headercon",
      toggleActions: "play none none reverse"
    },
    y: 200,
    scaleY: 2,
    ease: "power3.out",
    immediateRender: false
  });

  // Main text animation
  gsap.to(".Mainsecwhywebtext", {
    scrollTrigger: {
      trigger: ".Mainsecwhywebtext",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 1,
    ease: "power3.out",
    immediateRender: false
  });

  // Span text animation
  gsap.to(".Spansecwhywebtext", {
    scrollTrigger: {
      trigger: ".Spansecwhywebtext",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    immediateRender: false
  });

  // Paragraph text animation
  gsap.to(".secwhywebtext p", {
    scrollTrigger: {
      trigger: ".secwhywebtext p",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    immediateRender: false
  });
});

gsap.to(".secwhywebtext", {
  scrollTrigger: {
    trigger: ".secwhywebtext",
    start: "top+=500 center",
    end: "+=500",
    scrub: true,
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  filter: "blur(7px)",
  y: -200,
  duration: 1
});

// Fadeout
gsap.to(".secwhywebabcon", {
  scrollTrigger: {
    trigger: ".secwhywebabcon",
    start: "top+=600 center",
    end: "+=550",
    scrub: true,
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  filter: "blur(15px)",
  duration: 1,
  ease: "power3.out",
});

// Image Fade

gsap.from(".secwhywbimg", {
  scrollTrigger: {
    trigger: ".secwhywbimg",
    start: "top-=260 center",
    end: "+=420",
    scrub: 0.5, // ลด scrub เพื่อลดความเร็ว (ค่าน้อยลงให้ smooth ขึ้น)
    toggleActions: "play none none reverse",
    markers: true // เพิ่ม markers เพื่อ debug จุดเริ่ม-จบ
  },
  x: 250,
  opacity: 0,
  duration: 1.5, // เพิ่ม duration ให้เคลื่อนไหวช้าลง
  ease: "power1.out", // ใช้ ease ที่นุ่มนวลขึ้น เช่น power1
  filter: "blur(10px)",
  immediateRender: false
});

// Animation ของเนื้อหาในส่วนของ howweb

const textChange = gsap.timeline({
  scrollTrigger: {
    trigger: '.howwebwrapper',
    start: 'center center',
    end: '+=500',
    scrub: true,
    pin: true,
  },
})
  .to('.howwebwrapper', { duration: 1 })
  .set('.HighlightWords', { innerHTML: 'สำหรับธุรกิจของคุณ' }, 0.33)
  .set('.HighlightWords', { innerHTML: 'สำหรับงานส่วนตัว' }, 0.66)

function Screen(ChengeScrollable) {
  if (ChengeScrollable.matches) {
  } else {
    gsap.to(".howwebimage", {
      scrollTrigger: {
        trigger: ".howwebimage",
        start: "center center",
        end: "bottom top",
        scrub: 1,
      },
      scale: 0.8
    });
  }
}

var ChengeScrollable = window.matchMedia("(max-width: 1460px)")
Screen(ChengeScrollable);
ChengeScrollable.addEventListener("change", function () {
  Screen(ChengeScrollable);
});

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

document.querySelectorAll([
  ".navbarlinks > li > a",
  "#Pkidbutton",
  "#secwhywebabtextcon",
  "#ctabtncontent",
  "#classlinksigtoggles",
  "#DoWbDesLinks",
  "#whywebbtn",
  "#ctablock",
  "#hiredetailstextlin",
  "#Ytpeakkofficial",
  "#Navbarlinkshover",
  "#ThemeSwitcher"
].join(',')).forEach(link => gsapHoverEffect(link, link.id === "Ytpeakkofficial" || link.id === "Navbarlinkshover" ? 0 : 5, 1));

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
  const transformValue = (key === "c" && !isOpen) ? "translateX(0)" : ((key === "Escape" || key === "Backspace") && isOpen) ? "translateX(-300px)" : null;

  if (transformValue !== null) {
    headerSidebar.style.transition = transitions;
    headerSidebar.style.transform = transformValue;
  }

  setTimeout(() => isAnimating = false, 150);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    ClsSbThsw();
  }
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

// Animation Header bob

const BlobContent = document.getElementById("bouncing-blobs");
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

// Adjust Header Text on scroll backgrund

BlobContent.style.opacity = "0";
BlobContent.style.transition = "cubic-bezier(0.4, 0.0, 0.2, 1) 600ms all";

// Change header text on scroll
const updateNavbar = () => {
  const Sectionmain = document.getElementById('Sectionmain');
  const SectionmainTop = Sectionmain.offsetTop;
  const SectionmainBottom = SectionmainTop + Sectionmain.offsetHeight;

  const whyweb = document.getElementById('whyweb');
  const whywebTop = whyweb.offsetTop;
  const whywebBottom = whywebTop + whyweb.offsetHeight;

  if (window.scrollY >= whywebBottom) {
    navbar.textContent = 'จะมีเว็บไซต์ได้ยังไง';
  } else if (window.scrollY >= whywebTop) {
    navbar.textContent = 'จะมีเว็บไซต์ได้ยังไง';
  } else if (window.scrollY >= SectionmainBottom) {
    navbar.textContent = 'มีเว็บไซต์เพื่ออะไร';
  } else if (window.scrollY >= SectionmainTop) {
    navbar.textContent = 'มีเว็บไซต์เพื่ออะไร';
  } else {
    navbar.textContent = 'หน้าแรก';
  }
};

setTimeout(() => {
  BlobContent.style.opacity = "1";
}, 4600);

// Check header large screen
const updateNavbarLargeScreen = () => {
  const highlightClass = 'highlight';
  document.querySelectorAll(`.${highlightClass}`).forEach(el => el.classList.remove(highlightClass));

  const targetSection = document.getElementById('whyweb');
  const hireDetailsSection = document.getElementById('hiredetails');
  const navbarHeight = document.querySelector('nav').offsetHeight;

  if (hireDetailsSection && window.scrollY >= hireDetailsSection.offsetTop - navbarHeight) {
    links[3]?.classList.add(highlightClass);
  } else if (targetSection && window.scrollY >= targetSection.offsetTop - navbarHeight) {
    links[2]?.classList.add(highlightClass);
    setDefaultNavbarProperties();
  } else if (window.scrollY >= window.innerHeight) {
    links[1]?.classList.add(highlightClass);
    setDefaultNavbarProperties();
  } else {
    Object.assign(navbar.style, { color: 'var(--HighlightNavbarColor)', borderBottom: "var(--HighlightNavbarColor) solid 2px" });
  }
};

const setDefaultNavbarProperties = () => {
  Object.assign(navbar.style, { color: '#424242', borderBottom: "none" });
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

// Loading screen

const setOpacity = (id, opacity) => document.getElementById(id).style.opacity = opacity;
MainNavbar.style.transform = "translatey(-100px)";
MainNavbar.style.opacity = "0";
["headernav", "Pkidbutton", "headercon", "Hdbgwb"].forEach(id => setOpacity(id, "0"));

setTimeout(() => {
  MainNavbar.style.transform = "translatey(0px)";
  MainNavbar.style.opacity = "1";
  ["headernav", "Pkidbutton", "headercon", "Hdbgwb"].forEach(id => setOpacity(id, "1"));
}, 2250);

// Mouse interactive

function UsingMouseMov() {
  if (window.innerWidth < 1200) {
    return;
  }

  setTimeout(() => {
    const element = document.querySelector('.officialsvg');
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // ค่าความเร็วและความลื่นไหล
    const smoothness = 0.25;
    const maxRotation = 7;
    const maxTilt = 7;

    function updatePosition(e) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = (e.clientX - centerX) * 0.2;
      targetY = (e.clientY - centerY) * 0.2;
    }

    function animate() {
      // คำนวณการเคลื่อนที่แบบลื่นไหล
      currentX += (targetX - currentX) * smoothness;
      currentY += (targetY - currentY) * smoothness;

      // คำนวณการหมุนและเอียง
      const rotateZ = (currentX / (window.innerWidth * 0.2)) * maxRotation;
      const rotateX = -(currentY / (window.innerHeight * 0.2)) * maxTilt;

      // ใช้การแปลงรูปแบบ
      element.style.transform = `
          translate(-50%, -50%) 
          translate(${currentX}px, ${currentY}px)
          rotateZ(${rotateZ}deg) 
          rotateX(${rotateX}deg)
      `;

      requestAnimationFrame(animate);
    }

    // ตั้งค่าการติดตามเมาส์
    document.addEventListener('mousemove', updatePosition);
    animate();

    // ปรับตำแหน่งกลางเมื่อหน้าต่างเปลี่ยนขนาด
    window.addEventListener('resize', () => {
      currentX = 0;
      currentY = 0;
      element.style.transform = `translate(-50%, -50%)`;
    });

  }, 8000);
}

function UsingFuncMouseMov() {
  if (window.innerWidth >= 1465) {
    // UsingMouseMov();
  }
}

window.onload = UsingFuncMouseMov;
window.onresize = UsingFuncMouseMov;

// Cta 

document.addEventListener('DOMContentLoaded', function () {

  const ctabtn = document.getElementById("ctabtn");
  const ctabtnContent = document.getElementById("ctabtncontent");
  const detailscontact = document.getElementById("detailscontact");
  const CtaTextContent = document.getElementById("CtaTextContent");
  const Ctaclasslinksigtoggles = document.getElementById("classlinksigtoggles");

  Ctaclasslinksigtoggles.addEventListener("click", () => {
    window.open("https://www.instagram.com/peakkofficial/", "_top");
  })

  const disable = () => {
    ctabtn.disabled = true;
    Object.assign(ctabtn.style, { opacity: '0' });
  }

  const enable = () => {
    ctabtn.disabled = false;
    Object.assign(ctabtn.style, { opacity: '1' });
  }

  // enableDetailsContact

  const enableDetailsContact = () => {
    detailscontact.disableDetailsContact = false;
    Object.assign(detailscontact.style, { opacity: '1' });
  }

  const disableDetailsContact = () => {
    detailscontact.disableDetailsContact = true;
    Object.assign(detailscontact.style, { opacity: '0' });
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

  const HandleScrollEvents = () => {
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
      } else if (scrollTop < 200) {
        ResultsUninitialized();
      } else {
        ResultsUninitialized();
      }
    }

    DEFINEscrollfirst();

    // ctastyle

    const UsingCtaStyle = () => {
      ctabtn.classList.add('styleCtabtnWidth');
      document.querySelectorAll('.styleCtabtnWidth').forEach(widthChenge => {
        widthChenge.style.width = "230px";
      });
      CtaTextContent.innerHTML = "ตัวอย่างเว็บไซต์เพิ่มเติม";
      ctabtn.style.transform = "translateX(-60%)";
      // Toggle class ig cta
      Ctaclasslinksigtoggles.style.opacity = 1;
      Ctaclasslinksigtoggles.classList.add('initializeclasslinksigtoggles');
    }

    const DisableCtaStyle = () => {
      document.querySelectorAll('.styleCtabtnWidth').forEach(widthChenge => {
        widthChenge.style.width = "180px";
      });
      CtaTextContent.innerHTML = "ดูเพิ่มเติมได้ใน";
      ctabtn.style.transform = "translateX(-50%)";
      // igctabtn
      Ctaclasslinksigtoggles.classList.remove('initializeclasslinksigtoggles');
      Ctaclasslinksigtoggles.style.opacity = 0;
    }

    if (scrollTop >= 1200) {
      // operation 2 here
      UsingCtaStyle();
      uninitializedDetailsContact();
    } else {
      DEFINEscrollfirst();
      DisableCtaStyle();
    }

    const elementId = 'whyweb';
    const targetElement = document.getElementById(elementId);
    const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
    const elementHeight = targetElement.offsetHeight;

    if (scrollTop >= elementTop - window.innerHeight + (elementHeight / 4)) {
      initialize();
    } else {
      uninitialized();
    }

    const bgElement = document.getElementById('whyweb');
    const bgElementTop = bgElement.getBoundingClientRect().top + window.scrollY;
    const bgElementHeight = bgElement.offsetHeight;

    // whyweb section
    if (scrollTop >= bgElementTop + bgElementHeight) {
      DEFINEscrollfirst();
      DisableCtaStyle();
      uninitializedDetailsContact();
      CtaTextContent.innerHTML = "เลื่อนลงเพื่อดูรายละเอียด";
      // adjust width
      document.querySelectorAll('.styleCtabtnWidth').forEach(widthChenge => {
        widthChenge.style.width = "230px";
      });
    } else {

    }

  }

  window.addEventListener('scroll', HandleScrollEvents);
  window.addEventListener('touchmove', HandleScrollEvents);

});

// Theme Switcher
let CurrentTheme = document.getElementById("CurrentTheme");
let ObjectUsingCloseThemebtn = document.getElementById("ObjectUsingCloseThemebtn");
const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 'ธีมเริ่มต้น';

const applyTheme = (theme) => {
  const target = document.querySelector(`[data-theme="${theme}"]`);
  if (!target) {
    console.log(`Define Theme 0x00: ${theme}`);
    return;
  }
  document.documentElement.setAttribute("data-selected-theme", theme);

  // Check if there is an already pressed button and set 'aria-pressed' to 'false'
  const previouslyPressedButton = document.querySelector(pressedButtonSelector);
  if (previouslyPressedButton) {
    previouslyPressedButton.setAttribute('aria-pressed', 'false');
  }

  target.setAttribute('aria-pressed', 'true');
};

const handleThemeSelection = (event) => {
  let target = event.target;

  while (target && !target.classList.contains('ThemeBox')) {
    target = target.parentElement;
  }

  if (!target) {
    console.log('No valid target found.');
    return;
  }

  const isPressed = target.getAttribute('aria-pressed');
  const theme = target.getAttribute('data-theme');

  console.log(`Theme clicked: ${theme}, Is pressed: ${isPressed}`);

  if (isPressed !== "true") {
    applyTheme(theme);
    localStorage.setItem('selected-theme', theme);
    HandleThemeContent(); // Add this line to update content when theme changes
    CurrentTheme.innerHTML = `เปลี่ยนธีมเป็น: ${theme}`; // Update innerHTML when theme changes
    console.log(`Theme applied: ${theme}`);
  } else {
    console.log(`Theme already applied: ${theme}`);
    CurrentTheme.innerHTML = `ธีมถูกนำไปใช้แล้ว: ${theme}`; // Update innerHTML when theme is already applied
  }
}

const setInitialTheme = () => {
  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme && savedTheme !== defaultTheme) {
    applyTheme(savedTheme);
    CurrentTheme.innerHTML = `ธีมเริ่มต้นตั้งไว้ที่: ${savedTheme}`; // Update innerHTML on initial theme set
    console.log(`Set: ${savedTheme}`);
  }
};

setInitialTheme();

const PostSvg = document.getElementById("secwhywbimg");

const HandleThemeContent = () => {
  const selectedTheme = document.documentElement.getAttribute("data-selected-theme");
  // ชื่อแต่ล่ะธีม sync ขึ้นอยู่กับ data-theme ใน HTML และ Css
  if (selectedTheme === "ธีมเริ่มต้น") {
    PostSvg.src = "./Image/SvgMainbrowserdark.svg";
  } else if (selectedTheme === "ธีมเริ่มต้นสว่าง") {
    PostSvg.src = "./Image/SvgMainbrowserLight.svg";
  } else if (selectedTheme === "ธีมสีชมพูอ่อน") {
    PostSvg.src = "./Image/SvgMainbrowserLight.svg";
  } else if (selectedTheme === "ธีมสีมะนาวอ่อน") {
    PostSvg.src = "./Image/SvgMainbrowserLight.svg";
  } else if (selectedTheme === "ธีมสีม่วงเข้ม") {
    PostSvg.src = "./Image/SvgMainbrowserdark.svg";
  } else {
    console.log(`${selectedTheme} 0x00`);
  }
}

HandleThemeContent();

// ตั้งค่าสำหรับการแสดงผล Theme เมื่อยังไม่ถูกตั้งค่าใน Local Storage ให้มันแสดงข้อความ

const themeSwitcher = document.querySelector('.PickTheme');
const usingButtonThemeBoxContent = themeSwitcher.querySelectorAll('.ThemeBox');
const backgroundblurfortheme = document.getElementById("backgroundblurfortheme");

usingButtonThemeBoxContent.forEach((button) => {
  button.addEventListener('click', handleThemeSelection);
});

function UsingBackgroudBlur() {
  backgroundblurfortheme.style.transform = "translateY(-100vh)";
  backgroundblurfortheme.style.display = "block";
  setTimeout(() => {
    backgroundblurfortheme.style.transform = "translateY(0vh)";
    backgroundblurfortheme.style.opacity = "1";
  }, 5);
}

function DisableBGBLUR() {
  backgroundblurfortheme.style.transform = "translateY(-100vh)";
  setTimeout(() => {
    backgroundblurfortheme.style.opacity = "0";
    setTimeout(() => {
      backgroundblurfortheme.style.display = "none";
    }, 300);
  }, 250);
}

const containerHover = document.getElementById("containerHover");
const PickThemeContainer = document.getElementById("PickThemeContainer");
const ButtonThemeToggle = document.getElementById("ButtonThemeToggle");

const usingThemeContainer = () => {
  PickThemeContainer.style.transform = "translateY(0px)";
  UsingBackgroudBlur();
}

const disableThemeContainer = () => {
  PickThemeContainer.style.transform = "translateY(-320px)";
  DisableBGBLUR();
}

// DEFINE mobile using theme switcher

const MBDEFINEusingTheme = () => {
  PickThemeContainer.style.transform = "translateY(0px)";
}

const MBDEFINEdisabledtheme = () => {
  PickThemeContainer.style.transform = "translateY(-320px)";
  DisableBGBLUR();
}

containerHover.addEventListener("mouseenter", usingThemeContainer);
containerHover.addEventListener("mouseleave", disableThemeContainer);
PickThemeContainer.addEventListener("mouseleave", disableThemeContainer);
PickThemeContainer.addEventListener("mouseenter", usingThemeContainer);
ButtonThemeToggle.addEventListener("click", usingThemeContainer);
containerHover.addEventListener("touchstart", usingThemeContainer);
containerHover.addEventListener("touchcancel", disableThemeContainer);
PickThemeContainer.addEventListener("touchcancel", disableThemeContainer);
PickThemeContainer.addEventListener("touchstart", usingThemeContainer);
// Define mq mobile ui

function checkScreenWidth() {
  var screenWidth = window.innerWidth;

  if (screenWidth < 600) {
    ButtonThemeToggle.addEventListener("click", MBDEFINEusingTheme);
    ObjectUsingCloseThemebtn.addEventListener("click", MBDEFINEdisabledtheme);
    // -> เลือนขวาเพื่อหาธีมที่ชอบและใช่สําหรับคุณ
    document.getElementById("DEFINEtextthemeswit").innerHTML = "-> เลือนขวาเพื่อหาธีมที่ชอบและใช่สําหรับคุณ";
  } else {
    ObjectUsingCloseThemebtn.addEventListener("click", disableThemeContainer);
    // Add text theme for desiption
    document.getElementById("DEFINEtextthemeswit").innerHTML = "-> กด Shift ค้างแล้ว Scroll เมาส์จะเป็นการเลือนเนื้อหาที่มองไม่เห็น";
  }

}

checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);

// Replace old theme switcher as new theme switcher to lie javascript that have many theme to use same theme to define a new function that make user insterface more accessible

const activeButtonSelector = '[data-theme][aria-pressed="true"]';
const initialTheme = 'green';

const switchTheme = (selectedTheme) => {
  const selectedButton = document.querySelector(`[data-theme="${selectedTheme}"]`);
  document.documentElement.setAttribute("data-selected-theme", selectedTheme);
  const currentPressedButton = document.querySelector(activeButtonSelector);
  if (currentPressedButton) {
    currentPressedButton.setAttribute('aria-pressed', 'false');
  }
  if (selectedButton) {
    selectedButton.setAttribute('aria-pressed', 'true');
  } else {
    console.error(`Button with data-theme="${selectedTheme}" not found`);
  }
};

// Handlethemeselection == this
const handleThemeButtonClick = (event) => {
  const clickedButton = event.target;
  const isButtonPressed = clickedButton.getAttribute('aria-pressed');
  const newTheme = clickedButton.getAttribute('data-theme');

  if (newTheme === "null") {
    console.log('New theme as 0x00');
    return;
  }

  if (isButtonPressed !== "true") {
    switchTheme(newTheme);
    localStorage.setItem('selected-theme', newTheme);
    // console.log(`Theme switched to: ${newTheme}`); // Add this line to log the selected theme
    CurrentTheme.innerHTML = `เปลี่ยนธีมเป็น: ${newTheme}`; // Update innerHTML when theme changes
  }
}

const initializeTheme = () => {
  const storedTheme = localStorage.getItem('selected-theme');
  if (storedTheme && storedTheme !== initialTheme) {
    switchTheme(storedTheme);
  }
};

initializeTheme();

const themeContainer = document.querySelector('.Mbthswlinks');
const themeButtons = themeContainer.querySelectorAll('.MbThswlinksCon');

themeButtons.forEach((button) => {
  button.addEventListener('click', handleThemeButtonClick);
});

// DONE! Theme switcher 👌✅
// 0x00 for null

// Call
const MBthemetoggle = document.getElementById("MBthemetoggle");
const mobileThemeSwitcher = document.getElementById("mobileThemeSwitcher")

function HandleThemeContentSwitcher() {
  mobileThemeSwitcher.style.transform = "translateX(0px)";
}

function ClsSbThsw() {
  mobileThemeSwitcher.style.transform = "translateX(-300px)";
}

const usingSBThemeSwitcher = document.getElementById('usingSBThemeSwitcher');

usingSBThemeSwitcher.addEventListener("click", HandleThemeContentSwitcher)
MBthemetoggle.addEventListener("click", HandleThemeContentSwitcher);