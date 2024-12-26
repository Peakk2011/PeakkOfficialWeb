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