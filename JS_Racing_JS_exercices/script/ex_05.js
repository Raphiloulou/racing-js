function ex05(){
const plus = document.getElementsByTagName("button")[0];
const moins = document.getElementsByTagName("button")[1];
const bgcolor = document.getElementsByTagName("select")[0];
const body = document.body;
let fontSize = 10;
plus.addEventListener("click", () =>{
    fontSize+=10;
    body.style.fontSize = fontSize + "px";
});
moins.addEventListener("click", () =>{
    fontSize-=10;
    body.style.fontSize = fontSize + "px";
});
bgcolor.addEventListener("change", (event) => {
    body.style.backgroundColor = event.target.value;
});
}
window.onload = (e) => {
ex05();
}