let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input= document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value; 

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn) ;
    ul.appendChild(item);
    input.value = "";
    
});
ul.addEventListener("click", function( event) {
    console.log(event.target.nodeName == "button");
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
    
    
});

//let dltbtns = document.querySelectorAll(".delete");

//for (dltbtn of dltbtns){
  //  dltbtn.addEventListener("click", function() {
     //   let par = this.parentElement;
      //  par.remove();
   // });
//};
    
