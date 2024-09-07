let TextSecContach = document.getElementById("TextSecContach");
let SearchBuytton = document.querySelector(".Navbarsearch");

SearchBuytton.addEventListener("mouseenter", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 2.5,
        borderRadius: "2%",
        width: "20px",
    });
    gsap.to(cursorOuter, 0.2, {
        scale: 0,
    });
})
SearchBuytton.addEventListener("mouseleave", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 1,
        borderRadius: "50%",
        width: "20px",
    });
    gsap.to(cursorOuter, 0.2, {
        scale: 1,
    });
})

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