(function () {
  var curYPos, curXPos, curDown;

  window.addEventListener('mousemove', function (e) {
    if (curDown) {
      window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
    }
  });

  window.addEventListener('mousedown', function (e) {
    curYPos = e.pageY;
    curXPos = e.pageX;
    curDown = true;
  });

  window.addEventListener('mouseup', function (e) {
    curDown = false;
  });
})()

document.addEventListener("DOMContentLoaded", () => {
  // dynamic navbar color change

  var MainNavbar = document.getElementById("MainNavbar");
  var callinaction = document.getElementById("callinaction");

  MainNavbar.style.transform = "translatey(-100px)";
  callinaction.style.transform = "translatey(150px)";
  MainNavbar.style.opacity = "0";
  callinaction.style.opacity = "0";

  setTimeout(() => {
    MainNavbar.style.transform = "translatey(0px)";
    callinaction.style.transform = "translatey(0px)";
    MainNavbar.style.opacity = "1";
    callinaction.style.opacity = "1";
  }, 3000);

  function DefaultScroll() {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
      MainNavbar.style.backdropFilter = "blur(60px)";
      MainNavbar.style.webkitBackdropFilter = "blur(60px)";
    } else {
      MainNavbar.style.backdropFilter = "blur(0px)";
      MainNavbar.style.webkitBackdropFilter = "blur(0px)";
    }
  }

  window.onscroll = function () {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const styles = [
      { limit: 3400, background: "rgb(8, 8, 8, 0.6)" },
      { limit: 2800, background: "rgb(6, 6, 6, 0.5)" },
      { limit: 1900, background: "rgb(8, 8, 8, 0.4)" },
      { limit: 1200, background: "rgb(13, 13, 13)" },
      { limit: 200, background: "transparent", callback: DefaultScroll }
    ];

    for (const style of styles) {
      if (scrollTop >= style.limit) {
        MainNavbar.style.background = style.background;
        MainNavbar.style.backdropFilter = "blur(60px)";
        MainNavbar.style.webkitBackdropFilter = "blur(60px)";
        if (style.callback) style.callback();
        return;
      }
    }

    MainNavbar.style.background = "transparent";
    MainNavbar.style.backdropFilter = "blur(0px)";
    MainNavbar.style.webkitBackdropFilter = "blur(0px)";
  };

  // Theme switcher

  const btn = document.querySelector(".btn-toggle");
  const ResThemeswic = document.querySelector(".ResThemeswic");
  const ResThemeswic2 = document.querySelector(".ResThemeswic2");

  // theme toggle

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
      // console.log("dark mode is active");
    } else {
      console.log("dark mode is active");
    }

    localStorage.setItem("theme", theme);

    applyNavbarStyles(theme);
  });

  ResThemeswic.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);

    applyNavbarStyles(theme);
  });

  ResThemeswic2.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
      // console.log("dark mode is active");
    } else {
      console.log("dark mode is active");
    }

    localStorage.setItem("theme", theme);

    applyNavbarStyles(theme);
  });

  function applyNavbarStyles(theme) {
    window.onscroll = function () {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const darkStyles = [
        { limit: 7800, background: "rgb(253, 253, 243, 0.855)" },
        { limit: 7150, background: "rgb(255, 255, 249, 0.855)" },
        { limit: 5500, background: "rgb(253, 253, 243, 0.855)" },
        { limit: 3450, background: "rgb(255, 255, 249, 0.855)" },
        { limit: 1200, background: "rgb(253, 253, 243, 0.855)" },
        { limit: 200, background: "transparent", callback: DefaultScroll }

        // Dynamic cta button hover sticky


      ];
      const lightStyles = [
        { limit: 3400, background: "rgb(8, 8, 8, 0.6)" },
        { limit: 2800, background: "rgb(6, 6, 6, 0.5)" },
        { limit: 1900, background: "rgb(8, 8, 8, 0.4)" },
        { limit: 1200, background: "rgb(13, 13, 13)" },
        { limit: 200, background: "transparent", callback: DefaultScroll }
      ];

      const styles = theme === "dark" ? darkStyles : lightStyles;

      for (const style of styles) {
        if (scrollTop >= style.limit) {
          MainNavbar.style.background = style.background;
          MainNavbar.style.backdropFilter = "blur(60px)";
          MainNavbar.style.webkitBackdropFilter = "blur(60px)";
          if (style.callback) style.callback();
          return;
        }
      }

      MainNavbar.style.background = "transparent";
      MainNavbar.style.backdropFilter = "blur(0px)";
      MainNavbar.style.webkitBackdropFilter = "blur(0px)";
    };

    // Trigger the scroll event to apply styles immediately
    window.onscroll();
  }

  const theme = localStorage.getItem("theme") || "light";
  applyNavbarStyles(theme);

});

