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

// 3D Recommend Card

/* Store the element in el */
let el = document.getElementById('Recommended')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)
el.addEventListener('mouseover', handleMove)
el.addEventListener('click', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 4 * ((xVal - width / 2) / width)
  /* Calculate the rotation along the X-axis */
  const xRotation = -4 * ((yVal - height / 2) / height)
  /* Generate string for CSS transform property */
  const string = 'perspective(300px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  /* Apply the calculated transformation */
  el.style.transform = string
}
/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(300px) scale(1) rotateX(0) rotateY(0)'
})
/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function () {
  el.style.transform = 'perspective(300px) scale(0.9) rotateX(0) rotateY(0)'
})
/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function () {
  el.style.transform = 'perspective(300px) scale(1) rotateX(0) rotateY(0)'
})

// Hide cursor when hover recommend card

el.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    opacity: 0,
    scale: 12,
    borderRadius: "0%",
  });
  gsap.to(cursorOuter, 0.2, {
    opacity: 0,
    scale: 0,
    borderRadius: "50%",
  });
})

el.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    opacity: 1,
    scale: 1,
    borderRadius: "50%",
  });
  gsap.to(cursorOuter, 0.2, {
    opacity: 1,
    scale: 1,
    borderRadius: "50%",
  });
})

// Price title tag hover

document.getElementById("TextTitleSuggessTag").addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 3.8,
    borderRadius: "1%",
    width: "120px",
    transition: 0.65,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
    opacity: 0,
    borderRadius: "0%",
    transition: 0.26,
  });
})

document.getElementById("TextTitleSuggessTag").addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
    borderRadius: "50%",
    width: "20px",
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
    opacity: 1,
    borderRadius: "50%",
  });
})

let BuyRecomMSHover = document.getElementById("BuyRecomPrice");

let BuyviewMoreWhyby = document.getElementById("BuyviewMoreWhyby");
let BuyviewMoreWhyby2 = document.getElementById("BuyviewMoreWhyby2");

BuyRecomMSHover.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 4.85,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
    opacity: 0,
  });
})

BuyRecomMSHover.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
    opacity: 1,
  });
})

BuyviewMoreWhyby.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 4.85,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
    opacity: 0,
  });
})

BuyviewMoreWhyby.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
    opacity: 1,
  });
})

BuyviewMoreWhyby2.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 4.85,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
    opacity: 0,
  });
})

BuyviewMoreWhyby2.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
    opacity: 1,
  });
})

function OpenExpOverlay() {
  document.getElementById("ExpainLinkOverlay").style.display = "block";
  setTimeout(() => {
    document.getElementById("ExpainLinkOverlay").style.opacity = "1";
  }, 50);
}

function CloseExpOverlay() {
  console.log("CloseExpOverlay()");
  document.getElementById("ExpainLinkOverlay").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("ExpainLinkOverlay").style.display = "none";
  }, 200);
}