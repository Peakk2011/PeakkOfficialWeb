const Nav = document.getElementById('Navbar');
const NavbarContent = document.querySelector(".navbar");
const NavTools = document.getElementById('NavTools');
const TexthireUs = document.getElementById("Text");
const SideBarTog = document.getElementById("hamToside");
const ExitToNa = document.getElementById("ExitTonavbar");
const TextNavbar = document.getElementById("TextNavbar");
const LinksTools = document.getElementById("FlexLinksTools");
const PatternBG = document.getElementById('pattern');
const BGBlur = document.getElementById("bgblur");
const Sidebar = document.getElementById("Sidebar");

const HTML = document.getElementById("HTMl");

const Pklogo = document.getElementById("PK-imagelogo");


window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 0) {
    Nav.classList.add('scrolled')
    NavbarContent.style.height = "58px";
  } else {
    Nav.classList.remove('scrolled')
    NavbarContent.style.height = "72px";

    // 3D Recommend Craard

    const $card = document.querySelector('.card');
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

      $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
    }

    $card.addEventListener('mouseenter', () => {
      bounds = $card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    });

    $card.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', rotateToMouse);
      $card.style.transform = '';
      $card.style.background = '';
    });
  }
}


Nav.addEventListener('click', NavMoving)
BGBlur.addEventListener("click", NavMovingOut)

function NavMoving() {
  NavTools.style.opacity = "1";
  NavTools.style.transform = "translateY(0px)"
  document.removeEventListener('mouseenter', NavMoving);
  BGBlur.style.opacity = "1";
  BGBlur.style.zIndex = "4";
}

function NavMovingOut() {
  // setTimeout(function () {
  NavTools.style.opacity = "0";
  BGBlur.style.opacity = "0";
  NavTools.style.transform = "translateY(-370px)"
  Sidebar.style.transform = "translate(-320px)";
  Nav.style.transform = "translateY(0px)"
  Nav.addEventListener('click', NavMoving)
  // }, 500);
  BGBlur.style.zIndex = "3";
}

NavTools.addEventListener('mouseover', () => {
  NavTools.style.opacity = "1";
  NavTools.style.transform = "translateY(0px)";
  document.removeEventListener('mouseenter', NavMoving);
  console.log('Hover activate');
})

// Right click func

document.onclick = hideMenu;
document.oncontextmenu = rightClick;


if (screen.width < 700) {
  document.getElementById("contextMenu").style.cssText = "scale: 100%;";
  Nav.removeEventListener('click', NavMoving);

} else {
  document.getElementById("contextMenu").style.cssText = "scale: 89%;";
}

document.body.addEventListener("touchstart", tapHandler);

var tapedTwice = false;

function tapHandler(event) {
  if (!tapedTwice) {
    tapedTwice = true;
    setTimeout(function () { tapedTwice = false; }, 300);
    return false;
  }
  event.preventDefault();
  //action on double tap goes below
  // alert('You tapped me Twice !!!');
  RightCik()
}

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none"
}

function RightCik() {
  BGBlur.style.opacity = "1";
  BGBlur.style.zIndex = "4";
  if (document.getElementById("contextMenu").style.display == "block")
    hideMenu();
  else {
    let menu = document.getElementById("contextMenu")
    menu.style.display = 'block';
    // menu.style.left = e.pageX + "px";
    // menu.style.top = e.pageY + "px";
  }
}

