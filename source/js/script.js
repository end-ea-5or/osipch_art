// lightGallery(document.querySelector('.gallery'), {
//   plugins: [lgZoom],
// });

let pageBody = document.querySelector('body');
let mainElement = document.querySelector('.page-main');
let partTitles = mainElement.querySelectorAll('.part__title');
let currentPart = 0;
let galleryToggles = mainElement.querySelectorAll('.toggle__link');
let galleryContainers = document.querySelectorAll('.js-gallery');

partTitles.forEach((element) => {
  element.addEventListener('click', () => {
    let sectionClass = '.' + element.dataset.name;
    let activePart = mainElement.querySelector(sectionClass);
    let activeHeight = activePart.querySelector('.content').scrollHeight;
    // activeHeight += 20;
    activePart.classList.toggle('js-active');
    activePart.style.cssText = `height: ${activeHeight}px;`;
    if ((currentPart !== 0) && (currentPart !== activePart)) {
      currentPart.classList.toggle('js-active');
      currentPart.style.cssText = '';
    };
    if (currentPart == activePart) {
      currentPart = 0;
      activePart.style.cssText = '';
    } else {
      currentPart = activePart;
    };
  })
});

// для управления с клавиатуры, tab и enter
partTitles.forEach((element) => {
  element.addEventListener('keydown', (evt) => {
    if (evt.code == 'Enter') {
      element.click()
    };
  });
});

// галерея
galleryToggles.forEach((element) => {
  element.addEventListener('click', () => {
    let activeItem = element.parentNode; // элемент <li> где кликнули кнопку
    let className = `gallery__${element.dataset.galleryLink}`;
    activeItem.classList.toggle('js-toggle__item');
    // activeItem.querySelector('.js-gallery').classList.toggle('js-gallery-visible');
    // galleryContainers.forEach((item) => {
    //   if (item.classList.contains(className)) {
    //     item.style.cssText = 'position: fixed;top: 0;left: 0;z-index: 5;height: 100vh;background-color: rgb(169 14 14 / 64%);';
    //     // pageBody.style.overflow = 'hidden';
    //   };
    // });
  });
});
