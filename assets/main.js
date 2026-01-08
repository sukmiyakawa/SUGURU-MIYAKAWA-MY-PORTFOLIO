"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガーボタン
  const header_menu = document.querySelector(".header_menu");
  const header = document.querySelector("header");
  const menuNav_item = document.querySelectorAll(".menuNav a");
  const menuNav = document.querySelector(".menuNav");
  header_menu.addEventListener("click", () => {
    header_menu.classList.toggle("open");
    header.classList.toggle("open");
    menuNav.classList.toggle("open");
  });
  menuNav_item.forEach((item) => {
    item.addEventListener("click", () => {
      header_menu.classList.remove("open");
      header.classList.remove("open");
      menuNav.classList.remove("open");
    });
  });

  //   skills
  let displayWidth = document.documentElement.offsetWidth;
  const barometer80 = document.querySelectorAll(".barometer--80");
  const barometer70 = document.querySelectorAll(".barometer--70");
  const barometer60 = document.querySelectorAll(".barometer--60");
  const barometer50 = document.querySelectorAll(".barometer--50");
  const barometer25 = document.querySelectorAll(".barometer--25");
  if (displayWidth < 768) {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 3260) {
        barometer80.forEach((el) => el.classList.add("active"));
        barometer70.forEach((el) => el.classList.add("active"));
        barometer60.forEach((el) => el.classList.add("active"));
        barometer50.forEach((el) => el.classList.add("active"));
        barometer25.forEach((el) => el.classList.add("active"));
      }
    });
  } else if (displayWidth >= 768 && displayWidth < 1024) {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 1840) {
        barometer80.forEach((el) => el.classList.add("active"));
        barometer70.forEach((el) => el.classList.add("active"));
        barometer60.forEach((el) => el.classList.add("active"));
        barometer50.forEach((el) => el.classList.add("active"));
        barometer25.forEach((el) => el.classList.add("active"));
      }
    });
  } else {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 1400) {
        barometer80.forEach((el) => el.classList.add("active"));
        barometer70.forEach((el) => el.classList.add("active"));
        barometer60.forEach((el) => el.classList.add("active"));
        barometer50.forEach((el) => el.classList.add("active"));
        barometer25.forEach((el) => el.classList.add("active"));
      }
    });
  }

  //   pageNav
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const pages = [
    "es-batting.html",
    "signers.html",
    "portfolio.html",
    "address.html",
    "shopping.html",
  ];
  const currentFile = location.pathname.split("/").pop();
  const currentIndex = pages.indexOf(currentFile);
  window.goPrev = () => {
    if (currentIndex > 0) {
      window.location.href = pages[currentIndex - 1];
    }
  };
  window.goNext = () => {
    if (currentIndex < pages.length - 1) {
      window.location.href = pages[currentIndex + 1];
    }
  };
  if (currentIndex <= 0) {
    prevBtn.style.opacity = "0";
  }
  if (currentIndex >= pages.length - 1) {
    nextBtn.style.opacity = "0";
  }
});
