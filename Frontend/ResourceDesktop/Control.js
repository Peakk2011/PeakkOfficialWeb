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

// Theme switcher

const btn = document.querySelector(".btn-toggle");
const ResThemeswic = document.querySelector(".ResThemeswic");
const ResThemeswic2 = document.querySelector(".ResThemeswic2");

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

// theme toggle

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

ResThemeswic.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

ResThemeswic2.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

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
const NavlinkBottom = document.querySelectorAll(".navsoc > .navsoccon > li > a");
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

function CloseOverlayoff() {
  overlayPrice.style.opacity = "0";
  setTimeout(() => {
    overlayPrice.style.display = "none";
  }, 300);
}

// Add a click event listener to each one
NavlinkBottom.forEach(NavlinkBottom => {
  NavlinkBottom.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 5,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 0,
    });
  });
  NavlinkBottom.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, {
      scale: 1,
    });
    gsap.to(cursorOuter, 0.2, {
      scale: 1,
    });
  });
});

function OpenExpOverlay() {
  document.getElementById("ExpainLinkOverlay").style.display = "block";
  setTimeout(() => {
    document.getElementById("ExpainLinkOverlay").style.opacity = "1";
  }, 50);
}

// function CloseExpOverlay() {
//   console.log("CloseExpOverlay()");
//   document.getElementById("ExpainLinkOverlay").style.opacity = "0";
//   setTimeout(() => {
//     document.getElementById("ExpainLinkOverlay").style.display = "none";
//   }, 200);
// }


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

// New Links click ui

const GoToHireAnimExp = document.getElementById("GoToHireAnim");
const FrameHire = document.getElementById("FrameHire");

// add listener

const GoToinstaAnim = document.getElementById("GoToinstaAnim");

GoToHireAnimExp.addEventListener("click", () => {
  GoToHireAnimExp.style.color = "transparent";
  GoToHireAnimExp.style.borderRadius = "0px";
  ExpainLinkOverlay.style.zIndex = "100";

  setTimeout(() => {
    GoToHireAnimExp.style.padding = "6.5rem 1.5rem"
    GoToHireAnimExp.style.transform = "scale(300%)"
    setTimeout(() => {
      GoToHireAnimExp.style.padding = "10rem 1.5rem"
    }, 50);
  }, 20);

  setTimeout(() => {
    FrameHire.style.display = "block"
    // GoToHireAnimExp.style.opacity = "0";
    setTimeout(() => {
      FrameHire.style.width = "100%"
      FrameHire.style.height = "100%"

      setTimeout(() => {
        FrameHire.style.opacity = "1"
      }, 300);

    }, 5);
  }, 50);


})

GoToinstaAnim.addEventListener("click", () => {
  GoToinstaAnim.style.color = "transparent";
  GoToinstaAnim.style.borderRadius = "0px";
  ExpainLinkOverlay.style.zIndex = "100";

  setTimeout(() => {
    GoToinstaAnim.style.padding = "8.5rem 1.5rem"
    GoToinstaAnim.style.transform = "scale(400%)"
    setTimeout(() => {
      GoToinstaAnim.style.padding = "10rem 1.5rem"
    }, 50);
  }, 20);

  function PkOpenInstagram() {
    window.open("https://www.instagram.com/peakkofficial/", "_parent");
  }

  PkOpenInstagram();

})

function OpenWinHire() {
  window.open("hire.html", "_parent");
}

// FrameHireSidebar

SidebarHireOpen.addEventListener("click", () => {

  contentIndex.style.opacity = "20%"
  contentIndex.style.filter = "blur(5px)"
  FrameHireSidebar.style.display = "block"

  CloseSidebar()

  setTimeout(() => {
    contentIndex.style.opacity = "100%"
    contentIndex.style.filter = "blur(0px)"
    setTimeout(() => {

      FrameHireSidebar.style.opacity = "1"

    }, 100);
  }, 300);


})

// if success load hire del to index if open index reversed

function CloseSidebar() {
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
}