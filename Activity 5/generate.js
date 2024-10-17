function createTable(ev) {
  ev.preventdefault();

  let container = document.getElementById(container);
  let table = document.createElement("table");

  let rows = document.getElementByName(rows).value
  let columns = ev.target.element.columns.value

  let tablet = '';

  for(let i = 0; i < rows; i++){
    //creamos fila
    contRow = document.createElement('tr');
    table.appendChild(contRow);
    for(let j = 0; j < columns; j++){
      let contColum = document.createElement()
    }
  }
}