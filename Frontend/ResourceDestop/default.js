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

// TexthireUs.addEventListener("click", FuncOpenHire);

document.getElementById('Active').addEventListener("click", FuncOpenHire);

function FuncOpenHire() {
  setTimeout(() => {
    HTML.style.transform = "translateX(-100%)";
    HTML.style.transition = "cubic-bezier(0.075, 0.82, 0.80, 1) all 0.5s";
  }, 50);
  setTimeout(() => {
    window.open("hire.html", "_parent");
  }, 480)
  Nav.removeEventListener('click', NavMoving);
}

// loading

const logo = document.getElementById("TransparentLogo");
const Loading = document.querySelector(".Loading");

setTimeout(() => {
  setTimeout(() => {
    Loading.style.opacity = "0";
  }, 300);
  if (Loading.style.display == "none") {
    document.body.style.overflow = "auto"
  }
}, 1500);


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
var magnetsImg = document.querySelectorAll('#PKlogoHeader')
var strength = 40

magnets.forEach((magnet) => {
  magnet.addEventListener('mousemove', moveMagnet);
  magnet.addEventListener('mouseout', function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
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
window.addEventListener('scroll', function(e) {
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
			x: mouse.x - cursorOuterOriginalState.width/2,
			y: mouse.y - cursorOuterOriginalState.height/2,
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

TexthireUs.addEventListener("mouseenter", () =>  {
	gsap.to(cursorInner, 0.15, {
		scale: 3.8,
    borderRadius: "4%",
    width: "55px",
	});
  gsap.to(cursorOuter, 0.2, {
		scale: 0,
	});
})

TexthireUs.addEventListener("mouseleave", () =>  {
	gsap.to(cursorInner, 0.15, {
		scale: 1,
    borderRadius: "50%",
    width: "20px",
	});
  gsap.to(cursorOuter, 0.2, {
		scale: 1,
	});
})

SideBarTog.addEventListener("mouseenter", () =>  {
	gsap.to(cursorInner, 0.15, {
		scale: 2.5,
    borderRadius: "2%",
    width: "20px",
	});
  gsap.to(cursorOuter, 0.2, {
		scale: 0,
	});
})
SideBarTog.addEventListener("mouseleave", () =>  {
	gsap.to(cursorInner, 0.15, {
		scale: 1,
    borderRadius: "50%",
    width: "20px",
	});
  gsap.to(cursorOuter, 0.2, {
		scale: 1,
	});
})

gsap.to(cursorInner, 0.15, {
  transition: 0.46,
});
gsap.to(cursorOuter, 0.2, {
  transition: 0.46,
});