import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createClassRibbon();
    this.ribbon__inner = this.elem.querySelector('.ribbon__inner');
    this.scroll_Width = this.ribbon__inner.scrollWidth;
    this.scroll_left = this.ribbon__inner.scrollLeft;
    this.client_Width = this.ribbon__inner.clientWidth;
    this.scroll_right = this.scroll_Width - this.scroll_left - this.client_Width;

    this.btn_R = this.elem.querySelector('.ribbon__arrow_right');

    this.btn_R.addEventListener('click', () => {
      this.ribbon__inner.scrollBy(350, 0);

      if(this.scroll_right < 1) {
      this.btn_R.classList.remove('ribbon__arrow_visible');
      } else if(this.scroll_right > 1) {
      this.btn_R.classList.add('ribbon__arrow_visible');
    }
    });

    this.btn_L = this.elem.querySelector('.ribbon__arrow_left');

    this.btn_L.addEventListener('click', () => {
      this.ribbon__inner.scrollBy(-350, 0);

      if(this.scroll_left == 0) {
      this.btn_L.classList.remove('ribbon__arrow_visible');
      } else if(this.scroll_left > 1) {
      this.btn_L.classList.add('ribbon__arrow_visible');
    }
    });
    
    

    this.scroll_left = 0;
    this.btn_R.classList.add('ribbon__arrow_visible');
  }

  createClassRibbon() {
    this.elem = createElement(`
    <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">

    </nav>

    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
    `);

    let navElem = this.elem.querySelector('.ribbon__inner');

    for(let category of this.categories) {
      let list = createElement(`
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `)
      navElem.append(list);
    }

  }

  // scrollRight() {
  //   this.ribbon__inner.scrollBy(350, 0);
  //   if(this.scroll_right < 1) {
  //     this.btn_R.classList.remove('ribbon__arrow_visible');
  //   } else if(this.scroll_right > 1) {
  //     this.btn_R.classList.add('ribbon__arrow_visible');
  //   }
  // }

  // scrollLeft() {
  //   this.ribbon__inner.scrollBy(-350, 0);
  //   if(this.scroll_left == 0) {
  //     this.btn_L.classList.remove('ribbon__arrow_visible');
  //   } else if(this.scroll_left > 1) {
  //     this.btn_L.classList.add('ribbon__arrow_visible');
  //   }
  // }

}
