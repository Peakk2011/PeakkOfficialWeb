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
        headerSidebar.style.transition = "transform 500ms cubic-bezier(0.4, 0.0, 0.2, 1)";
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
        backgroundBlur.style.transition = "transform 750ms cubic-bezier(0.4, 0.0, 0.2, 1)";
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


// Sidebar hover click effect

document.querySelectorAll('.hdsbcnlk li a').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.stopPropagation();
    if (this.classList.contains('clicked')) {
      this.classList.remove('clicked');
    } else {
      document.querySelectorAll('.hdsbcnlk li a').forEach(function (el) {
        el.classList.remove('clicked');
      });
      this.classList.add('clicked');
    }
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.hdsbcnlk li a').forEach(function (el) {
    el.classList.remove('clicked');
  });
});
