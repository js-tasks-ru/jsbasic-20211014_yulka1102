import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.open();
    this.setTitle;
    this.setBody;
    this.elem = createElement(`
    <div class="container1">
    <!--Корневой элемент Modal-->
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
            
          </h3>
        </div>
  
        <div class="modal__body">
          
        </div>
      </div>
  
    </div>
  </div>`);

    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
      
    });
    // this.elem.removeEventListener('click', () => this.close());
    document.addEventListener('keydown', () => {
      if(event.code === 'Escape') {
        this.close();
      }
      
    });
    // document.removeEventListener('keydown', () => this.close())
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').append(title);
  }

  setBody(node) {
  document.body.querySelector('.container').style.display = 'none';
  this.elem.querySelector('.modal__body').append(node);
  }

  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    document.body.querySelector('.container').style.display = '';
  }
}
