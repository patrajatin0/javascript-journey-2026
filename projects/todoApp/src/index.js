const addBtn = document.getElementById("add")

let todList = document.getElementById("todolist")
addBtn.addEventListener("click", function (e) {
    let inputTexts = document.getElementById("inputText").value
    let li = document.createElement("li")
    li.textContent = inputTexts
    todList.appendChild(li)



})

let b = []

b.push("jatin")
b.push("kiran")
b.push("varshini")
console.log(b);
