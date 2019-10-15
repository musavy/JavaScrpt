//form in JavaScript

let myFrom = document.forms.myfrom;

myFrom.name.onfocus = function() {
  myFrom.name.style.border = "4px solid pink";
};
