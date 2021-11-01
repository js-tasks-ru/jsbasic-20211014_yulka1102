function makeDiagonalRed(table) {
  for(let i = (table.rows.length - 1); i >= 0; i--) {
    table.rows[i].cells[i].style.background = 'red';
  }
}
