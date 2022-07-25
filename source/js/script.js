let pageBody = document.querySelector('body');
let mainElement = document.querySelector('.page-main');
let partTitles = mainElement.querySelectorAll('.part__title');
let currentPart = 0;
let activeHeight = 0;
let galleryToggles = mainElement.querySelectorAll('.toggle__link');
let myArtSection = mainElement.querySelector('.my-art');
let galleryContainers = document.querySelectorAll('.js-gallery');

galleryContainers.forEach((section) => {
  lightGallery(section.querySelector('.gallery'), {
    plugins: [lgZoom],
    cancelable: false,
  });
});

partTitles.forEach((element) => {
  element.addEventListener('click', () => {
    let sectionClass = '.' + element.dataset.name;
    let activePart = mainElement.querySelector(sectionClass);
    activeHeight = activePart.querySelector('.content').scrollHeight;
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
    // let className = `gallery__${element.dataset.galleryLink}`;
    element.classList.toggle('js-toggle__link');
    activeItem.classList.toggle('js-toggle__item');
    activeHeight = myArtSection.querySelector('.content').scrollHeight;
    myArtSection.style.cssText = `height: ${activeHeight}px;`;
    console.log(activeHeight);
  });
});
