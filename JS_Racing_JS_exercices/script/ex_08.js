function ex08() {
    var canvas = document.querySelectorAll("footer div");
    var couleurs = ["orange", "purple", "black", "green"];

    for (var i = 0; i < canvas.length; i++){
        var couleursindex = i % couleurs.length;
        console.log(couleursindex);
    }
}

window.onload = () => {
    ex08();
};