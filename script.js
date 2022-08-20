
const FORM = document.getElementsByClassName(`formWindow`);
const CONTENT = document.getElementsByClassName(`container`);
const form  = document.getElementById(`getBook`);
const form2 = document.forms[`getBook`];
const add = document.getElementsByClassName(`add`);
const books = document.getElementsByClassName(`books`);
let myLibrary = [];

add[0].addEventListener(`click`, ()=>{ // this opens the form
    toogleForm();
})

form.onsubmit = function(e){
    e.preventDefault();
    console.log(this);
    console.log(this.author_name.value);
    let book = new Book(this.book_name.value,this.author_name.value,this.year.value)
    myLibrary.push(book);
    console.log(myLibrary);
    toogleForm();
    addBookToPage(book);
}
function addBookToPage(book){
    let newElement = document.createElement(`div`);
    newElement.dataset.index = myLibrary.length;
    newElement.classList.add(`book`);
    books[0].appendChild(newElement);

    let title = document.createElement(`div`);
    newElement.appendChild(title);
    title.textContent =`Title: ` + book.title;
    ///newElement.appendChild(`title`);

    let author = document.createElement(`div`);
    newElement.appendChild(author);
    author.textContent =`Author: ` + book.author;

    let year = document.createElement(`div`);
    newElement.appendChild(year);
    year.textContent = `Year: ` + book.year;
    

 
}

function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
function toogleForm(){
    if(FORM[0].id !== `dissapear`){
        FORM[0].setAttribute(`id`,`dissapear`);
        CONTENT[0].classList.remove(`position`);
    }
    else{
        FORM[0].setAttribute(`id`,``);
        CONTENT[0].classList.add(`position`);
    }
}
function myFunc(){
    console.log(this);
    return false;
}