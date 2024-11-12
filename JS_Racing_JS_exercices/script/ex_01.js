function ex01(){
const footertags = document.getElementsByTagName("footer")[0];
footertags.getElementsByTagName("div")[0].innerHTML = "Hello World";
}
window.onload = (e) => {
    ex01();
}
