//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filteredToDo = document.querySelector('.filter-todo');

//Listners
toDoButton.addEventListener('click',addToDo);
toDoList.addEventListener('click' , deleteCheck);
filteredToDo.addEventListener('click' , filterList);

//Functions
function addToDo(event) {
   event.preventDefault();

const toDoDiv = document.createElement('div');
toDoDiv.classList.add('todo');

const listItem = document.createElement('li');
listItem.innerText = toDoInput.value;
listItem.classList.add('toDoItem');
toDoDiv.appendChild(listItem);

const completedButton = document.createElement('button');
completedButton.innerHTML = `<i class="fas fa-check"></i>`;
completedButton.classList.add('complete-btn');
toDoDiv.appendChild(completedButton);

const trashButton = document.createElement('button');
trashButton.classList.add('trash-btn');
trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
toDoDiv.appendChild(trashButton);

toDoList.appendChild(toDoDiv);

//CLEAR TODO INPUT VALUE AFTER WE ADD IT
toDoInput.value = '';
}

function deleteCheck(e) {
   const item = e.target;
   if(item.classList[0] === "trash-btn"){
      const deleteItem = item.parentElement;
      deleteItem.classList.add('fall');
      //deleteItem.remove();
      deleteItem.addEventListener('transitionend' , function(){
         deleteItem.remove();
   });
}
   else if (item.classList[0] === "complete-btn") {
      const completedItem = item.parentElement;
      completedItem.classList.toggle("completed");
      
   }
}

function filterList(e) {
   const todos = toDoList.childNodes;
   todos.forEach(function (todo) {
      switch (e.target.value) {
         case "all":
            todo.style.display = 'flex';
            break;
         case "completed" :
            if (todo.classList.contains('completed')) {
               todo.style.display = 'flex';
            }
            else {todo.style.display = 'none';
         }
         break;
         case "uncompleted" :
            if (!todo.classList.contains('completed')) {
             todo.style.display = 'flex';
            } else{todo.style.display = 'none';}
      }
   });
   }
/*
function filterList(e){
   const todos = toDoList.childNodes;
   todos.forEach(function (todo) {
      switch(e.target.value) {
         case "all" :
            todo.style.display = 'none';
            break;
            case "completed" :
               if(todo.classList.contains('completed')){
                  todo.style.display = 'flex';
               } else{
                  todo.style.display = "none";
               }
      }
   })
}
*/
