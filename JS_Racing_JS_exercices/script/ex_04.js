function ex04() {
    let caracteresSaisis = "";

    const boiteBlanche = document.querySelector("footer > div");

    if (!boiteBlanche) {
        console.error("boîte blanche pas trouvée");
        return;
    }

    document.addEventListener("keydown", function (evenement) {
        caracteresSaisis += evenement.key;

        if (caracteresSaisis.length > 42) {
            caracteresSaisis = caracteresSaisis.slice(-42);
        }

        boiteBlanche.textContent = caracteresSaisis;
    });
}

window.onload = () => {
    ex04();
};
