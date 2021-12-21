const pics = document.querySelectorAll(".pic");
const dotContainer = document.querySelector(".dot-container");
const butnRight = document.querySelector(".right");
const butnLeft = document.querySelector(".left");
let numeb = 0;
//
pics.forEach(function (_, i) {
  dotContainer.insertAdjacentHTML(
    "beforeend",
    `<button class="dot" data-no="${i}"></button>`
  );
});
const split = function (a) {
  pics.forEach(
    (pic, i) => (pic.style.transform = `translateX(${100 * (i - a)}%)`)
  );
};
const doc_effect = function (numeb) {
  document
    .querySelectorAll(".dot")
    .forEach((a) => a.classList.remove("dot-effect"));
  abc = document.querySelector(`.dot[data-no="${numeb}"]`);
  abc.classList.add("dot-effect");
};
const init = function () {
  split(0);
  doc_effect(0);
};
init();

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    numeb = e.target.dataset.no;
    split(numeb);
    doc_effect(numeb);
  }
});

butnRight.addEventListener("click", function () {
  if (numeb < pics.length - 1) {
    numeb = numeb + 1;
  } else {
    numeb = 0;
  }
  split(numeb);
  doc_effect(numeb);
});

butnLeft.addEventListener("click", function () {
  if (numeb > 0) {
    numeb = numeb - 1;
  } else {
    numeb = pics.length - 1;
  }
  split(numeb);
  doc_effect(numeb);
});
