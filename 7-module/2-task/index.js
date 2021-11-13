import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>
  
      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
  
          <h3 class="modal__title">
            111
          </h3>
        </div>
  
        <div class="modal__body">
          hgjghjg
        </div>
      </div>
  
    </div>`);

  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
    
    this.elem.querySelector('.modal__close').addEventListener('click', this.closeButton);
    
    document.addEventListener('keydown', this.closeKey);
    
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').innerHTML = title;
  }

  setBody(node) {
  this.elem.querySelector('.modal__body').innerHTML = '';
  this.elem.querySelector('.modal__body').append(node);
  }

  closeButton = (event) => {
    if(this.elem) {
      this.elem.remove();
    }
    document.body.classList.remove('is-modal-open');
    this.elem.querySelector('.modal__close').removeEventListener('click', this.closeButton);
  }

  closeKey = (event) => {
    if(event.code === 'Escape') {
      this.elem.remove();
      document.body.classList.remove('is-modal-open');
    }
    document.removeEventListener('keydown', this.closeKey)
  }

  close() {
    if(this.elem) {
      this.elem.remove();
      document.body.classList.remove('is-modal-open');
    }
  }
}
