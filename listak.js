function generalAlaptomb(hossz = 10, min = 1, max = 100) {
	const tomb = [];
	for (let i = 0; i < hossz; i++) {
		const veletlenszam = Math.floor(Math.random() * (max - min + 1)) + min;
		tomb.push(veletlenszam);
	}
	return tomb;
}

// minimumkiválasztás

function kiszamitMin(tomb) {
	if (tomb.length === 0) return null;
	let min = tomb[0];
	for (let i = 1; i < tomb.length; i++) {
		if (tomb[i] < min) {
			min = tomb[i];
		}
	}
	return min;
}
// maximumkiválasztás

function kiszamitMax(tomb) {
	if (tomb.length === 0) return null;
	let max = tomb[0];
	for (let i = 1; i < tomb.length; i++) {
		if (tomb[i] > max) {
			max = tomb[i];
		}
	}
	return max;
}

// átlagkiszámítás

function kiszamitAtlag(tomb) {
	if (tomb.length === 0) return null;
	let osszeg = 0;
	for (let i = 0; i < tomb.length; i++) {
		osszeg += tomb[i];
	}
	return osszeg / tomb.length;
}

// összegzés

function kiszamitOsszeg(tomb) {
	let osszeg = 0;
	for (let i = 0; i < tomb.length; i++) {
		osszeg += tomb[i];
	}
	return osszeg;
}

// minden elem négyzetre emelése

function negyzetreEmel(tomb) {
	const negyzetek = [];
	for (let i = 0; i < tomb.length; i++) {
		negyzetek.push(tomb[i] * tomb[i]);
	}
	return negyzetek;
}
