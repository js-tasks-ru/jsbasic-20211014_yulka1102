function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');

  let container = document.querySelector('.container');
  let sideBar = document.querySelector('.carousel__inner');

  let slidesCount = sideBar.querySelectorAll('.carousel__slide').length;

  let activeSlideIndex = 0;

  let width = container.offsetWidth;
  // sideBar.style.left = `-${width * (slidesCount - 1)}px`

  btnLeft.addEventListener('click', () => {
  if (activeSlideIndex < 0) {
    btnLeft.style.display = 'none';
  } else {
    activeSlideIndex--;
    btnLeft.style.display = '';
    sideBar.style.left = `-${activeSlideIndex * width}px`;
  }
  });

  btnRight.addEventListener('click', () => {
    if (activeSlideIndex === (slidesCount - 1)) {
      btnRight.style.display = 'none';
    } else {
      activeSlideIndex++;
      btnRight.style.display = '';
      sideBar.style.left = `-${activeSlideIndex * width}px`;
    }
  });

}
