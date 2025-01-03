function ex10(){
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const postalCode = input.value.trim();

  if (!postalCode) {
    alert('Veuillez entrer un code postal.');
    return;
  }

  const apiUrl = `https://apicarto.ign.fr/api/codes-postaux/communes/${postalCode}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données.');
      }
      return response.json();
    })
    .then((data) => {
      if (data.length === 0) {
        alert('Aucune donnée trouvée pour ce code postal.');
        return;
      }

      const { nomCommune, libelleAcheminement } = data[0];
      const resultBox = document.createElement('div');
      resultBox.style.marginTop = '20px';
      resultBox.style.padding = '10px';
      resultBox.style.border = '1px solid #ccc';
      resultBox.style.backgroundColor = '#f9f9f9';

      resultBox.innerHTML = `
        <p><strong>Nom de la commune :</strong> ${nomCommune}</p>
        <p><strong>Libellé d'acheminement :</strong> ${libelleAcheminement}</p>
      `;

      document.body.appendChild(resultBox);
    })
    .catch((error) => {
      console.error('Erreur :', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    });
});
}
window.onload = () => {
    ex10();
};