const inputbox = document.getElementById("input-box")
const listbox = document.getElementById("list-container")

function addTask(){


    if(inputbox.value === ''){
        alert("Enter The ToDo.")
    }
    else{
        var li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listbox.appendChild(li)
        var span = document.createElement("span")
        span.innerHTML = "\u00d7" //x icon
        li.appendChild(span);
        inputbox.value=""
        saveData()
    }
}

listbox.addEventListener("click",(e)=>{
    if(e.target.tagName === 'LI'){
      
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData()//save after adding and deleting data
},false)


function saveData(){
    localStorage.setItem("data",listbox.innerHTML);//this will save the listbox content to local storage under name of data
}

function showData(){
    listbox.innerHTML = localStorage.getItem("data");
}

showData()//after page load