export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.createSlider();
    this.elem.addEventListener('click', this.findIndex);
    this.elem.addEventListener('click', this.onClick);
    this.thumb = this.elem.querySelector('.slider__thumb');
    this.thumb.addEventListener('pointerdown', this.start);
    this.thumb.ondragstart = function() {
      return false;
    }
   
  }

  createSlider() {
    
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');

    let slider__thumb = document.createElement('div');
    slider__thumb.classList.add('slider__thumb');
    let slider__value = document.createElement('span');
    slider__value.classList.add('slider__value');
    
    slider__thumb.append(slider__value);
    let slider__progress = document.createElement('div');
    slider__progress.classList.add('slider__progress');

    let slide = (100/(this.steps - 1)) * this.value;
    slider__thumb.style.left = `${slide}%`
    slider__progress.style.width = `${slide}%`

    this.elem.append(slider__thumb, slider__progress);

    let slider__steps = document.createElement('div');
    slider__steps.classList.add('slider__steps');
    let arrOfStep = [];
    for(let i = 0; i < this.steps; i++) {
      arrOfStep.push(i);
    }
    for(let num of arrOfStep) {
      let span = document.createElement('span');
      if(num == this.value) {
        span.classList.add('slider__step-active');
        slider__value.innerHTML = num;
      }
      slider__steps.append(span);
    }
    this.elem.append(slider__steps);
    }

  findIndex = (event) => {
    let target = this.elem.getBoundingClientRect();
    let x = (event.pageX - target.left)/target.width;
    let ind1 = x * (this.steps - 1);
    this.value = Math.round(ind1);
    let slide = (100/(this.steps - 1)) * this.value;
    this.elem.querySelector('.slider__thumb').style.left = `${slide}%`
    this.elem.querySelector('.slider__progress').style.width = `${slide}%`
    this.elem.querySelector('.slider__value').innerHTML = this.value;
  }

  onClick = (ev) => {
    let customEvent = new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    })
    this.elem.dispatchEvent(customEvent);
  }

  start = (event) => {
    event.preventDefault();
    document.querySelector('.slider').classList.add('slider_dragging');
      document.addEventListener('pointermove', this.moveOn);
      document.addEventListener('pointerup', this.moveEnd);

    }

    moveOn = (event) => {

      let slider = document.querySelector('.slider');

      let target = this.elem.getBoundingClientRect();
      
      let newPosition = event.clientX - target.left;

      if(newPosition < 0) {
        newPosition = 0;
      }else if(newPosition > slider.offsetWidth) {
        newPosition = slider.offsetWidth;
      }
    
      let x = newPosition / target.width;
      let ind1 = x * (this.steps - 1);
      let slide = (100/(this.steps - 1)) * ind1;
      this.elem.querySelector('.slider__thumb').style.left = `${slide}%`
      this.elem.querySelector('.slider__progress').style.width = `${slide}%`
      this.elem.querySelector('.slider__value').innerHTML = Math.round(ind1);
    }

    moveEnd = (event) => {
      let slider = document.querySelector('.slider');
      let target = this.elem.getBoundingClientRect();
      let newPosition = event.clientX - target.left;
      if(newPosition < 0) {
        newPosition = 0;
      }else if(newPosition > slider.offsetWidth) {
        newPosition = slider.offsetWidth;
      }
      let x = newPosition / target.width;
      let ind1 = x * (this.steps - 1);
      this.value = Math.round(ind1);
      this.onClick();
      document.querySelector('.slider').classList.remove('slider_dragging');
      document.removeEventListener('pointermove', this.moveOn);
      document.removeEventListener('pointerup', this.moveEnd);
    }

}
