const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = []; // array 초기화 방지하기 우해 업데이트가 가능한 let 으로 변경.

function saveToDos() { //save to localStorage
    localStorage.setItem("todos",);
    //JSON.stringify() > string 으로 변경해줌
    //JSON.parse > string 을 array 형태로 변경해줌
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    
    li.remove();
}

function paintToDo(newToDoObj) { //todo 기능 만들기(시각화)
    const li = document.createElement("li");
    li.id = newToDoObj.id; // li 에 id 부여
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = { // deleteTOdo 에서 DB delete 하기 위하여 object 로 변경하고, id를 부여하여 어떤 item 의 DB 정보를 제거했는지
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //새로고침해도 TODO LIST가 보일수있게

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);

    // array에 대해서 각각의 item 에 실행시킬수 있는 함수
    // parsedToDos 의 item 을 paintToDo 힘수 인자로 전달하여 실행.
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos; // 새로고침되어도 예전 array 정보 저장.
    };
