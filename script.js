// Custom Cursor:___

let main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",function(ele){
    // console.log(ele);
    crsr.style.left = ele.x+"px";
    crsr.style.top = ele.y+"px";

})