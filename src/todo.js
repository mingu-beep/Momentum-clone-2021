const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = `toDos`;

let idNumbers = 1;

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = idNumbers;
  idNumbers++;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);

  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function handleShowing(event) {
  location.reload();
  loadToDos();
}

function init() {
  const userInfo = localStorage.getItem("currentUser");
  if (userInfo === null) {
    const nameInput = document.querySelector(".js-form");
    nameInput.addEventListener("submit", handleShowing);
  } else {
    const welcome = document.querySelector(".welcome");
    const clock = document.querySelector(".js-clock");
    welcome.classList.add("noshowing");
    clock.classList.add("showing");
    toDoForm.classList.remove("noshowing");
    toDoList.classList.remove("noshowing");
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
  }
}

init();
