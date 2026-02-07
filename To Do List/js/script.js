function addToDo() {

    const inputTask = document.getElementById('ToDo-Input');
    const inputDate = document.getElementById('ToDo-CreatedDate');
    const inputDeadline = document.getElementById('ToDo-Deadline');
    const inputPriority = document.getElementById('ToDo-Priority');
    const inputStatus = document.getElementById('ToDo-Status');

    if (inputTask.value.trim() === '' || inputDate.value === '' || inputDeadline.value === '') {
        alert('Please fill all fields!');
        return;
    }

    document.getElementById('YourToDoList').style.display = 'table';
    document.getElementById('empty-msg').style.display = 'none';

    const tableBody = document.getElementById("ToDo-Table-Body");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${inputTask.value}</td>
        <td>${inputDate.value}</td>
        <td>${inputDeadline.value.replace('T', ' ')}</td>
        <td>${inputPriority.value}</td>
        <td>${inputStatus.value}</td>
    `;

    tableBody.appendChild(row);

    inputTask.value = '';
}

document.getElementById('clearBtn').onclick = function() {
    document.getElementById("ToDo-List").innerHTML = "";
    document.getElementById('YourToDoList').style.display = 'none';
    document.querySelector("ul").style.display = 'block';
};

function filterToDo() {
    const pilihanUser = document.getElementById('filterStatus').value;
    const tabelBody = document.getElementById("ToDo-List");
    const daftarBaris = tabelBody.getElementsByTagName("tr");

    for (let i = 0; i < daftarBaris.length; i++) {
        const teksDiTabel = daftarBaris[i].getElementsByTagName("td")[3].textContent;

        if (pilihanUser === "All" || teksDiTabel === pilihanUser) {
            daftarBaris[i].style.display = ""; 
        } else {
            daftarBaris[i].style.display = "none";
        }
    }
}

