var selectedRow = null

function onFormSubmit() {
    if (ValidityState()) {
        var formData = readFormData();
        if (selectedRow == null)
        insertedNewRecord(formData);
        else
        updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["middleName"] = document.getElementById("middleName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["course"] = document.getElementById("course").value;
    formData["schoolYear"] = document.getElementById("schoolYear").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.middleName;

    cell3 = newRow.insertCell(2);  
    cell3.innerHTML = data.lastName;  

    cell4 = newRow.insertCell(3);  
    cell4.innerHTML = data.age;

    cell5 = newRow.insertCell(4);  
    cell5.innerHTML = data.gender;

    cell6 = newRow.insertCell(5);  
    cell6.innerHTML = data.birthday;

    cell7 = newRow.insertCell(6);  
    cell7.innerHTML = data.course;

    cell8 = newRow.insertCell(7);  
    cell8.innerHTML = data.schoolYear;

   cell9 = newRow.insertCell(8);
        cell9.innerHTML = '<button onClick= onEdit(this) >Edit</button> <button onClick= onDelete(this)>Delete</button>';

}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('middleName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[2].innerHTML;
    document.getElementById('age').value = selectedRow.cells[3].innerHTML;
    document.getElementById('gender').value = selectedRow.cells[4].innerHTML;
    document.getElementById('birthday').value = selectedRow.cells[5].innerHTML;
    document.getElementById('course').value = selectedRow.cells[6].innerHTML;
    document.getElementById('schoolYear').value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.middleName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.birthday;
    selectedRow.cells[6].innerHTML = formData.course;
    selectedRow.cells[7].innerHTML = formData.schoolYear;

}

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm(){
    document.getElementById('firstName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('course').value = '';
    document.getElementById('schoolYear').value = '';
    selectedRow = null;
}

function validate() {

    if (document.getElementById("FirstName").value == "") {
        invalid = false;
        document.getElementById("fullNameValidationError").studentList.remove("hide");
    }
    else {
        if (document.getElementById("fullNameValidationError").studentList.contains("hide"))
        document.getElementById("fullNameValidationError").studentList.add("hide");
    }
}