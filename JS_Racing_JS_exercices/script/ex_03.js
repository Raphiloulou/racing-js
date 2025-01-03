function ex03() {
    const boiteBlanche = document.querySelector("footer > div");


     if (!boiteBlanche) {
        console.error("boîte blanche pas trouvée ");
        return;
    }

    boiteBlanche.addEventListener("click", function () {
        let nom = "";

        while (!nom) {
            nom = prompt("Quel est votre nom ?");


            if (nom === null) {
                return;
            }
        }

        const confirmation = confirm(`Êtes-vous sûr que ${nom} est votre nom ?`);

        if (confirmation) {
            boiteBlanche.textContent = `Bonjour ${nom} !`;
            alert(`Bonjour ${nom} !`);
            }
        });
    };
window.onload = () => {
    ex03();
};