// other
const PriceReveal = document.getElementById("PriceReveal");

PriceReveal.addEventListener('click', () => {
  overlayPrice.style.display = "block";
  setTimeout(() => {
    overlayPrice.style.opacity = "1";
  }, 50);
})

PriceReveal.addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
PriceReveal.addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

let overlayPrice = document.getElementById("overlayPrice");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

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

const Navlink = document.querySelectorAll(".navbarlinks > li > a");
const PriceLinks = document.querySelectorAll(".PriceBenefit li a");
const PriceBtnLink = document.querySelectorAll(".PriceTagRecButton a")
const PeakkofficialExpainText = document.getElementById("PeakkofficialExpainText");
const WeDoLinks = document.querySelectorAll(".WeDoLinks > li a");
const LinkksPrice = document.getElementById("LinkksPrice");
const VisitAllPrice = document.getElementById("VisitAllPrice");
const AllpcBtn = document.querySelectorAll(".AllpcBtn a")

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
PriceBtnLink.forEach(PriceBtnLink => {
  PriceBtnLink.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 6,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  });
  PriceBtnLink.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  });
});

// Add a click event listener to each one
PriceLinks.forEach(PriceLinks => {
  PriceLinks.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 5,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });

    // console.log("bububaba");
    // overlayPrice.style.display = "block";
    // setTimeout(() => {
    //   overlayPrice.style.opacity = "1";    
    // }, 300);

    PriceLinks.style.opacity = "1";
  });

  PriceLinks.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });

    PriceLinks.style.opacity = "30%";

  });

  PriceLinks.addEventListener('click', () => {
    console.log("bububaba");
    overlayPrice.style.display = "block";
    setTimeout(() => {
      overlayPrice.style.opacity = "1";
    }, 50);
  });

});

PeakkofficialExpainText.addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
PeakkofficialExpainText.addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

VisitAllPrice.addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
VisitAllPrice.addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

LinkksPrice.addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
LinkksPrice.addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

document.getElementById('infoabout').addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 8,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
document.getElementById('infoabout').addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

document.getElementById("sortmewbtn").addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
document.getElementById("sortmewbtn").addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

document.getElementById("intromewbtn").addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
document.getElementById("intromewbtn").addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

document.getElementById("callinactioncon").addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
document.getElementById("callinactioncon").addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

document.getElementById("footerlink").addEventListener('mouseenter', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 5,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
});
document.getElementById("footerlink").addEventListener('mouseleave', () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
});

WeDoLinks.forEach(WeDoLinks => {
  WeDoLinks.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 5,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  });
  WeDoLinks.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  });
});

document.querySelectorAll(".aboutconbottombtn > a").forEach(WeDoLinks => {
  WeDoLinks.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 5,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  });
  WeDoLinks.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  });
});

ExpChoOverlay = document.getElementById("ExpChoOverlay");

function CloseOverlayoff() {
  overlayPrice.style.opacity = "0";
  setTimeout(() => {
    overlayPrice.style.display = "none";
  }, 300);
}

function OpenExpOverlay() {
  ExpChoOverlay.style.display = "block";
  setTimeout(() => {
    ExpChoOverlay.style.opacity = "1";
    ExpChoOverlay.style.transform = "translate(-50%, -50%) scale(1)";
  }, 50);
}

function CloseExpOverlay() {

}


// Slider

const container = document.querySelector('.card');
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown', e => mouseIsDown(e));
container.addEventListener('mouseup', e => mouseUp(e))
container.addEventListener('mouseleave', e => mouseLeave(e));
container.addEventListener('mousemove', e => mouseMove(e));

