const FORM = document.getElementsByClassName(`formWindow`);
const CONTENT = document.getElementsByClassName(`container`);
const form  = document.getElementById(`getBook`);
const add = document.getElementsByClassName(`add`);
const books = document.getElementsByClassName(`books`);
let myLibrary = [];
function Book(title,author,year,read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}
Book.prototype.show = function(){
    console.log(this);
}
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
    newElement.dataset.index = myLibrary.length - 1;
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
    
    let rmv_btn = document.createElement(`button`);
    rmv_btn.classList.add(`remove`)
    newElement.appendChild(rmv_btn);
    rmv_btn.textContent = `Remove`;

    rmv_btn.addEventListener(`click`, (e)=>{
        console.log(e.path[1].getAttribute(`data-index`));
        myLibrary.splice(e.path[1].getAttribute(`data-index`),1);
        e.path[1].remove();
    })
}
function fix_index(){
    let mybooks = 2;
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