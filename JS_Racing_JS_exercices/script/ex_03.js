function ex03(){
    document.addEventListener("DOMContentLoaded", function() {
    const whiteBox = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    whitebox.addEventListener("click", function() {
        let name = "";
        while (name != ""){
        name = prompt("What is your name?");
        }
        const footertags = document.getElementsByTagName("footer")[0];
        footertags.getElementsByTagName("div")[0].innerHTML = name;
    }
    });
}
window.onload = (e) => {
    ex03();
}