function rightClick(e) {
  e.preventDefault();

  BGBlur.style.opacity = "1";
  BGBlur.style.zIndex = "4";
  if (document.getElementById("contextMenu").style.display == "block")
    hideMenu();
  else {
    let menu = document.getElementById("contextMenu")
    menu.style.display = 'block';
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

SideBarTog.addEventListener("click", () => {
  Nav.removeEventListener('click', NavMoving)
  Nav.style.transform = "translateY(-72px)"
  Sidebar.style.transform = "translate(0px)";
  BGBlur.style.opacity = "1";
  BGBlur.style.zIndex = "4";
})

// Enter Hireus page

TexthireUs.addEventListener("click", FuncOpenHire);

document.getElementById('Active').addEventListener("click", FuncOpenHire);

function FuncOpenHire() {
  setTimeout(() => {
    HTML.style.transform = "translateX(-100%)";
    HTML.style.transition = "cubic-bezier(0.075, 0.82, 0.80, 1) all 0.5s";
  }, 50);
  setTimeout(() => {
    window.open("hire.html", "_parent");
  }, 770)
  Nav.removeEventListener('click', NavMoving);
}

// loading

const logo = document.getElementById("TransparentLogo");
const Loading = document.querySelector(".Loading");

setTimeout(() => {
  setTimeout(() => {
    Loading.style.opacity = "0";
    setTimeout(() => {
      Loading.style.display = "none";
    }, 300);
  }, 300);
  if (Loading.style.display == "none") {
    document.body.style.overflow = "auto"
  }
}, 600);


// end loading
// Sticky magnetButton ripple click 
// name button is magnetButton ripple

class Button {
  constructor(HTMLButtonElement) {
    this.button = HTMLButtonElement;
    this.width = this.button.offsetWidth;
    this.height = this.button.offsetHeight;
    this.left = this.button.offsetLeft;
    this.top = this.button.offsetTop;
    this.x = 0;
    this.y = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.magneticPullX = 0.35;
    this.magneticPullY = 0.35;
    this.isHovering = false;
    this.magnetise();
    this.createRipple();
  }

  onEnter = () => {
    gsap.to(this.button, 0.4, {
      x: this.x * this.magneticPullX,
      y: this.y * this.magneticPullY,
      ease: Power4.easeOut
    });
  };

  onLeave = () => {
    gsap.to(this.button, 0.7, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut.config(1.1, 0.5)
    });
  };

  magnetise = () => {
    document.querySelector("body").addEventListener("mousemove", (e) => {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;

      const center = {
        x: this.left + this.width / 2,
        y: this.top + this.height / 2
      };

      this.x = this.cursorX - center.x;
      this.y = this.cursorY - center.y;

      const distance = Math.sqrt(this.x * this.x + this.y * this.y);
      const hoverArea = this.isHovering ? 0.6 : 0.5;

      if (distance < this.width * hoverArea) {
        if (!this.isHovering) {
          this.isHovering = true;
        }
        this.onEnter();
      } else {
        if (this.isHovering) {
          this.onLeave();
          this.isHovering = false;
        }
      }
    });
  };

  createRipple = () => {
    this.button.addEventListener("click", () => {
      const circle = document.createElement("span");
      const diameter = Math.max(
        this.button.clientWidth,
        this.button.clientHeight
      );
      const radius = diameter / 2;

      const offsetLeft = this.left + this.x * this.magneticPullX;
      const offsetTop = this.top + this.y * this.magneticPullY;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${this.cursorX - offsetLeft - radius}px`;
      circle.style.top = `${this.cursorY - offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = this.button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      this.button.appendChild(circle);
    });

    this.button.addEventListener("touchstart", () => {
      const circle = document.createElement("span");
      const diameter = Math.max(
        this.button.clientWidth,
        this.button.clientHeight
      );
      const radius = diameter / 2;

      const offsetLeft = this.left + this.x * this.magneticPullX;
      const offsetTop = this.top + this.y * this.magneticPullY;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${this.cursorX - offsetLeft - radius}px`;
      circle.style.top = `${this.cursorY - offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = this.button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      this.button.appendChild(circle);
    });
  };
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  new Button(button);
}

//magnetButton

var magnets = document.querySelectorAll('#Text')
var magnetsTextTitle = document.querySelectorAll('#TextTitleSuggessTag');
var magnetsTextSuggesstion = document.querySelectorAll('.BuyRecomPrice');
var strength = 65

magnets.forEach((magnet) => {
  magnet.addEventListener('mousemove', moveMagnet);
  magnet.addEventListener('mouseout', function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
  });
});

magnetsTextTitle.forEach((magnet) => {
  magnet.addEventListener('mousemove', moveMagnet);
  magnet.addEventListener('mouseout', function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
  });
});

magnetsTextSuggesstion.forEach((magnet) => {
  magnet.addEventListener('mousemove', moveMagnet);
  magnet.addEventListener('mouseout', function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power2.easeOut })
  });
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()
  //console.log(magnetButton, bounding)

  TweenMax.to(magnetButton, 0.2, {
    x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
    y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })

  // magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}

