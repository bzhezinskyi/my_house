const up = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const pageTop = () => {
  const scrollProgress = document.querySelector(".scroll-progress");
  const position = document.documentElement.scrollTop;

  if (position > 170) {
    scrollProgress.style.opacity = "1";
    scrollProgress.style.visibility = "visible";
  } else {
    scrollProgress.style.opacity = "0";
    scrollProgress.style.visibility = "hidden";
  }

  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  scrollProgress.addEventListener("click", up);
};

window.onscroll = pageTop;
window.onload = pageTop;
