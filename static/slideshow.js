const indikatoren = document.getElementsByClassName("indikator");
indikatoren[0].classList.add("aktiv");

const slides = document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");

var aktuellerIndex = 0;

function umschalten(anzahl) {
    var neuerIndex = aktuellerIndex + anzahl;

    if (neuerIndex < 0) {
        neuerIndex = slides.length - 1;
    }

    if (neuerIndex > slides.length - 1) {
        neuerIndex = 0;
    }

    springeZuEintrag(neuerIndex);
}

function springeZuEintrag(neuerIndex) {
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    indikatoren[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
}

// Funktion zum automatischen Wechseln der Bilder
function automatischerWechsel() {a
    umschalten(1);
}

// Intervall für automatischen Wechsel einstellen
setInterval(automatischerWechsel, 5000);  // 5000 Millisekunden = 5 Sekunden
