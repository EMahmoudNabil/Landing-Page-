
const sections= document.getElementsByTagName('section');
const navBarList = document.getElementById('navbar_list');

// Dynamic unorder List
// Dynamic navbar list and add class to menu 
function createNavbar() {
  const imaginaryMethode  = document.createDocumentFragment();
  for (const section of sections) {
      const IDSection = section.getAttribute('id');
      const liNav = document.createElement('li');
  
      liNav.innerHTML = `<a href= #${IDSection} class=${'menu_link'}>${IDSection} </a>`;
      liNav.classList.add("links");
      imaginaryMethode .appendChild(liNav);
  }
  navBarList.appendChild(imaginaryMethode );
}
createNavbar();

// Add class 'active
function isInViewport() {
  /* Delete Class*/
  if (document.querySelector('section.active') != null &&
      document.querySelector('a.active') != null) {
        document.querySelector('section.active').removeAttribute('class');
        document.querySelector('a.active').removeAttribute('class');
  }
}

// modification of state link
const links = document.querySelectorAll(".links");
function changeState() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  links.forEach(link => link.classList.remove("active"));
  links[index].classList.add("active");
}

//  Scroll to anchor ID using and smooth motion
let scrollToSection = function (e) {
  event.preventDefault();
  const section = document.querySelector(`#${e.target.innerHTML}`);
  section.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("scroll", function(e) {
      inViewPort();
  });

  navBarList.addEventListener('click', scrollToSection);
  window.addEventListener("scroll", changeState);

  