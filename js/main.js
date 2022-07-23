const target = document.getElementById("menu");

target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});

const openBtn = document.getElementById("contact__button");
const modal = document.getElementById("modal");

openBtn.addEventListener('click', () => {
  modal.style.display='block';
});

window.addEventListener('click', (e) => {
  // if(!e.target.closest('modal__content-inner') && e.target.id==="modal") {
  //   modal.style.display = 'none';
  // }
  if(e.target.id === "modal__content" || e.target.id==="close__modal") {
    modal.style.display = 'none';
  }
});

// scroll-top
function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', ()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
scrollTop('button');