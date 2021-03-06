// define varible 
const navBarList = document.getElementById('navbar_list');

// Dynamic unorder List
// Dynamic navbar list and add class to menu 
function DynamicNav() {
  const allSections= document.getElementsByTagName('section');
  const imaginaryMethod  = document.createDocumentFragment();
  for (const section of allSections) {
      const IDSection = section.getAttribute('id');
      const liNav = document.createElement('li');
      liNav.innerHTML = `<a href= #${IDSection} class=${'dynmicLink'}>${IDSection} </a>`;
      liNav.classList.add("listItem");
      imaginaryMethod.appendChild(liNav);
  }
  navBarList.appendChild(imaginaryMethod );
}
DynamicNav();

// Add class 'active
let checkView = function() {
  /* Delete Class*/
  if (document.querySelector('section.active') != null &&
      document.querySelector('a.active') != null) {
        document.querySelector('section.active').removeAttribute('class');
        document.querySelector('a.active').removeAttribute('class');
  }
    }

// define varible 
const getLinks = document.querySelectorAll(".listItem");
const allSections= document.getElementsByTagName('section');
// modification of state link
function changeState() {
  let getIndex = allSections.length;
  while (--getIndex && window.scrollY < allSections[getIndex].offsetTop) {}
    getLinks[getIndex].classList.add("active");
  getLinks.forEach(listItem => listItem.classList.remove("active"));
  getLinks[getIndex].classList.add("active");
}


//  Scrolling Smooth
let scrollingSection = function (e) {
  event.preventDefault();
  const section = document.querySelector(`#${e.target.innerHTML}`);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Event Listener
window.addEventListener("scroll", function(e) {checkView();});
  navBarList.addEventListener('click', scrollingSection);
  window.addEventListener("scroll", changeState);

  