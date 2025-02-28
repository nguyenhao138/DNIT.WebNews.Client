"use client";

import { useEffect } from "react";

const CustomScripts = () => {
  useEffect(() => {
    const header = document.querySelector(".site-header") as HTMLElement;
    const searchBox = document.querySelector(".search-box") as HTMLDivElement;
    const backToTopBtn = document.getElementById("backtotop");

    const handleScroll = () => {
      if (header) {
        header.classList.toggle("f-head", window.scrollY > 120);
      }
      if (backToTopBtn) {
        backToTopBtn.style.display = window.scrollY > 500 ? "block" : "none";
      }
    };

    const toggleSearch = () => {
      if (searchBox) {
        searchBox.classList.toggle("show");
      }
    };

    document
      .getElementById("search-btn")
      ?.addEventListener("click", toggleSearch);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document
        .getElementById("search-btn")
        ?.removeEventListener("click", toggleSearch);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // Không render gì cả
};

export default CustomScripts;
