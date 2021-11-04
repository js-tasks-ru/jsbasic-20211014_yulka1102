function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');
  // let slide = querySelector('.carousel__slide');

  let sideBar = document.querySelector('.carousel__inner');

  let slidesCount = sideBar.querySelectorAll('.carousel__slide').length;

  let activeSlideIndex = 0;

  let width = sideBar.offsetWidth;

  // if (activeSlideIndex = 0) {
  //     btnRight.style.display = '';
  //     btnLeft.style.display = 'none';
  //   } else if (activeSlideIndex = slidesCount - 1) {
  //     btnLeft.style.display = '';
  //     btnRight.style.display = 'none';
  //   }



  btnLeft.addEventListener('click', () => {
    if (activeSlideIndex > 0 && activeSlideIndex <= slidesCount - 1 ) {
    activeSlideIndex--;

    } else {
      activeSlideIndex = 0;
      
    }
    sideBar.style.transform = `translateX(-${activeSlideIndex * width}px)`;

  });

  btnRight.addEventListener('click', () => {
    if (activeSlideIndex >= 0 && activeSlideIndex < slidesCount - 1) {
      activeSlideIndex++;
      } else {
      activeSlideIndex = slidesCount - 1;
    }
    sideBar.style.left = `-${activeSlideIndex * width}px`;
    });

    // if (activeSlideIndex = 0) {
    //   btnRight.style.display = '';
    //   btnLeft.style.display = 'none';
    // } else if (activeSlideIndex = slidesCount - 1) {
    //   btnLeft.style.display = '';
    //   btnRight.style.display = 'none';
    // }
}
