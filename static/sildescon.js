let aktuellerIndex = 0;
const kachelnProSeite = 3;
const kacheln = document.querySelectorAll('.kachel');
const gesamtKacheln = kacheln.length;

function wechselRestaurants(anzahl) {
  aktuellerIndex += anzahl;

  if (aktuellerIndex < 0) {
    aktuellerIndex = 0;
  }

  if (aktuellerIndex > gesamtKacheln - kachelnProSeite) {
    aktuellerIndex = gesamtKacheln - kachelnProSeite;
  }

  const verschiebung = -aktuellerIndex * 100 / kachelnProSeite;
  document.querySelector('.restaurant-kacheln').style.transform = `translateX(${verschiebung}%)`;
}
