const Contact = document.getElementById('Email');

function rippleSuggess() {

  Contact.classList.add('expand');

}

function CloseRipple() {

  document.querySelector('.email').classList.remove('expand');
  event.stopPropagation();

}

document.addEventListener('DOMContentLoaded', function () {
  const ScrollEventToAbout = document.getElementById('ScrollEventToAbout');
  const scrollContainer = document.querySelector('main');
  const sectionsDetails = document.querySelectorAll('.ScrollAbout2');
  let currentIndex = 0;

  ScrollEventToAbout.addEventListener('click', function () {
    if (sectionsDetails.length > 1) {
      currentIndex = (currentIndex + 1) % sectionsDetails.length;
    } else {
      currentIndex = (currentIndex + 1) % 2;  // เลื่อนกลับไปที่จุดเริ่มต้นถ้าเป็น section เดียว
    }
    sectionsDetails[currentIndex % sectionsDetails.length].scrollIntoView({ behavior: 'smooth' });
  });
});

// Ripple theme effect

// document.addEventListener('DOMContentLoaded', function () {
//   const themeSwitcher = document.getElementById('theme-switcher');
//   const currentTheme = localStorage.getItem('theme') || 'dark-mode';
//   document.body.classList.add(currentTheme);

//   themeSwitcher.addEventListener('click', function (event) {

//     if (document.body.classList.contains('dark-mode')) {
//       document.body.classList.remove('dark-mode');
//       document.body.classList.add('light-mode');
//       localStorage.setItem('theme', 'light-mode');
//     }
//     else {
//       document.body.classList.remove('light-mode');
//       document.body.classList.add('dark-mode');
//       localStorage.setItem('theme', 'dark-mode');
//     }

//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcher = document.getElementById('theme-switcher');

  // ตั้งค่าเริ่มต้นสำหรับธีมจาก localStorage
  const currentTheme = localStorage.getItem('theme') || 'dark-mode';
  document.body.classList.add(currentTheme);
  
  themeSwitcher.addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  });
});

const DotsBeforeActiveE = document.getElementById("DotsBeforeActiveE");
const DotsAFActiveE = document.getElementById('DotsAFActiveE')

DotsBeforeActiveE.addEventListener("click", () => {
  DotsBeforeActiveE.classList.add('DotsActiveOLD');
  DotsAFActiveE.classList.remove('DotsActive');
})

DotsAFActiveE.addEventListener('click', () => {
  DotsAFActiveE.classList.add("DotsActive");
  DotsBeforeActiveE.classList.remove('DotsActiveOLD');
})

const sections = document.querySelectorAll('.mainSection, .ScrollAbout2');
// สร้างตัว observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('mainSection')) {
        DotsAFActiveE.classList.add("DotsActive");
        DotsBeforeActiveE.classList.remove('DotsActiveOLD');
      } else if (entry.target.classList.contains('ScrollAbout2')) {
        DotsBeforeActiveE.classList.add('DotsActiveOLD');
        DotsAFActiveE.classList.remove('DotsActive');
      }
    }
  });
}, {
  threshold: 0.5 // 50% section scroll viewport
});

// สังเกตทุก section
sections.forEach(section => {
  observer.observe(section);
});

const mediaQuery = window.matchMedia('(max-width: 450px)');

mediaQuery.addEventListener("change", (event) => {
  if (mediaQuery.matches) {
    window.location.reload();
  } else {
    window.location.href = 'DesktopAbout.html'
  }
});

// for landscape

const mql = window.matchMedia("(orientation:landscape)");
mql.addEventListener("change", (event) => {
  if (event.matches) {
    window.location.href = 'DesktopAbout.html'
  } else {
    
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if (mediaQuery.matches) {
    
  } else {
    window.location.href = 'DesktopAbout.html'
  }
});