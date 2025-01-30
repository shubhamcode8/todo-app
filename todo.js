let id = 1;
let isDarkMode = true;

function done(id) {
  const div = document.getElementById(id);
  div.children[1].innerHTML = "done \u{1F973}";
  div.children[0].style.textDecoration = "line-through";
  div.children[0].style.color = "grey";
}

function createDiv(title, id) {
  const child = document.createElement("div");
  child.setAttribute("id", id);
  const grandchild1 = document.createElement("div");
  const grandchild2 = document.createElement("button");
  grandchild2.setAttribute("id", "donebutton");
  grandchild2.setAttribute("onclick", `done(${id})`);

  grandchild1.innerHTML = title;
  grandchild1.style.color = isDarkMode ? "white" : "black";
  grandchild2.innerHTML = "Mark as done";

  child.appendChild(grandchild1);
  child.appendChild(grandchild2);

  child.style.display = "flex";
  child.style.justifyContent = "space-between";
  child.style.padding = "10px";
  child.style.border = "2px solid   #231540";

  return child;
}
function populateDiv() {
  const title = document.getElementById("input").value;
  const parent = document.getElementById("todos");
  parent.appendChild(createDiv(title, id++));
}

function changeTheme() {
  isDarkMode = !isDarkMode;

  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  const input = document.getElementById("input");
  const domdiv = document.getElementById("todos");
  const icon = document.getElementById("icon");

  if (isDarkMode) {
    container1.style.backgroundImage = "url(bg-desktop-dark.jpg)";
    container2.style.backgroundColor = "rgb(27, 0, 70)";
    input.style.backgroundColor = " rgb(29, 28, 49)";
    input.style.color = "white";
    domdiv.style.backgroundColor = " rgb(29, 28, 49)";
    icon.src = "icon-sun.svg";
  } else {
    container1.style.backgroundImage = "url(bg-desktop-light.jpg)";
    container2.style.backgroundColor = "white";
    input.style.backgroundColor = "white";
    input.style.color = "black";
    domdiv.style.backgroundColor = "whitesmoke";
    icon.src = "icon-moon.svg";
  }

  for (let i = 0; i < domdiv.children.length; i++) {
    domdiv.children[i].children[0].style.color = isDarkMode ? "white" : "black";
  }
}
