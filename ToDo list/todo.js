const inputBox=document.querySelector('.input_field input');
const addBtn=document.querySelector('.input_field button');
const todoList=document.querySelector('.todoList');
const clearButton=document.querySelector('.footer button');
var desc=document.querySelector('.footer span');

showTasks();
inputBox.onkeyup = ()=> {
    let userData=inputBox.value;
    if(userData.trim()!=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
};

addBtn.onclick = ()=> {
    let userData=inputBox.value;
    let localstore= localStorage.getItem("New Todo");
    if(localstore==null){
        listItems=[];
    }else{
        listItems=JSON.parse(localstore);
    }
    listItems.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listItems));
    showTasks();
};

function showTasks(){
    let localstore= localStorage.getItem("New Todo");
    if(localstore==null){
        listItems=[];
    }else{
        listItems=JSON.parse(localstore);
    }
    let newliTag='';
    listItems.forEach((element, index) => {
        newliTag +=`<li>${element}<span onclick="deleteTask(${index})";><i class="fa fa-trash"></i></span></li>`
    });
    if(listItems.length >0){
        clearButton.classList.add("active");
    }else{
        clearButton.classList.remove("active");
    }
    todoList.innerHTML=newliTag;
    inputBox.value='';
    let userData=inputBox.value;
    if(userData.trim()!=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
    if(listItems.length!==0){
        desc.innerHTML=`You have ${listItems.length} pending tasks`;
    }else{
        desc.innerHTML=`You don't have any pending tasks`;
    }
}

function deleteTask(index){
    let localstore= localStorage.getItem("New Todo");
    listItems=JSON.parse(localstore);
    listItems.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listItems));
    showTasks();
}

clearButton.onclick = ()=>{
    listItems=[];
    localStorage.setItem("New Todo",JSON.stringify(listItems));
    addBtn.classList.remove("active");
    showTasks();
};