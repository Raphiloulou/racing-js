function ex04(){
    let lettres =[];
    const footertags = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    function updateDisplay(){
        footertags.textContent = lettres.join('');
    };
    document.addEventListener('keypress' , (event) => {
        lettres.push(event.key);
        if (lettres.length > 42) {
            lettres.shift();
        }
    updateDisplay();
    })
}


window.onload = (e) => {
    ex04();
}
