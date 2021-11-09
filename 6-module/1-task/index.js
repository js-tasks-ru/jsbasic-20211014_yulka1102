/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
    constructor(rows) {
    this.rows = rows;
    this.createTableWithNames();
  }

  createTableWithNames() {
		this.elem = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
		let tr1 = document.createElement('tr')
    let th0 = document.createElement('th');
    th0.innerHTML = 'Имя'
    let th1 = document.createElement('th');
    th1.innerHTML = 'Возраст'
    let th2 = document.createElement('th');
    th2.innerHTML = 'Зарплата'
    let th3 = document.createElement('th');
    th3.innerHTML = 'Город'
		tr1.append(th0, th1, th2, th3);
    thead.append(tr1);
		this.elem.append(thead);
      for(let i = 0; i < this.rows.length; i++) {
      let tr = document.createElement('tr');

      let td4 = document.createElement('td');
		  td4.innerHTML = '<button>X</button>';

      let td0 = document.createElement('td');
      td0.innerHTML = this.rows[i].name;
      let td1 = document.createElement('td');
      td1.innerHTML = this.rows[i].age;
      let td2 = document.createElement('td');
      td2.innerHTML = this.rows[i].salary;
      let td3 = document.createElement('td');
      td3.innerHTML = this.rows[i].city;

      tr.append(td0, td1, td2, td3, td4);
      tbody.append(tr);
      this.elem.append(tbody);
      }
      let btns = this.elem.querySelectorAll('button');
      for(let btn of btns) {
        btn.addEventListener('click', () => {
          let targetTr = btn.closest('tr');
          targetTr.remove();
        });
      }
  }
}

