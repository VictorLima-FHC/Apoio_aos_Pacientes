const track = document.querySelector('.focus-track');
const nextBtn = document.querySelector('.focus-arrow.next');
const prevBtn = document.querySelector('.focus-arrow.prev');

let cards = Array.from(track.children);
const gap = 50;
const cardWidth = cards[0].offsetWidth + gap;
let index = 0;

cards.forEach(card => {
  track.appendChild(card.cloneNode(true));
});

cards = Array.from(track.children);

function moveCarousel() {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  moveCarousel();

  if (index >= cards.length / 2) {
    setTimeout(() => {
      track.style.transition = 'none';
      index = 0;
      track.style.transform = 'translateX(0)';
    }, 500);
  }
});

prevBtn.addEventListener('click', () => {
  if (index === 0) {
    track.style.transition = 'none';
    index = cards.length / 2;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  setTimeout(() => {
    index--;
    moveCarousel();
  }, 20);
});


const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {

    const openItem = document.querySelector(".accordion-item.active");

    if (openItem && openItem !== item) {
      openItem.classList.remove("active");
    }

    item.classList.toggle("active");

  });

});

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    tab.classList.add("active");

    const target = document.getElementById(tab.dataset.tab);
    target.classList.add("active");

  });

});