const cim = document.createElement('h3');
cim.textContent = 'Fájlkezelés';

const fajlinput = document.createElement('input');
fajlinput.type = 'file';
fajlinput.accept = '.txt, .json, .csv';

const eredmenydoboz = document.createElement('div');

// elemek hozzafuzese az ures body hoz
document.body.appendChild(cim);
document.body.appendChild(fajlinput);
document.body.appendChild(eredmenydoboz);

// fajl kivalasztasanak figyelese
fajlinput.addEventListener('change', (event) => {
	const kivalsztottfajl = fajlinput.files[0];
	if (kivalsztottfajl) {
		const olvaso = new FileReader();

		olvaso.onload = function(e) {
			const nyersszoveg = olvaso.result;

// szovegbol szamlista keszitese (pontos vesszo menten darabolas, felesleges szokozok levagasa, ures elemek kiszurese. szamokka alakitas)
			const szamok = nyersszoveg
				.split(/[\s,]+/)
				.map(szam => szam.trim())
				.filter(szam => szam !== '')
				.map(szam => parseFloat(szam))
				.filter(szam => !isNaN(szam));

// listamuveletek elvegzese
const parosak = szamok.filter(szam => szam % 2 === 0);
const osszeg = szamok.reduce((acc, szam) => acc + szam, 0);

//elozo talalatok torlese innerhtml nelkul
while (eredmenydoboz.firstChild) {
		eredmenydoboz.removeChild(eredmenydoboz.firstChild);
	}

