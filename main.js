// nav bar
if (document.querySelector(".header .start .nav--btn"))
  document
    .querySelector(".header .start .nav--btn")
    .addEventListener("click", function () {
      if (
        !document.querySelector(".main .nav").classList.contains("nav--active")
      ) {
        document.querySelector(".main .nav").classList.add("nav--active");
        document.querySelector(".blur").style.display = "block";
      }
    });
if (document.querySelector(".nav .nav__header .nav__header--btn"))
  document
    .querySelector(".nav .nav__header .nav__header--btn")
    .addEventListener("click", function () {
      if (
        document.querySelector(".main .nav").classList.contains("nav--active")
      ) {
        document.querySelector(".main .nav").classList.remove("nav--active");
        document.querySelector(".blur").style.display = "none";
      }
    });
// end navbar

// header > end > setting

if (document.querySelector(".main .header .end .setting .setting--btn")) {
  document
    .querySelector(".main .header .end .setting .setting--btn")
    .addEventListener("click", function () {
      if (
        !document
          .querySelector(".main .header .end .setting .setting__nav")
          .classList.contains("active")
      ) {
        document
          .querySelector(".main .header .end .setting .setting__nav")
          .classList.add("active");
        console.log("active");
      } else document.querySelector(".main .header .end .setting .setting__nav").classList.remove("active");

      // document
      //   .querySelector(".main .header .end .setting .setting--btn")
      //   .classList.add("active");
      // setTimeout(function () {
      //   document
      //     .querySelector(".main .header .end .setting .setting--btn")
      //     .classList.remove("active");
      // }, 300);
    });
}

// active navbar
document.querySelector(".main .blur").addEventListener("click", function () {
  if (document.querySelector(".main .nav").classList.contains("nav--active")) {
    document.querySelector(".main .nav").classList.remove("nav--active");
    document.querySelector(".blur").style.display = "none";
  }
});
document.body.addEventListener("click", function (e) {
  var classList = e.target.classList;
  if (
    !classList.contains("setting-btn-selector") &&
    !classList.contains("setting") &&
    !classList.contains("st-btn")
  ) {
    if (
      document
        .querySelector(".main .header .end .setting .setting__nav")
        .classList.contains("active")
    )
      document
        .querySelector(".main .header .end .setting .setting__nav")
        .classList.remove("active");
  }
});
// search> for screens smaller than 792px

document
  .querySelector(".header .center .search .search__icon-2")
  .addEventListener("click", function () {
    document.querySelector(".main .start").style.display = "none";
    document.querySelector(".main .end").style.display = "none";
    document.querySelector(".main .center .search").classList.add("type-2");
  });
document
  .querySelector(".header .center .search .search__icon-arrow-left")
  .addEventListener("click", function () {
    document.querySelector(".main .start").style.display = "flex";
    document.querySelector(".main .end").style.display = "flex";
    document.querySelector(".main .center .search").classList.remove("type-2");
  });
window.addEventListener("resize", function () {
  var x = document.body.clientWidth + 7;
  if (x >= 792) {
    if (
      document
        .querySelector(".main .center .search")
        .classList.contains("type-2")
    ) {
      document
        .querySelector(".header .center .search .search__icon-arrow-left")
        .click();
    }
  }
});
