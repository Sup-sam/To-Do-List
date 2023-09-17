const inputBox = document.getElementById("input-box");

const listOfTasks = document.getElementById("list-of-tasks");


// below is excute when i click button add
function addTask(){
    if(inputBox.value === ''){ // here i say if inputbox is empty
        alert("You have to write something")
    } 
    else { // but if it is not empty so...below
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listOfTasks.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // this for delete icon it is delete url u00d7
        li.appendChild(span); //here to display delete icon if i write just line up it is not show me anything and this delete it not working
        //  and style in css file ul li span 
    } 
    inputBox.value = '';
    saveTasks(); // i add the function of savetasks() here to if i evrey time make change it will save
}


listOfTasks.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();// i add it here to when i checked the data it will save also
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
},false);

// below is for if i close the browser the tasks not disapere so i make function make the browser
//  keep my task save for this we always use localstoarge.setItem

function saveTasks(){
    localStorage.setItem("tasks", listOfTasks.innerHTML);
}

//the function below is if i open my browser it will be there
function displayTasks(){
    listOfTasks.innerHTML = localStorage.getItem("tasks");
}
displayTasks();