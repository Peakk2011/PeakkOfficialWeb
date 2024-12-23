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
const GoToinstaAnim = document.getElementById("GoToinstaAnim");
const ExpainLinkOverlay = document.getElementById("ExpainLinkOverlay");  // Assuming this is an existing element

// Function to handle animation and transition
function handleClick(element, displayFrame, openLink) {
  element.style.color = "transparent";
  element.style.borderRadius = "0px";
  ExpainLinkOverlay.style.zIndex = "100";

  // CSS transitions for smooth scaling
  element.style.transition = "transform 0.6s ease, padding 0.6s ease, color 0.3s ease";

  // Detect device type and apply appropriate scaling
  let scaleFactor = window.innerWidth <= 768 ? 3 : 2; // Example scale factors for mobile and tablet

  // Scale to appropriate size for device
  setTimeout(() => {
    element.style.transform = `scale(${scaleFactor})`;
    setTimeout(() => {
      // Set final padding to cover full screen based on device
      element.style.padding = window.innerWidth <= 768 ? "50vh 50vw" : "100vh 100vw";
    }, 150); // Delay for scaling completion

  }, 30); // Initial delay to start scaling

  if (displayFrame) {
    setTimeout(() => {
      FrameHire.style.display = "block";
      FrameHire.style.transition = "opacity 0.6s ease, width 0.6s ease, height 0.6s ease";
      setTimeout(() => {
        FrameHire.style.width = "100%";
        FrameHire.style.height = "100%";
        setTimeout(() => {
          FrameHire.style.opacity = "1";
        }, 90); // Delay for height scaling completion
      }, 60);
    }, 300); // Delay for element scaling
  }

  if (openLink) {
    setTimeout(() => {
      window.open(openLink, "_parent");
    }, 200); // Delay for smooth transition and scaling completion
  }
}

// Add event listeners
GoToHireAnimExp.addEventListener("click", () => handleClick(GoToHireAnimExp, true));
GoToinstaAnim.addEventListener("click", () => handleClick(GoToinstaAnim, false, "https://www.instagram.com/peakkofficial/"));


// Dynamic cta button hover sticky

const cursorEvents = (EventsCta) => {
  EventsCta.addEventListener('mouseenter', () => {
    gsap.to(cursorInner, 0.15, { scale: 7 });
    gsap.to(cursorOuter, 0.2, { scale: 0 });
  });

  EventsCta.addEventListener('mouseleave', () => {
    gsap.to(cursorInner, 0.15, { scale: 1 });
    gsap.to(cursorOuter, 0.2, { scale: 1 });
  });
};

['ctatext', 'ctabutton'].forEach(id => cursorEvents(document.getElementById(id)));

const setupButton = (button) => {
  let rect, ctr;

  const updateButtonMetrics = () => {
    rect = button.getBoundingClientRect();
    ctr = { x: rect.left + (rect.width / 2), y: rect.top + (rect.height / 2) };
  };

  updateButtonMetrics();
  window.addEventListener('resize', updateButtonMetrics);

  button.addEventListener('mouseenter', function (e) {
    let delta_x = (e.clientX - ctr.x) * 5 / rect.width;
    let delta_y = (e.clientY - ctr.y) * 5 / rect.height;
    this.setAttribute('style', `transition: all 50ms ease-out; transform: translate(${delta_x}px, ${delta_y}px);`);
  });

  button.addEventListener('mousemove', function (e) {
    let delta_x = (e.clientX - ctr.x) * 5 / rect.width;
    let delta_y = (e.clientY - ctr.y) * 5 / rect.height;
    this.setAttribute('style', `transition: all 50ms ease-out; transform: translate(${delta_x}px, ${delta_y}px);`);
  });

  button.addEventListener('mousedown', function (e) {
    let delta_x = (e.clientX - ctr.x) * 5 / rect.width;
    let delta_y = (e.clientY - ctr.y) * 5 / rect.height;
    this.setAttribute('style', `transition: all 50ms ease-out; transform: translate(${delta_x}px, ${delta_y}px);`);
  });

  button.addEventListener('mouseup', function (e) {
    let delta_x = (e.clientX - ctr.x) * 5 / rect.width;
    let delta_y = (e.clientY - ctr.y) * 5 / rect.height;
    this.setAttribute('style', `transition: all 50ms ease-out; transform: translate(${delta_x}px, ${delta_y}px);`);
  });

  button.addEventListener('mouseleave', function (e) {
    this.removeAttribute('style');
  });
};

['ctabutton', 'ctatext'].forEach(id => setupButton(document.getElementById(id)));
