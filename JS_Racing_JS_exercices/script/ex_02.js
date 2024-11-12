function ex02 () {
    
    let count = 0;
    let footertags = document.getElementsByTagName("footer")[0];
    let divi =  footertags.getElementsByTagName("div")[0];
    divi.onclick = function () {
        count++;
        divi.innerHTML = count;
    }}  
window.onload = (e) => {
    ex02();
}
