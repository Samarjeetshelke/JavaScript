document.addEventListener('DOMContentLoaded',function(){
    const list =document.querySelector('#movie-list ul');
    const forms =document.forms;

    //delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();

        //sami first you have to create a elements li , span 
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add text content valuus
        movieName.textContent = value;//user inputed value is retrived in value and valu is add to the element
        deleteBtn.textContent = 'delete';

        //now add the classes name 
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        //now last stap is to append it to the DOM
        li.appendChild(movieName);//your li element is atteched to movie-list (to the parent element ) and spans shoud be attached to the li element 
        li.appendChild(deleteBtn);
        list.appendChild(li);//li is get atteched to the list which is const list =document.querySelector('#movie-list ul') his parent 
    });
});

