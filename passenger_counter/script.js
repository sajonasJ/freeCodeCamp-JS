
let countEl = document.getElementById('count-el');
let message = '"Count Saved"';
let saveEl = document.getElementById("save-el");
let count =0;

function countUp(){
    count++;
    countEl.textContent = count;
}

function save(){
    let countStr= ` ${count} - `;
    saveEl.textContent +=countStr;
    count=0;
    countEl.textContent = count;
    alert(message);
}

function reset(){
    count = 0;
    saveEl.innerText = "Previous Entries:";
    // countEl.innerText = count;
}