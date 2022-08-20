
const FORM = document.getElementsByClassName(`formWindow`);
const CONTENT = document.getElementsByClassName(`container`);
const form  = document.getElementById(`getBook`);
const form2 = document.forms[`getBook`];
const add = document.getElementsByClassName(`add`);
let myLibrary = [];

form.onsubmit = function(e){
    e.preventDefault();
    console.log(this);
    console.log(this.author_name.value)
    myLibrary.push(new Book(this.book_name.value,this.author_name.value,this.year.value));
    console.log(myLibrary);
    toogleForm();
}
add[0].addEventListener(`click`, ()=>{
    toogleForm();
})
function Book(title,author,year) {
  // the constructor...
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