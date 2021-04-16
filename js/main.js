// header sticky
const header = document.querySelector("#sticky-header");
const sticky = header.offsetTop;

const headerScroll = () => {
  window.pageYOffset > sticky
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
};

window.onscroll = function () {
  headerScroll();
};
