

// Acess increment btn
var increment = document.getElementById("increment-btn");
// Acess h1
var countEl = document.getElementById("count-el");
//Acess save btn
var saveEl = document.getElementById("save-btn");

increment.addEventListener('click', proceed);
saveEl.addEventListener('click', saved)

let count = 0;
function proceed(){
    count = count + 1
    countEl.innerText = count;
}


function saved(){
    var student = document.getElementById("student");
    student.innerText += " "+ count +" " + "-";  
    countEl.textContent = 0;
    count = 0;
}