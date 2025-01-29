let id = 1;



function done(id){
 const div = document.getElementById(id);
 div.children[1].innerHTML = "done \u{1F973}"
 div.children[0].style.textDecoration = "line-through"
 div.children[0].style.color = "grey"

}


function createDiv(title,id){
 const child = document.createElement("div")
 child.setAttribute("id",id)
 const grandchild1 = document.createElement("div")
 const grandchild2 = document.createElement("button")
 grandchild2.setAttribute("id","donebutton")
 grandchild2.setAttribute("onclick",`done(${id})`)

 grandchild1.innerHTML = title;
 grandchild1.style.color= 'white'
 grandchild2.innerHTML = "Mark as done"

 child.appendChild(grandchild1)
 child.appendChild(grandchild2)

 child.style.display = "flex"
 child.style.justifyContent = "space-between"
 child.style.padding = "10px"
 child.style.border = "2px solid   #231540"

 return child;
}
function populateDiv(){
    const title = document.getElementById("input").value;
    const parent = document.getElementById("todos")
    parent.appendChild(createDiv(title,id++))
}
