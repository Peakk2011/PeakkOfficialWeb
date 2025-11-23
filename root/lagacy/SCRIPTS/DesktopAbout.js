// Sidebar toggle

const iconsRes = document.getElementById("iconsRes");
const SidebarNew = document.getElementById("SidebarNew");
const backgroundblur = document.getElementById("backgroundblur");
const SidebarIns = document.getElementById("SidebarCon");

iconsRes.addEventListener("click", () => {
  backgroundblur.style.display = "block";
  SidebarNew.style.transform = "translateX(0px)";
  setTimeout(() => {
    SidebarIns.style.transform = "translateX(0px)";
    SidebarIns.style.opacity = "1";
    SidebarIns.style.filter = "blur(0px)";
  }, 650);
  setTimeout(() => {
    backgroundblur.style.opacity = "1";
  }, 100);
})

backgroundblur.addEventListener("click", () => {
  // backgroundblur.style.transform = "translateX(-100%)";
  SidebarNew.style.transform = "translateX(-300px)"
  backgroundblur.style.opacity = "0";

  setTimeout(() => {
    SidebarIns.style.transform = "translateX(-50px)";
    SidebarIns.style.opacity = "0";
    SidebarIns.style.filter = "blur(5px)";

    setTimeout(() => {
      backgroundblur.style.display = "none";
    }, 400);
  }, 30);
})

// Theme switcher

document.addEventListener("DOMContentLoaded", () => {

  const themeswic = document.querySelector(".themeswic");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
  }

  themeswic.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
  });

});

// Cursor from gsap import *

const { gsap } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isStuck = false;
let mouse = {
  x: -100,
  y: -100,
};

// Just in case you need to scroll
let scrollHeight = 0;
window.addEventListener('scroll', function (e) {
  scrollHeight = window.scrollY
})

let cursorOuterOriginalState = {
  width: cursorOuter.getBoundingClientRect().width,
  height: cursorOuter.getBoundingClientRect().height,
};
const buttons = document.querySelectorAll("main button");

buttons.forEach((button) => {
  button.addEventListener("pointerenter", handleMouseEnter);
  button.addEventListener("pointerleave", handleMouseLeave);
});

document.body.addEventListener("pointermove", updateCursorPosition);
document.body.addEventListener("pointerdown", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 2,
  });
});
document.body.addEventListener("pointerup", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
});

function updateCursorPosition(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
}

function updateCursor() {
  gsap.set(cursorInner, {
    x: mouse.x,
    y: mouse.y,
  });

  if (!isStuck) {
    gsap.to(cursorOuter, {
      duration: 0.15,
      x: mouse.x - cursorOuterOriginalState.width / 2,
      y: mouse.y - cursorOuterOriginalState.height / 2,
    });
  }

  requestAnimationFrame(updateCursor);
}

updateCursor();

function handleMouseEnter(e) {
  isStuck = true;
  const targetBox = e.currentTarget.getBoundingClientRect();
  gsap.to(cursorOuter, 0.2, {
    x: targetBox.left,
    y: targetBox.top + scrollHeight,
    width: targetBox.width,
    height: targetBox.width,
    borderRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  });
}

function handleMouseLeave(e) {
  isStuck = false;
  gsap.to(cursorOuter, 0.2, {
    width: cursorOuterOriginalState.width,
    height: cursorOuterOriginalState.width,
    borderRadius: "50%",
    backgroundColor: "transparent",
  });
}

// Mouse interactive 

const Navlink = document.querySelectorAll(".navbarlinks > li > a");
const Strtext = document.querySelectorAll(".Strtext li a");
const AllpcBtn = document.querySelectorAll(".AllpcBtn a");

const maintextlinkbutton = document.getElementById('maintextlinkbutton');

// Add a click event listener to each one
Navlink.forEach(Navlink => {
  Navlink.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 5,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  });
  Navlink.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  });
});

// Add a click event listener to each one
AllpcBtn.forEach(AllpcBtn => {
  AllpcBtn.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 5,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  });
  AllpcBtn.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  });
});

// Add a click event listener to each one

Strtext.forEach(Strtext => {
  Strtext.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 5,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  });
  Strtext.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  });
});

maintextlinkbutton.addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
maintextlinkbutton.addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});