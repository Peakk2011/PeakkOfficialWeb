// let TextSecContach = document.getElementById("TextSecContach");
// let SearchBuytton = document.querySelector(".Navbarsearch");

// document.removeEventListener('mouseenter', NavMoving);
// Nav.removeEventListener('click', NavMoving);
// Nav.removeEventListener('mouseenter', NavMoving);
// Nav.removeEventListener('mouseover', NavMoving);

// // SearchBuytton.addEventListener("mouseenter", () => {
// //     gsap.to(cursorInner, 0.15, {
// //         scale: 2.5,
// //         borderRadius: "2%",
// //         width: "20px",
// //     });
// //     gsap.to(cursorOuter, 0.2, {
// //         scale: 0,
// //     });
// // })

// // SearchBuytton.addEventListener("mouseleave", () => {
// //     gsap.to(cursorInner, 0.15, {
// //         scale: 1,
// //         borderRadius: "50%",
// //         width: "20px",
// //     });
// //     gsap.to(cursorOuter, 0.2, {
// //         scale: 1,
// //     });
// // })

// // main button

// TexthireUs.addEventListener("mouseenter", () => {
//     gsap.to(cursorInner, 0.15, {
//         scale: 2,
//         borderRadius: "4%",
//         width: "60px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 0,
//     });
// })
// TexthireUs.addEventListener("mouseleave", () => {
//     gsap.to(cursorInner, 0.15, {
//         scale: 1,
//         borderRadius: "50%",
//         width: "20px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 1,
//     });
// })

// TextSecContach.addEventListener("mouseenter", () => {
//     gsap.to(cursorInner, 0.15, {
//         scale: 2,
//         borderRadius: "4%",
//         width: "60px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 0,
//     });
// })
// TextSecContach.addEventListener("mouseleave", () => {
//     gsap.to(cursorInner, 0.15, {
//         scale: 1,
//         borderRadius: "50%",
//         width: "20px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 1,
//     });
// })

// var magnets = document.querySelectorAll('#TextSecContach');
// var magnetsForIcon = document.querySelectorAll('.navbarlink2nd');
// var magnetsForIcon1 = document.querySelectorAll('.Navbarsearch');
// var strength = 50;

// magnets.forEach((magnet) => {
//     magnet.addEventListener('mousemove', moveMagnet);
//     magnet.addEventListener('mouseout', function (event) {
//         TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
//     });
// });

// magnetsForIcon.forEach((magnet) => {
//     magnet.addEventListener('mousemove', moveMagnet);
//     magnet.addEventListener('mouseout', function (event) {
//         TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
//     });
// });

// magnetsForIcon1.forEach((magnet) => {
//     magnet.addEventListener('mousemove', moveMagnet);
//     magnet.addEventListener('mouseout', function (event) {
//         TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power2.easeOut })
//     });
// });

// let PeakkLogo2Sugge = document.getElementById('ButtonSuggessinlinePeakktext');
// let PeakkLogo2SuggeIMAGE = document.getElementById('PKSugIMAGE');

// PeakkLogo2Sugge.addEventListener("mouseover", () => {
//     PeakkLogo2SuggeIMAGE.style.filter = "blur(4px)";
//     gsap.to(cursorInner, 0.15, {
//         scale: 4,
//         borderRadius: "0%",
//         width: "110px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 0,
//     });
// })

// PeakkLogo2Sugge.addEventListener("mouseleave", () => {
//     PeakkLogo2SuggeIMAGE.style.filter = "blur(0px)";
//     gsap.to(cursorInner, 0.15, {
//         scale: 1,
//         borderRadius: "50%",
//         width: "20px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 1,
//     });
// })

// function moveMagnet(event) {
//     var magnetButton = event.currentTarget
//     var bounding = magnetButton.getBoundingClientRect()

//     //console.log(magnetButton, bounding)

//     TweenMax.to(magnetButton, 0.2, {
//         x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
//         y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
//         ease: Power4.easeOut
//     })

//     // magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
// }

// TexthireUs.addEventListener("click", () => {
//     setTimeout(() => {
//         window.open("index.html", "_parent");        
//     }, 350);
//     Nav.removeEventListener('click', NavMoving)
// })

// TextSecContach.addEventListener("click", () => {

// })

// // window.onscroll = function () {
// //     // pageYOffset or scrollY
// //     if (window.scrollY > 50) {
// //       Nav.classList.add('scrolled')
// //       NavbarContent.style.height = "58px";
// //       NavbarContent.style.maxWidth = "1100px";
// //       NavbarContent.style.display  = "flex";
// //       setTimeout(() => {
// //         NavbarContent.style.opacity = "1";
// //       }, 300);
// //       Nav.style.opacity = "1";
// //     } else {
// //       Nav.classList.remove('scrolled')
// //         Nav.style.opacity = "0";
// //     }
// //   }

// Drag to scroll

(function () {
    var curYPos, curXPos, curDown;

    window.addEventListener('mousemove', function (e) {
        if (curDown) {
            window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
        }
    });

    window.addEventListener('mousedown', function (e) {
        curYPos = e.pageY;
        // curXPos = e.pageX;
        curDown = true;
    });

    window.addEventListener('mouseup', function (e) {
        curDown = false;
    });
})()

// Mouse interactive 

const Navlink = document.querySelectorAll(".navbarlinks > li > a");
const Strtext = document.querySelectorAll(".Strtext li a");

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

const btn = document.querySelector(".btn-toggle");
const ResThemeswic = document.querySelector(".ResThemeswic");
const ResThemeswic2 = document.querySelector(".ResThemeswic2");

// let overlayPrice = document.getElementById("overlayPrice");

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

// Slider

const slider = document.querySelector('.FurCard');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});

// Responsive content chenge

// Define a media query
const mediaQuery = window.matchMedia('(min-width: 1000px)');

// Function to handle changes in the media query status
function handleMediaQueryChange(e) {
    if (e.matches) {
        // The viewport is at least 768 pixels wide
        console.log('Desktop Peakkofficial');
        document.getElementById("TextChenge").innerHTML = "ได้รับเว็บไซต์ที่มี design ที่ทันสมัยตัวอย่างเช่นในรูปนี้";
    } else {
        // The viewport is less than 768 pixels wide
        document.getElementById("TextChenge").innerHTML = "เว็บที่พวกเรารับทํานั้นที่ทันสมัยและทําเพื่อคุณ";
        console.log('Mobile Peakkofficial');
    }
}

// Add a listener for changes in the media query status
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Initial check
handleMediaQueryChange(mediaQuery);

const NavlinkBottom = document.querySelectorAll(".navsoc > .navsoccon > li > a");

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

function OpenWinIndex() {
    window.open("index.html", "_parent");
}

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

// FrameHireSidebar

SidebarIndexOpen.addEventListener("click", () => {

    contentHire.style.opacity = "0%"
    OpenWinIndex()

    setTimeout(() => {
        contentHire.style.display = "none"
    }, 300);

    FrameIndexSidebar.style.display = "block"


    CloseSidebar()

    // setTimeout(() => {
    //     contentHire.style.opacity = "100%"
    //     contentHire.style.filter = "blur(0px)"
    //     setTimeout(() => {

    //         FrameIndexSidebar.style.opacity = "1"

    //     }, 100);
    // }, 300);



})

// FrameIndexSidebar.style.display = "none"
// FrameIndexSidebar.style.opacity = "0"