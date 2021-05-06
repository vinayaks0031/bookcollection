showitem();
class book {
    constructor(name, bookname, type) {
        this.name = name;
        this.bookname = bookname;
        this.type = type;
    }
}
class display {
    validate(book) {
        if (book.name.length > 2 && book.bookname.length > 2) {
            return true;
        }
        else {
            return false;
        }
    }
    clear() {
        let formLibrary = document.getElementById("formLibrary");
        formLibrary.reset();
    }
    show(alertype, msg) {
        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${alertype} alert-dismissible fade show" role="alert">
        <strong>hey there!</strong> ${msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        setTimeout(() => {
            message.innerHTML = "";
        }, 3000);
    }
}
let formLibrary = document.getElementById("formLibrary");
formLibrary.addEventListener("submit", addall);

function addall(e) {
    e.preventDefault();
    let tableR;
    let localData = localStorage.getItem("localData");
    if (localData == null) {
        tableR = [];
    }
    else {
        tableR = JSON.parse(localData);
    }
    let name = document.getElementById("name").value;
    let bookname = document.getElementById("author").value;
    let Fiction = document.getElementById("Fiction");
    let Programming = document.getElementById("Programming");
    let Cooking = document.getElementById("Cooking");
    let type;
    if (Fiction.checked) {
        type = Fiction.value
    }
    else if (Programming.checked) {
        type = Programming.value
    }
    else if (Cooking.checked) {
        type = Cooking.value
    }
    let book1 = new book(name, bookname, type);
    tableR.push(book1);
    localStorage.setItem("localData", JSON.stringify(tableR));
    let dis = new display;
    if (dis.validate(book1)) {
        showitem();
        dis.clear();
        dis.show("success", "book is added!");
    }
    else {
        dis.show("danger", "Enter some real data");
    }
}
function showitem() {
    let html = "";
    let tableR;
    let table = document.querySelector("tbody");
    let localData = localStorage.getItem("localData");
    if (localData == null) {
        tableR = [];
    }
    else {
        tableR = JSON.parse(localData);
    }
    tableR.forEach(function (element, index) {
        html += `<tr>
        <td>${index}</td>
        <td>${element.name}</td>
        <td>${element.bookname}</td>
        <td>${element.type} <button id="${index}" onclick="deletenote(this.id)" ><i class="fas fa-times-circle"></i></button> </td>

    </tr>    `;
    });
    table.innerHTML = html;
}

function deletenote(i) {
    console.log("yes deleted");
    let tableR;
    let localData = localStorage.getItem("localData");
    if (localData == null) {
        tableR = [];
    }
    else {
        tableR = JSON.parse(localData);
    }
    tableR.splice(i, 1);
    localStorage.setItem("localData", JSON.stringify(tableR));
    showitem();
}