let TextSecContach = document.getElementById("TextSecContach");
let SearchBuytton = document.querySelector(".Navbarsearch");

document.removeEventListener('mouseenter', NavMoving);
Nav.removeEventListener('click', NavMoving);
Nav.removeEventListener('mouseenter', NavMoving);
Nav.removeEventListener('mouseover', NavMoving);

// SearchBuytton.addEventListener("mouseenter", () => {
//     gsap.to(cursorInner, 0.15, {
//         scale: 2.5,
//         borderRadius: "2%",
//         width: "20px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 0,
//     });
// })

// SearchBuytton.addEventListener("mouseleave", () => {
//     gsap.to(cursorInner, 0.15, {
//         scale: 1,
//         borderRadius: "50%",
//         width: "20px",
//     });
//     gsap.to(cursorOuter, 0.2, {
//         scale: 1,
//     });
// })

// main button

TexthireUs.addEventListener("mouseenter", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 2,
        borderRadius: "4%",
        width: "60px",
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

TextSecContach.addEventListener("mouseenter", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 2,
        borderRadius: "4%",
        width: "60px",
    });
    gsap.to(cursorOuter, 0.2, {
        scale: 0,
    });
})
TextSecContach.addEventListener("mouseleave", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 1,
        borderRadius: "50%",
        width: "20px",
    });
    gsap.to(cursorOuter, 0.2, {
        scale: 1,
    });
})

var magnets = document.querySelectorAll('#TextSecContach');
var magnetsForIcon = document.querySelectorAll('.navbarlink2nd');
var magnetsForIcon1 = document.querySelectorAll('.Navbarsearch');
var strength = 50;

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseout', function (event) {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
    });
});

magnetsForIcon.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseout', function (event) {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
    });
});

magnetsForIcon1.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseout', function (event) {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power2.easeOut })
    });
});

let PeakkLogo2Sugge = document.getElementById('ButtonSuggessinlinePeakktext');
let PeakkLogo2SuggeIMAGE = document.getElementById('PKSugIMAGE');

PeakkLogo2Sugge.addEventListener("mouseover", () => {
    PeakkLogo2SuggeIMAGE.style.filter = "blur(4px)";
    gsap.to(cursorInner, 0.15, {
        scale: 4,
        borderRadius: "0%",
        width: "110px",
    });
    gsap.to(cursorOuter, 0.2, {
        scale: 0,
    });
})

PeakkLogo2Sugge.addEventListener("mouseleave", () => {
    PeakkLogo2SuggeIMAGE.style.filter = "blur(0px)";
    gsap.to(cursorInner, 0.15, {
        scale: 1,
        borderRadius: "50%",
        width: "20px",
    });
    gsap.to(cursorOuter, 0.2, {
        scale: 1,
    });
})

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

TexthireUs.addEventListener("click", () => {
    setTimeout(() => {
        window.open("index.html", "_parent");        
    }, 350);
    Nav.removeEventListener('click', NavMoving)
})

TextSecContach.addEventListener("click", () => {

})

// window.onscroll = function () {
//     // pageYOffset or scrollY
//     if (window.scrollY > 50) {
//       Nav.classList.add('scrolled')
//       NavbarContent.style.height = "58px";
//       NavbarContent.style.maxWidth = "1100px";
//       NavbarContent.style.display  = "flex";
//       setTimeout(() => {
//         NavbarContent.style.opacity = "1";
//       }, 300);
//       Nav.style.opacity = "1";
//     } else {
//       Nav.classList.remove('scrolled')
//         Nav.style.opacity = "0";
//     }
//   }