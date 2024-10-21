const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("task-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); //Adding list-items in ul.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //For displaying cross sign.
        li.appendChild(span);
    }
    inputBox.value = ""; //After writing text input field must be emptied
    saveData(); 
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Adding Event listener through enter key

inputBox.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        addTask();
    }
});



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();