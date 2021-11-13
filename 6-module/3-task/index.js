import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.createSlide();
    this.activeSlideIndex = 0;
    this.addToCart();
    this.elem.querySelector('.carousel__arrow_left').addEventListener('click', () => {
      this.changeSlide('left')
    });
    this.elem.querySelector('.carousel__arrow_right').addEventListener('click', () => {
      this.changeSlide('right')
    });
    this.elem.querySelector('.carousel__arrow_left').style.display = 'none';
  }

  createSlide() {
    this.elem = createElement(`<div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    </div>`);

    let divInner = document.createElement('div');
    divInner.classList.add('carousel__inner'); 

    for(let slide of this.slides) {
    let divElem = createElement(`
    <div class="carousel__slide" data-id="${slide.id}">
  <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
    `);  
  divInner.append(divElem);
  }
  this.elem.append(divInner);
  
  }

  changeSlide(direction) {

    let btnLeft = this.elem.querySelector('.carousel__arrow_left');
    let btnRight = this.elem.querySelector('.carousel__arrow_right');
    let sideBar = this.elem.querySelector('.carousel__inner');
  
    let slidesCount = this.elem.querySelectorAll('.carousel__slide').length;
  
    
  
    let width = sideBar.offsetWidth;
  
        if (direction === 'right') {
          this.activeSlideIndex++;
          btnLeft.style.display = ''
          if (this.activeSlideIndex == slidesCount) {
            this.activeSlideIndex = slidesCount - 1;
            btnRight.style.display = 'none';
          }
        } else if (direction === 'left') {
          this.activeSlideIndex--;
          btnRight.style.display = '';
          if (this.activeSlideIndex < 0) {
            this.activeSlideIndex = 0;
            btnLeft.style.display = 'none'
          }
        }
  
        sideBar.style.transform = `translateX(-${this.activeSlideIndex * width}px)`
  
        if (this.activeSlideIndex == 0) {
          btnLeft.style.display = 'none';
          btnRight.style.display = '';
        } else if (this.activeSlideIndex == slidesCount - 1) {
          btnLeft.style.display = '';
          btnRight.style.display = 'none';
        }
    
  }

  addToCart() {
    let btnsPlus = this.elem.querySelectorAll('.carousel__button');
  for(let btnPlus of btnsPlus) {
    let slide = btnPlus.closest('.carousel__slide');
    btnPlus.addEventListener('click', (event) => {
      let customEvent = new CustomEvent("product-add", { detail: slide.dataset.id,
        bubbles: true});
        this.elem.dispatchEvent(customEvent);
    });
  }

  }

}
