

let count =0;

function countUp(){
    count++;
    document.getElementById("count-el").innerText =count;
}

function save(){
    localStorage.setItem("count",count);
    document.getElementById("count-el").innerText =count;
}