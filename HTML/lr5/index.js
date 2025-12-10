function addRow() {
    console.log("Click");
    const id = document.getElementById('id').value;
    const first_name = document.getElementById('First-Name').value;
    const last_name = document.getElementById('Last-Name').value;
    const username = document.getElementById('Username').value;
    if (id && first_name && last_name && username) {

        const table_body = document.getElementsByTagName('tbody')[0];
        const new_row = document.createElement('tr');

        const id_cell = document.createElement('td');
        id_cell.textContent = id;
        new_row.appendChild(id_cell);

        const first_name_cell = document.createElement('td');
        first_name_cell.textContent = first_name;
        new_row.appendChild(first_name_cell);

        const last_name_cell = document.createElement('td');
        last_name_cell.textContent = last_name;
        new_row.appendChild(last_name_cell);

        const username_cell = document.createElement('td');
        username_cell.textContent = username;
        new_row.appendChild(username_cell);

        console.log(new_row);

        table_body.appendChild(new_row);
    } else {
        alert('Please enter all fields');
    }
}