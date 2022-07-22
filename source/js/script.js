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
    let activePartChildren = activePart.children;
    let activeHeight = 0;
    for (var i = 0; i < activePartChildren.length; i++) {
      activeHeight += activePartChildren[i].offsetHeight
    };
    activeHeight += 70;
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
