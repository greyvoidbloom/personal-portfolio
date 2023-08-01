const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navlist = document.getElementsByClassName('navigation-links')[0]

togglebutton.addEventListener('click', () => {
  navlist.classList.toggle('active')
})
document.querySelector("#about-me").addEventListener("click", scrolltoabout);

function scrolltoabout(event){
  event.preventDefault();

  document.querySelector(".about-me-container").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}
document.querySelector("#experience").addEventListener("click", scrolltoexperience);

function scrolltoexperience(event){
  event.preventDefault();

  document.querySelector(".experience-container").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}
document.querySelector("#home").addEventListener("click", scrolltohome);

function scrolltohome(event){
  event.preventDefault();

  document.querySelector(".middle-container").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}
document.querySelector("#rocket-scroll").addEventListener("click", scrolltotop);

function scrolltotop(event){
  event.preventDefault();

  document.querySelector(".top-container").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}
document.querySelector("#projects").addEventListener("click",scrolltoprojects);
function scrolltoprojects(event){
  event.preventDefault();

  document.querySelector(".project-container").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}
document.querySelector("#contact-me").addEventListener("click",scrolltocontact);

function scrolltocontact(event){
  event.preventDefault();

  document.querySelector(".get-in-touch-container").scrollIntoView({
    behavior: "smooth" // Scroll smoothly
  });
}