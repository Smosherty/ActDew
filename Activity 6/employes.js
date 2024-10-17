$(document).ready(function() { //Esta función se ejecutará una vez el DOM esté completamente cargado
    $.ajax({     //jQuery
        url: 'employees.json',
        method: 'GET', // se usa para solicitar datos de un servidor
        dataType: 'json', //Se especifica el tipo de dato
        success: function(data){ //Se ejecuta si la solicitud AJAX se realiza con éxito

            //Inicializar una variable que contenga una cadena que represente la estructura de la tabla
            //Utilizar FUNCTION $.each() de jQuery

            let table = '<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Departament</th></tr></thead></table>'
            $each(data, function(index,employees){

            table += '<tr><td>&{employee.id}</td><td>&{employee.name}</td><td>&{employee.departament}</td></tr>'

            });
            table += '</tbody></table>';
            $('#table-container').html(table);
        },
        error: function(){
            $('#table-container').html('<p>Error loading data.</p>');
        }
    });
});





















fetch('employees.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        createTable(data);
    });


function createTable(employees) {
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const headers = ['id', 'name', 'department'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    
    employees.forEach(employee => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = employee.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);

        const departmentCell = document.createElement('td');
        departmentCell.textContent = employee.department;
        row.appendChild(departmentCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    document.body.appendChild(table);
}