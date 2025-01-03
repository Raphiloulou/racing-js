function ex06() {
    const boiteBlanche = document.querySelector("footer > div");

    const urlAPI = "https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-annuaire-education&q=&rows=26";

    fetch(urlAPI)
        .then((reponse) => reponse.json())
        .then((donnees) => {
            let contenu = "";

            donnees.records.forEach((enregistrement) => {
                const champs = enregistrement.fields;

                const commune = champs.nom_commune || "Non renseigné";
                const etablissement = champs.nom_etablissement || "Non renseigné";
                const email = champs.mail || "Non renseigné";

                contenu += `Commune : ${commune}, Établissement : ${etablissement}, Email : ${email}<br>`;
            });

            boiteBlanche.innerHTML = contenu;
        })
        .catch((erreur) => {
            console.error("Erreur lors de la récupération des données :", erreur);
            boiteBlanche.textContent = "Une erreur est survenue lors de la récupération des données.";
        });
}

window.onload = () => {
    ex06();
};