const btns = document.querySelectorAll("#PKlogoHeader");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].style.transform = "translate(" + x * 0.5 + "px, " + y * 0.5 + "px)";
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", function (e) {
    btn.children[0].style.transform = "translate(0px, 0px)";
  });
});

// cursor

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
const buttonss = document.querySelectorAll("main button");

buttonss.forEach((button) => {
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

let ButtonRippleSticky = document.getElementById('ButtonRippleSticky');

ButtonRippleSticky.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 3.8,
    borderRadius: "4%",
    width: "55px",
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
})
ButtonRippleSticky.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
    borderRadius: "50%",
    width: "20px",
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
})

TexthireUs.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 3.8,
    borderRadius: "4%",
    width: "55px",
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
})
TexthireUs.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
    borderRadius: "50%",
    width: "20px",
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
})

SideBarTog.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 2.5,
    borderRadius: "2%",
    width: "20px",
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 0,
  });
})
SideBarTog.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
    borderRadius: "50%",
    width: "20px",
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
  });
})

// Hire us btn2nd click events

ButtonRippleSticky.addEventListener("click", () => {
  setTimeout(() => {
    FuncOpenHire()
  }, 100);
})

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
    transition: 0.4,
  });
  gsap.to(cursorOuter, 0.2, {
    opacity: 0,
    scale: 0,
    borderRadius: "50%",
    transition: 0.4,
  });
})

el.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    opacity: 1,
    scale: 1,
    borderRadius: "50%",
    transition: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    opacity: 1,
    scale: 1,
    borderRadius: "50%",
    transition: 1,
  });
})

// Price Tag hover suggesstion

document.getElementById("TextSuggessPriceTag").addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 3.8,
    borderRadius: "1%",
    width: "65px",
    transition: 0.65,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 6,
    opacity: 0,
    borderRadius: "0%",
    transition: 0.26,
  });
})

document.getElementById("TextSuggessPriceTag").addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
    borderRadius: "50%",
    width: "20px",
    transition: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
    transition: 1,
    opacity: 1,
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
    transition: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
    transition: 1,
    opacity: 1,
    borderRadius: "50%",
  });
})

let BuyRecomMSHover = document.getElementById("BuyRecomPrice");

BuyRecomMSHover.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.40, {
    scale: 3.25,
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

BuyRecomMSHover.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    scale: 1,
    borderRadius: "50%",
    width: "20px",
    transition: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    scale: 1,
    transition: 1,
    opacity: 1,
    borderRadius: "50%",
  });
})

// Home page Card 3d

VanillaTilt.init(document.querySelectorAll("#tilt"), {
  max: 2.5,
  speed: 300,
  easing: "linear",    // Easing on enter/exit.
  glare: true,  // if it should have a "glare" effect
  reset: true,
}); 

// Hide cursor when hover recommend card

let imgTit = document.getElementById("tilt");

imgTit.addEventListener("mouseenter", () => {
  gsap.to(cursorInner, 0.15, {
    opacity: 0,
    scale: 14,
    borderRadius: "0%",
    transition: 0.4,
  });
  gsap.to(cursorOuter, 0.2, {
    opacity: 0,
    scale: 0,
    borderRadius: "50%",
    transition: 0.4,
  });
})

imgTit.addEventListener("mouseleave", () => {
  gsap.to(cursorInner, 0.15, {
    opacity: 1,
    scale: 1,
    borderRadius: "50%",
    transition: 1,
  });
  gsap.to(cursorOuter, 0.2, {
    opacity: 1,
    scale: 1,
    borderRadius: "50%",
    transition: 1,
  });
})