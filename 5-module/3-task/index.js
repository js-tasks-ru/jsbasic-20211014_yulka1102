function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');

  let sideBar = document.querySelector('.carousel__inner');

  let slidesCount = sideBar.querySelectorAll('.carousel__slide').length;

  let activeSlideIndex = 0;

  let width = sideBar.offsetWidth;

  sideBar.style.right = `-${(slidesCount - 1) * 100}vw`;

  btnLeft.style.display = 'none';

  btnLeft.addEventListener('click', () => {
   changeSlide('left')
  });

  btnRight.addEventListener('click', () => {
    changeSlide('right')
  });

    function changeSlide (direction) {
      if (direction === 'right') {
        activeSlideIndex++;
        btnLeft.style.display = ''
        if (activeSlideIndex == slidesCount) {
          activeSlideIndex = slidesCount - 1;
          btnRight.style.display = 'none';
        }
      } else if (direction === 'left') {
        activeSlideIndex--;
        btnRight.style.display = '';
        if (activeSlideIndex < 0) {
          activeSlideIndex = 0;
          btnLeft.style.display = 'none'
        }
      }

      sideBar.style.transform = `translateX(-${activeSlideIndex * width}px)`

      if (activeSlideIndex == 0) {
        btnLeft.style.display = 'none';
        btnRight.style.display = '';
      } else if (activeSlideIndex == slidesCount - 1) {
        btnLeft.style.display = '';
        btnRight.style.display = 'none';
      }
    }
}
