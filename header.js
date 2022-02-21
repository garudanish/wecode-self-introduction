const BOX_SHADOW = "box-shadow";

const header = document.querySelector("header");

const toggleHeaderShadow = () => {
  if (window.scrollY < 80) {
    header.classList.remove(BOX_SHADOW);
  } else {
    header.classList.add(BOX_SHADOW);
  }
};

window.addEventListener("scroll", toggleHeaderShadow);
