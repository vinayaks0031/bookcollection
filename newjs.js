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
    add(book) {
        let table = document.querySelector("tbody");
        console.log(table);
        let html = `<tr>
                        <td>1</td>
                        <td>${book.name}</td>
                        <td>${book.bookname}</td>
                        <td>${book.type}</td>
                                `;
        table.innerHTML += html;
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
    let book = new book(name, bookname, type);
    let dis = new display;
    if (dis.validate(book)) {
        dis.add(book);
        dis.clear();
        dis.show("success", "book is added!");
    }
    else {
        dis.show("danger", "Enter some real data");
    }
}
