var ul = document.getElementById("ul")



function add() {
    var add = document.getElementById("todo");
    // console.log(add.value)
    var li =  document.createElement("li")
    var litext = document.createTextNode(add.value)
    li.appendChild(litext)
   ul.appendChild(li)
   add.value ="";
   var delt = document.createElement("button");
   var delttext = document.createTextNode("Delete");
   delt.appendChild(delttext)
   li.appendChild(delt) 
   delt.setAttribute("onclick","delitem(this)")
   console.log(li)
   var editbtn = document.createElement("button")
   var edittext = document.createTextNode("edit")
   editbtn.appendChild(edittext);
   li.appendChild(editbtn);
   editbtn.setAttribute("onclick","editbtn(this)")
   console.log(editbtn)
  delt.setAttribute("class","btn")
    li.setAttribute("class","list")
}

function delitem(e){
    e.parentNode.remove()

   console.log(e)
}
function deltall() {
    ul.innerHTML = "";
}

function editbtn (e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
  
}