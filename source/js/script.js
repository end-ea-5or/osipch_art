let pageBody = document.querySelector('body');
let mainElement = document.querySelector('.page-main');
let partTitles = mainElement.querySelectorAll('.part__title');
let currentPart = 0;
let currentItem = 0;
let activeHeight = 0;
let galleryToggles = mainElement.querySelectorAll('.toggle__link');
let myArtSection = mainElement.querySelector('.my-art');
let galleryContainers = document.querySelectorAll('.js-gallery');

galleryContainers.forEach((section) => {
  lightGallery(section.querySelector('.gallery'), {
    plugins: [lgZoom],
  });
});

partTitles.forEach((element) => {
  element.addEventListener('click', () => {
    let sectionClass = '.' + element.dataset.name;
    let activePart = mainElement.querySelector(sectionClass);
    // проброс данных в css-переменную
    document.documentElement.style.setProperty('--heightContainer', `${activePart.scrollHeight}`);
    activePart.classList.toggle('js-active');
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
    // при закрывании "Мое творчество" все галереи схлопываются
    if (currentItem !== 0) {
      if (currentItem.classList.contains('js-toggle__item')) {
        currentItem.classList.remove('js-toggle__item')
      };
      if (currentItem.querySelector('.toggle__link').classList.contains('js-toggle__link')) {
        currentItem.querySelector('.toggle__link').classList.remove('js-toggle__link')
      };
      currentItem = 0;
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
    // проброс данных в css-переменную
    document.documentElement.style.setProperty('--heightContainer', 'auto');
    let activeItem = element.parentNode; // элемент <li> где кликнули кнопку
    if ((currentItem !== 0) && (currentItem !== activeItem)) {
      currentItem.classList.toggle('js-toggle__item');
      currentItem.querySelector('.toggle__link').classList.toggle('js-toggle__link');
    };
    if (currentItem == activeItem) {
      currentItem = 0;
      element.classList.toggle('js-toggle__link');
      activeItem.classList.toggle('js-toggle__item');
    } else {
      element.classList.toggle('js-toggle__link');
      activeItem.classList.toggle('js-toggle__item');
      currentItem = activeItem;
    };
  });
});
