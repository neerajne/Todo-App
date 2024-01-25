let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let delBtn =  document.createElement("button");
    delBtn.innerText =  "Delete";
    delBtn.classList.add("delete");
    item.innerText = input.value;
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(input.value);
    input.value = "";
})
ul.addEventListener("click",function(event){
    console.log(event.target.nodeName);
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})