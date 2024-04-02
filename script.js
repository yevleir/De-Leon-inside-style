const headernav = document.querySelector(".header_nav");
const togglemenu = document.querySelector(".toggle_menu");

togglemenu.addEventListener("click", () => {
	headernav.classList.toggle("open");
	togglemenu.classList.toggle("open");
});