function mouseIsDown(e) {
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;
}
function mouseUp(e) {
  isDown = false;
}
function mouseLeave(e) {
  isDown = false;
}
function mouseMove(e) {
  if (isDown) {
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;
    container.scrollTop = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;

  }
}

setTimeout(() => {
  CircleHeader.style.opacity = "20%";
}, 2500);

// 200 1200 3450 5500 7150

// const textnavbar = document.getElementById("Navbartexth1");

// window.addEventListener("scroll", () => {
//   // ตรวจสอบความกว้างของหน้าจอว่ามากกว่า 1000px หรือไม่
//   if (window.innerWidth <= 1000) return;

//   const scrollY = window.scrollY;

//   let newContent = "พีคออฟฟิเชียล";

//   if (scrollY >= 6500) newContent = "โปรโมชั่นของพวกเรา";
//   else if (scrollY >= 5780) newContent = "อยากได้เว็บที่ดีที่สุด";
//   else if (scrollY >= 4700) newContent = "ราคาเว็บทั้งหมด";
//   else if (scrollY >= 3450) newContent = "ราคาเว็บไซต์";
//   else if (scrollY >= 2850) newContent = "พวกเราคือใคร";
//   else if (scrollY >= 1845) newContent = "สิ่งที่จะทําเสนอ";
//   else if (scrollY >= 1200) newContent = "จากคนที่รับทําเว็บ";

//   if (textnavbar.textContent !== newContent) {
//     textnavbar.textContent = newContent;
//   }
// });

const textnavbar = document.getElementById("Navbartexth1");

const updateNavbarText = () => {
  const scrollY = window.scrollY;
  const windowWidth = window.innerWidth;

  let newContent = "พีคออฟฟิเชียล";

  if (windowWidth > 1000) {
    newContent = "พีคออฟฟิเชียล";
    if (scrollY >= 6500) newContent = "โปรโมชั่นของพวกเรา";
    else if (scrollY >= 5780) newContent = "อยากได้เว็บที่ดีที่สุด";
    else if (scrollY >= 4700) newContent = "ราคาเว็บทั้งหมด";
    else if (scrollY >= 3450) newContent = "ราคาเว็บไซต์";
    else if (scrollY >= 2850) newContent = "พวกเราคือใคร";
    else if (scrollY >= 1845) newContent = "สิ่งที่จะทําเสนอ";
    else if (scrollY >= 1200) newContent = "จากคนที่รับทําเว็บ";
  } else {
    if (scrollY >= 8000) newContent = "โปรโมชั่นของของเรา";
    else if (scrollY >= 7100) newContent = "อยากได้เว็บที่ดีที่สุด";
    else if (scrollY >= 5380) newContent = "ราคาเว็บทั้งหมด";
    else if (scrollY >= 3400) newContent = "ราคาเว็บไซต์";
    else if (scrollY >= 2500) newContent = "พวกเราคือใคร";
    else if (scrollY >= 1425) newContent = "สิ่งที่จะทําเสนอ";
    else if (scrollY >= 900) newContent = "จากคนที่รับทําเว็บ";
  }

  if (textnavbar.textContent !== newContent) {
    textnavbar.textContent = newContent;
  }
};

const debounce = (func, wait) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
};

const debouncedUpdate = debounce(updateNavbarText, 0);

window.addEventListener("scroll", () => {
  requestAnimationFrame(debouncedUpdate);
});

let overlaycontent = document.getElementById('Pkofficialoverlay');

function FunctionOverlayHandle() {
  overlaycontent.style.backgroundColor = "rgba(0, 0, 0)";
  overlaycontent.style.transform = "translateY(0)";
  setTimeout(() => {
    overlaycontent.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }, 600);
}

function FunctionOverlayHandleClose() {
  overlaycontent.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlaycontent.style.transition = "1s";
  overlaycontent.style.transform = "translateY(-100vh)";
  setTimeout(() => {
    overlaycontent.style.backgroundColor = "rgba(0, 0, 0)";
    overlaycontent.style.transition = "0.85s";
  }, 600);
}