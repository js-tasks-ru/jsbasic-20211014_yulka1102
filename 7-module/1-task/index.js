import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createClassRibbon();
    this.openCategory();
    this.ribbon__inner = this.elem.querySelector('.ribbon__inner');
    
    this.scroll_left = 0;

    this.btn_R = this.elem.querySelector('.ribbon__arrow_right');

    this.btn_R.addEventListener('click', () => {
      this.scrollRight()
    });

    this.btn_L = this.elem.querySelector('.ribbon__arrow_left');

    this.btn_L.addEventListener('click', () => {
      this.scrollLeft()
    });
    
    this.btn_R.classList.add('ribbon__arrow_visible');
    this.btn_L.classList.remove('ribbon__arrow_visible');
  }

  createClassRibbon() {
    this.elem = createElement(`
    <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
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

  scrollRight() {
    let scroll_Width = this.ribbon__inner.scrollWidth;
    let scroll_left = this.ribbon__inner.scrollLeft;
    let client_Width = this.ribbon__inner.clientWidth;
    let scroll_right = scroll_Width - scroll_left - client_Width; 

    if(scroll_right < 1) {
      this.btn_R.classList.remove('ribbon__arrow_visible');
    } else {
    this.btn_R.classList.add('ribbon__arrow_visible')
    }

    this.ribbon__inner.scrollBy(350, 0);
    this.btn_L.classList.add('ribbon__arrow_visible');
  }

  scrollLeft() {
    let scroll_left = this.ribbon__inner.scrollLeft;
    if(scroll_left == 0) {
      this.btn_L.classList.remove('ribbon__arrow_visible');
      } else {
      this.btn_L.classList.add('ribbon__arrow_visible');
      this.btn_R.classList.add('ribbon__arrow_visible');
    }
      this.ribbon__inner.scrollBy(-350, 0);
  }

  openCategory() {
    let links = this.elem.querySelectorAll('a');
  
    for(let link of links) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
          let links = this.elem.querySelectorAll('a');
          for(let link of links) {
            if(link.classList.contains('ribbon__item_active')) link.classList.remove('ribbon__item_active'); 
          }
        link.classList.add('ribbon__item_active');

        let customEvent = new CustomEvent("ribbon-select", { detail: link.dataset.id,
          bubbles: true});
          this.elem.dispatchEvent(customEvent);
      })
    }
  }
}
