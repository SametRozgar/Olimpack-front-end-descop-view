const menuLinks = document.querySelectorAll('nav ul li a');
const propertyTables = document.querySelectorAll('.property');

menuLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const target = link.getAttribute('data-target');
		propertyTables.forEach((table) => {
			table.classList.remove('active');
		});
		document.getElementById(target).classList.add('active');
		menuLinks.forEach((link) => {
			link.classList.remove('active');
		});
		link.classList.add('active');
	});
});


const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const imageWidth = images[0].clientWidth;
const galleryWidth = gallery.clientWidth;
let currentIndex = 0;

function showNext() {
  if (currentIndex < images.length - 3) {
    currentIndex++;
    gallery.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
  }
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    gallery.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
  }
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);