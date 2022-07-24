// lightGallery(document.querySelector('.gallery'), {
//   plugins: [lgZoom],
// });

let mainElement = document.querySelector('.page-main');
let partTitles = mainElement.querySelectorAll('.part__title');
let currentPart = 0;
let root = document.documentElement;

partTitles.forEach((element) => {
  element.addEventListener('click', () => {
    let sectionClass = '.' + element.dataset.name;
    let activePart = mainElement.querySelector(sectionClass);
    let activeHeight = activePart.querySelector('.content').offsetHeight;
    //activeHeight += 30;
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
