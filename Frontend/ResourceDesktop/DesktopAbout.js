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