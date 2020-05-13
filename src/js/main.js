"use strict";

// Слайдер
var menu = [
  "<span>01</span>intro",
  "<span>02</span>work",
  "<span>03</span>about",
  "<span>04</span>contacts",
];
var mySwiper = new Swiper(".swiper-container.swiper-container--intro", {
  slidesPerView: "auto",
  effect: "fade",
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + menu[index] + "</div>";
    },
  },
});

// Слайдер
var swiper = new Swiper(".swiper-container.swiper-container--reviews", {
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next--cutom",
    prevEl: ".swiper-button-prev--cutom",
  },
});

$(".menu-js").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 1500);
});

// Счетчик чисел
$(document).ready(function () {
  var show = true;
  var countbox = ".stat";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 750 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".stat__count").css("opacity", "1");
      $(".stat__count").spincrement({
        thousandSeparator: "",
        duration: 3000,
      });

      show = false;
    }
  });
});
// аккордион
$(".accordion__item:first .heading")
  .closest(".accordion__item")
  .addClass("active");
// Show the content
var $defContent = $(".accordion__item:first .heading").next();
$defContent.slideToggle(500);

$(".accordion__item .heading").on("click", function (e) {
  e.preventDefault();

  // Add the correct active class
  if ($(this).closest(".accordion__item").hasClass("active")) {
    // Remove active classes
    $(".accordion__item").removeClass("active");
  } else {
    // Remove active classes
    $(".accordion__item").removeClass("active");

    // Add the active class
    $(this).closest(".accordion__item").addClass("active");
  }

  // Show the content
  var $content = $(this).next();
  $content.slideToggle(500);
  $(".accordion__item .content").not($content).slideUp("400");
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".site-menu__link").click(function (event) {
      $(".header__burger, .header__menu").removeClass("active");
      $("body").removeClass("lock");
    });
  });
  $(".header-menu__burger").click(function (event) {
    $(".header-menu__burger, .header-menu-nav").toggleClass("active");
  });
  $(window).scroll(function () {
    var url = window.location.hash;
    if ($(this).scrollTop() >= window.innerHeight * 0.9) {
      $(".fixed-header").addClass("scrolled");
    } else {
      $(".fixed-header").removeClass("scrolled");
    }
  });
});

// let header = $("#header"),
//   scrollOffset = $(window).scrollTop();

// /* Fixed Header */
// checkScroll(scrollOffset);

// $(window).on("scroll", function () {
//   scrollOffset = $(this).scrollTop();

//   checkScroll(scrollOffset);
// });

// function checkScroll(scrollOffset) {
//   let introH = $("#intro").innerHeight();
//   if (scrollOffset >= introH) {
//     header.addClass("fixed");
//   } else {
//     header.removeClass("fixed");
//   }
// }
