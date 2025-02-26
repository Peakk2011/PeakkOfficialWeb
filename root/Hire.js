// Theme switcher

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn-toggle");
    const themeToggles = document.querySelectorAll(".ResThemeswic, .ResThemeswic2");
    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    const toggleTheme = () => {
        document.body.classList.toggle("dark-theme");
        const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    };

    btn.addEventListener("click", toggleTheme);
    themeToggles.forEach(toggle => toggle.addEventListener("click", toggleTheme));
});

// Mouse interactive
const mouseInteractiveElements = document.querySelectorAll(".navbarlinks > li > a, .Strtext li a, .AllpcBtn a, .navsoc > .navsoccon > li > a,.definectalinks");

mouseInteractiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursorInner, 0.15, { scale: 5 });
        gsap.to(cursorOuter, 0.2, { scale: 0 });
    });
    element.addEventListener('mouseleave', () => {
        gsap.to(cursorInner, 0.15, { scale: 1 });
        gsap.to(cursorOuter, 0.2, { scale: 1 });
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
});

backgroundblur.addEventListener("click", () => {
    SidebarNew.style.transform = "translateX(-300px)";
    backgroundblur.style.opacity = "0";
    setTimeout(() => {
        SidebarIns.style.transform = "translateX(-50px)";
        SidebarIns.style.opacity = "0";
        SidebarIns.style.filter = "blur(5px)";
        setTimeout(() => {
            backgroundblur.style.display = "none";
        }, 400);
    }, 30);
});

// Slider
const slider = document.querySelector('.FurCard');
let isDown = false, startX, scrollLeft;

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

// Responsive content change
const mediaQuery = window.matchMedia('(min-width: 1000px)');

const handleMediaQueryChange = (e) => {
    const text = "เว็บที่พวกเรารับทํานั้นที่ทันสมัยและทําเพื่อคุณ";
    document.getElementById("TextChenge").innerHTML = text;
    console.log(e.matches ? 'Desktop Peakkofficial' : 'Mobile Peakkofficial');
};

mediaQuery.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

// Navbar scroll effect
let navbar = document.getElementsByTagName("nav")[0];

window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
