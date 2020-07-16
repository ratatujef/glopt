window.addEventListener("DOMContentLoaded", function () {
  // Modal

  let btn = document.querySelectorAll("button"),
    overlay = document.querySelector(".overlay");

  btn.forEach((element) => {
    if (
      element.classList.contains("button_form") ||
      element.classList.contains("button_question-form")
    ) {
    } else {
      element.addEventListener("click", () => {
        overlay.classList.add("overlay_active");
      });
    }
  });
  overlay.addEventListener("click", (e) => {
    if (e.target == overlay) {
      overlay.classList.remove("overlay_active");
    } else {
      console.log(e.target);
    }
  });
  //slider

  let prev = document.querySelector(".slider__pre"),
    next = document.querySelector(".slider__next"),
    items = document.querySelectorAll(".item_slider"),
    index = 1;
  function show(n) {
    if (n < 1) {
      index = items.length;
    } else if (n > items.length) {
      index = 1;
    } else {
      index = n;
    }
    items.forEach((element) => {
      element.classList.remove("item_slider_active");
    });

    items[index - 1].classList.add("item_slider_active");
  }

  show(index);

  next.addEventListener("click", () => show(index + 1));
  prev.addEventListener("click", () => show(index - 1));
});
